<?php
/**
 * Coupon claim handler: Step 3 of the coupon funnel (static site on
 * SiteGround, which runs PHP). Posted to by components/coupon-claim.tsx.
 *
 * Emails the claimed coupon voucher(s) to the customer from
 * service@dukeautorepair.com, BCC'd to the shop's lead inbox, then the visitor
 * lands on /thank-you-coupons/. Also works without JavaScript (redirects).
 *
 * The coupons come from coupon-offers.json (same folder; source:
 * public/coupon-offers.json), so the email always matches the website.
 */

const COUPON_FROM      = 'service@dukeautorepair.com';
const COUPON_FROM_NAME = 'Duke Auto Repair & Service';
// The shop's lead inbox: gets a blind copy of every voucher sent.
const LEAD_BCC         = 'service@dukeautorepair.com';
const SITE_URL         = 'https://www.dukeautorepair.com';
// Main ShopGenie booking link (business.bookingUrl in lib/business.ts).
const BOOKING_URL      = 'https://booking.shopgenie.io/?r=23ldgo';
const SHOP_ADDRESS     = '5220 Duke St, Alexandria, VA 22304';
const SHOP_PHONE       = '(703) 212-0608';
const MAX_PER_HOUR     = 5;  // claims per visitor IP
const MAX_PER_EMAIL    = 3;  // vouchers per email address per hour
const MIN_FILL_SECONDS = 3;  // faster than this is a bot

date_default_timezone_set('America/New_York');

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

/** Thank-you page address for the chosen codes. */
function thank_you_url(array $codes, string $firstName = '', bool $mailFailed = false): string
{
    $query = 'c=' . implode(',', array_map('rawurlencode', $codes));
    if ($firstName !== '') {
        $query .= '&n=' . rawurlencode($firstName);
    }
    if ($mailFailed) {
        $query .= '&mail=0';
    }
    return '/thank-you-coupons/?' . $query;
}

/**
 * Reply and stop. JSON for the pop-up; a redirect for plain form posts.
 * $codes (on success or mail failure) sends the visitor to their coupons.
 */
function finish(bool $ok, string $error = '', int $status = 200, array $codes = [], string $firstName = '', bool $mailFailed = false): void
{
    global $wantsJson;
    if ($wantsJson) {
        http_response_code($ok ? 200 : $status);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        $payload = $ok ? ['ok' => true] : ['ok' => false, 'error' => $error];
        if ($mailFailed) {
            $payload['mailFailed'] = true;
        }
        echo json_encode($payload);
    } elseif ($codes) {
        header('Location: ' . thank_you_url($codes, $firstName, $mailFailed), true, 303);
    } else {
        header('Location: /promotions/?claim_error=1', true, 303);
    }
    exit;
}

/** One line of text: no control characters (blocks header injection), trimmed, capped. */
function field(string $name, int $max): string
{
    $value = (string) ($_POST[$name] ?? '');
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

function h(string $text): string
{
    return htmlspecialchars($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/** Keep at most $max timestamps from the last hour in a temp file; false when over the limit. */
function within_limit(string $key, int $max): bool
{
    $log = rtrim(sys_get_temp_dir(), '/\\') . '/duke-coupon-' . md5($key);
    $recent = [];
    if (is_readable($log)) {
        $recent = array_filter(
            array_map('intval', explode("\n", (string) file_get_contents($log))),
            fn ($t) => $t > time() - 3600
        );
    }
    return count($recent) < $max;
}

function record_use(string $key): void
{
    $log = rtrim(sys_get_temp_dir(), '/\\') . '/duke-coupon-' . md5($key);
    $recent = [];
    if (is_readable($log)) {
        $recent = array_filter(
            array_map('intval', explode("\n", (string) file_get_contents($log))),
            fn ($t) => $t > time() - 3600
        );
    }
    $recent[] = time();
    @file_put_contents($log, implode("\n", $recent), LOCK_EX);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    finish(false, 'Method not allowed.', 405);
}

// ---- The offers -----------------------------------------------------------
$offers = json_decode((string) @file_get_contents(__DIR__ . '/coupon-offers.json'), true);
if (!is_array($offers) || !isset($offers['coupons']) || !is_array($offers['coupons'])) {
    finish(false, 'Coupons are unavailable right now.', 500);
}
$byCode = [];
foreach ($offers['coupons'] as $offer) {
    $byCode[strtoupper((string) $offer['code'])] = $offer;
}

// Chosen coupons, in page order, unknown codes dropped.
$posted = $_POST['coupons'] ?? [];
if (!is_array($posted)) {
    $posted = explode(',', (string) $posted);
}
$posted = array_map(fn ($c) => strtoupper(trim((string) $c)), $posted);
$chosen = [];
foreach ($byCode as $code => $offer) {
    if (in_array($code, $posted, true)) {
        $chosen[$code] = $offer;
    }
}
$codes = array_keys($chosen);

$name      = field('name', 120);
$firstName = mb_substr(preg_split('/\s+/u', $name)[0] ?? '', 0, 40);

// Hidden "company" field: people never see it, bots fill it in. Pretend success.
if (trim((string) ($_POST['company'] ?? '')) !== '') {
    finish(true, '', 200, $codes, $firstName);
}
// The form records when it was opened (ms since epoch).
$shownAt = (int) ($_POST['started'] ?? 0);
if ($shownAt > 0 && (microtime(true) * 1000 - $shownAt) < MIN_FILL_SECONDS * 1000) {
    finish(true, '', 200, $codes, $firstName);
}

// ---- Validate -------------------------------------------------------------
$email   = field('email', 254);
$phone   = field('phone', 30);
$vehicle = field('vehicle', 80);
$utm = [];
foreach (['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as $key) {
    $value = field($key, 120);
    if ($value !== '') {
        $utm[$key] = $value;
    }
}

if (!$codes) {
    finish(false, 'Please choose at least one coupon.', 422);
}
if ($name === '' || $email === '') {
    finish(false, 'Please enter your name and email.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    finish(false, 'Please enter a valid email address.', 422);
}
if ($phone !== '' && !preg_match('/\d{7,}/', preg_replace('/\D+/', '', $phone))) {
    finish(false, 'Please enter a valid phone number, or leave it blank.', 422);
}

$ipKey    = 'ip-' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$emailKey = 'to-' . strtolower($email);
if (!within_limit($ipKey, MAX_PER_HOUR) || !within_limit($emailKey, MAX_PER_EMAIL)) {
    finish(false, 'Too many requests. Please try again later.', 429);
}

// ---- Build the email ------------------------------------------------------
$bookingUrl   = count($chosen) === 1 ? (string) reset($chosen)['bookingUrl'] : BOOKING_URL;
$voucherUrl   = SITE_URL . thank_you_url($codes, $firstName);
$labels       = implode(', ', array_map(fn ($o) => (string) $o['label'], $chosen));
$codeList     = implode(', ', $codes);
$greetingName = $firstName !== '' ? $firstName : 'there';
$subject      = 'Your Duke Auto Repair Coupons Inside!';

// Plain-text version.
$text = [
    "Dear {$greetingName},",
    '',
    'Thank you for claiming your Duke Auto Repair & Service special offer(s)! Your selected coupon voucher(s) are listed below—simply show this email, a screenshot, or a printed copy at check-in to redeem your savings.',
    '',
    'YOUR CLAIMED COUPON(S):',
    "• Selected Offer(s): {$labels}",
    "• Promo Code(s): {$codeList}",
    '• Shop Location: ' . SHOP_ADDRESS . ' | ' . SHOP_PHONE,
    '',
];
foreach ($chosen as $code => $offer) {
    $text[] = "{$offer['value']} — {$offer['title']} (Code: {$code})";
    $text[] = $offer['expires'] ? "Expires {$offer['expires']}" : 'No expiration';
    $text[] = 'How to book: ' . $offer['booking'];
    $text[] = $offer['terms'] . ' One coupon per visit.';
    $text[] = '';
}
if ($vehicle !== '' || $phone !== '') {
    $text[] = 'Your details: ' . implode(' · ', array_filter([$vehicle, $phone]));
    $text[] = '';
}
array_push(
    $text,
    'Click the link below to open our online scheduler:',
    "Click Here to Schedule Your Appointment: {$bookingUrl}",
    '',
    "View or print your coupon(s): {$voucherUrl}",
    '',
    'Thank you for choosing Duke Auto Repair & Service. We look forward to taking care of your vehicle!',
    '',
    'Best regards,',
    'The Duke Auto Repair & Service Team',
    SHOP_ADDRESS . ' | ' . SHOP_PHONE
);
$textBody = implode("\r\n", $text);

// HTML version: tables and inline styles for email clients.
$navy = '#14204a';
$yellow = '#e2c143';
$red = '#b3121a';
$cards = '';
foreach ($chosen as $code => $offer) {
    $holiday = ($offer['group'] ?? '') === 'winter';
    $head    = $holiday ? $red : $yellow;
    $headInk = $holiday ? '#ffffff' : $navy;
    $expires = $offer['expires'] ? 'Expires ' . h((string) $offer['expires']) : 'No expiration';
    $cards .= '
<tr><td style="padding:0 0 18px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:3px dashed ' . ($holiday ? '#7d0a0f' : $navy) . ';border-radius:14px;border-collapse:separate;overflow:hidden">
    <tr><td align="center" style="background:' . $head . ';color:' . $headInk . ';padding:18px 12px;font:800 40px/1 Arial,Helvetica,sans-serif;text-transform:uppercase;border-radius:11px 11px 0 0">' . h((string) $offer['value']) . '</td></tr>
    <tr><td style="padding:18px 20px;font:16px/1.5 Arial,Helvetica,sans-serif;color:#3a4360">
      <div style="font:800 22px/1.2 Arial,Helvetica,sans-serif;color:' . ($holiday ? $red : $navy) . '">' . h((string) $offer['title']) . '</div>
      <p style="margin:8px 0">' . h((string) $offer['detail']) . '</p>
      <p style="margin:8px 0;font-weight:bold;color:#151b2e">' . $expires . '</p>
      <p style="margin:12px 0;display:inline-block;padding:8px 14px;border:2px dashed ' . $navy . ';border-radius:8px;background:#fff8dc;color:#151b2e">Promo code: <b style="font-size:20px;letter-spacing:1px">' . h($code) . '</b></p>
      <p style="margin:8px 0;color:#151b2e"><b>How to book:</b> ' . h((string) $offer['booking']) . '</p>
      <p style="margin:12px 0 0;padding-top:10px;border-top:1px solid #e3e6ee;font-size:12px;color:#5f6983">' . h(COUPON_FROM_NAME . ' · ' . SHOP_ADDRESS . ' · ' . SHOP_PHONE . '. ' . $offer['terms']) . ' Show a screenshot or printed copy of this coupon at checkout. One coupon per visit.</p>
    </td></tr>
  </table>
</td></tr>';
}
$details = '';
if ($vehicle !== '' || $phone !== '') {
    $details = '<p style="margin:0 0 18px"><b>Your details:</b> ' . h(implode(' · ', array_filter([$vehicle, $phone]))) . '</p>';
}

$htmlBody = '<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>' . h($subject) . '</title></head>
<body style="margin:0;padding:0;background:#eef0f4">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef0f4"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden">
  <tr><td align="center" style="background:' . $navy . ';padding:22px 20px;font:800 22px/1.2 Arial,Helvetica,sans-serif;color:#ffffff;letter-spacing:1px">DUKE AUTO REPAIR &amp; SERVICE<div style="margin-top:6px;font:14px/1.4 Arial,Helvetica,sans-serif;color:' . $yellow . ';letter-spacing:0">' . h(SHOP_ADDRESS) . ' | ' . h(SHOP_PHONE) . '</div></td></tr>
  <tr><td style="padding:28px 26px 8px;font:16px/1.6 Arial,Helvetica,sans-serif;color:#151b2e">
    <p style="margin:0 0 16px">Dear ' . h($greetingName) . ',</p>
    <p style="margin:0 0 18px">Thank you for claiming your Duke Auto Repair &amp; Service special offer(s)! Your selected coupon voucher(s) are listed below—simply show this email, a screenshot, or a printed copy at check-in to redeem your savings.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;background:#fff8dc;border-left:6px solid ' . $yellow . ';border-radius:8px"><tr><td style="padding:14px 18px;font:15px/1.6 Arial,Helvetica,sans-serif;color:#151b2e">
      <b>YOUR CLAIMED COUPON(S):</b><br>
      &bull; Selected Offer(s): ' . h($labels) . '<br>
      &bull; Promo Code(s): <b>' . h($codeList) . '</b><br>
      &bull; Shop Location: ' . h(SHOP_ADDRESS) . ' | ' . h(SHOP_PHONE) . '
    </td></tr></table>
    ' . $details . '
    <p style="margin:0 0 14px">Click the button below to open our online scheduler:</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 12px"><tr><td style="border-radius:6px;background:' . $yellow . '"><a href="' . h($bookingUrl) . '" style="display:inline-block;padding:15px 26px;font:bold 17px Arial,Helvetica,sans-serif;color:' . $navy . ';text-decoration:none;border-radius:6px">Click Here to Schedule Your Appointment</a></td></tr></table>
    <p style="margin:0 0 24px;font-size:14px"><a href="' . h($voucherUrl) . '" style="color:#2a52be">View or print your coupon(s) online</a></p>
  </td></tr>
  <tr><td style="padding:0 26px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">' . $cards . '</table>
  </td></tr>
  <tr><td style="padding:8px 26px 28px;font:16px/1.6 Arial,Helvetica,sans-serif;color:#151b2e">
    <p style="margin:0 0 16px">Thank you for choosing Duke Auto Repair &amp; Service. We look forward to taking care of your vehicle!</p>
    <p style="margin:0">Best regards,<br>The Duke Auto Repair &amp; Service Team<br>' . h(SHOP_ADDRESS) . ' | ' . h(SHOP_PHONE) . '</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>';

// ---- Send -----------------------------------------------------------------
$boundary = 'duke-' . bin2hex(random_bytes(12));
$headers = [
    'From: =?UTF-8?B?' . base64_encode(COUPON_FROM_NAME) . '?= <' . COUPON_FROM . '>',
    'Reply-To: ' . COUPON_FROM,
    'Bcc: ' . LEAD_BCC,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
    // Lead source for the shop's inbox rules (from the hidden ad tags).
    'X-Duke-Coupons: ' . $codeList,
];
if ($utm) {
    $headers[] = 'X-Duke-Lead-Source: ' . http_build_query($utm, '', '; ');
}

$message = "This is a multi-part message in MIME format.\r\n"
    . "--{$boundary}\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: quoted-printable\r\n\r\n"
    . quoted_printable_encode($textBody) . "\r\n"
    . "--{$boundary}\r\n"
    . "Content-Type: text/html; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: quoted-printable\r\n\r\n"
    . quoted_printable_encode($htmlBody) . "\r\n"
    . "--{$boundary}--\r\n";

$sent = mail(
    $email,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $message,
    implode("\r\n", $headers),
    '-f' . COUPON_FROM
);

record_use($ipKey);
if (!$sent) {
    // The visitor still gets their coupons on the thank-you page.
    finish(false, 'We could not email your coupon.', 500, $codes, $firstName, true);
}
record_use($emailKey);
finish(true, '', 200, $codes, $firstName);
