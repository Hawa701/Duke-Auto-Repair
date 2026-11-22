<?php
/**
 * Request a Quote handler (static site on SiteGround, which runs PHP).
 * Emails each request from /quote/ to the shop. Posted to by
 * components/quote-form.tsx; also works without JavaScript (redirects back).
 *
 * Keep QUOTE_TO in step with business.email in lib/business.ts.
 */

const QUOTE_TO = 'service@dukeautorepair.com';
// Sender must be an address on this domain so the host's mail server accepts it.
const QUOTE_FROM = 'website@dukeautorepair.com';
const MAX_PER_HOUR = 5;      // per visitor IP
const MIN_FILL_SECONDS = 3;  // faster than this is a bot

date_default_timezone_set('America/New_York');

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function finish(bool $ok, string $error = '', int $status = 200): void
{
    global $wantsJson;
    if ($wantsJson) {
        http_response_code($ok ? 200 : $status);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    } else {
        header('Location: /quote/?' . ($ok ? 'sent=1' : 'error=1'), true, 303);
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

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    finish(false, 'Method not allowed.', 405);
}

// Hidden "company" field: people never see it, bots fill it in. Pretend success.
if (trim((string) ($_POST['company'] ?? '')) !== '') {
    finish(true);
}

// The form records when it was shown (ms since epoch).
$shownAt = (int) ($_POST['started'] ?? 0);
if ($shownAt > 0 && (microtime(true) * 1000 - $shownAt) < MIN_FILL_SECONDS * 1000) {
    finish(true);
}

$year     = field('year', 10);
$make     = field('make', 40);
$model    = field('model', 80);
$name     = field('name', 120);
$phone    = field('phone', 30);
$email    = field('email', 254);
$symptoms = mb_substr(trim(str_replace("\r", '', (string) ($_POST['symptoms'] ?? ''))), 0, 4000);
$symptoms = preg_replace('/[\x00-\x08\x0B-\x1F\x7F]+/u', ' ', $symptoms) ?? '';

if ($year === '' || $make === '' || $model === '' || $symptoms === '' || $name === '' || $phone === '') {
    finish(false, 'Please fill in all required fields.', 422);
}
if (!preg_match('/\d{7,}/', preg_replace('/\D+/', '', $phone))) {
    finish(false, 'Please enter a valid phone number.', 422);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    finish(false, 'Please enter a valid email address.', 422);
}

// Simple per-IP limit, kept in the server's temp folder.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$log = rtrim(sys_get_temp_dir(), '/\\') . '/duke-quote-' . md5($ip);
$recent = [];
if (is_readable($log)) {
    $recent = array_filter(
        array_map('intval', explode("\n", (string) file_get_contents($log))),
        fn ($t) => $t > time() - 3600
    );
}
if (count($recent) >= MAX_PER_HOUR) {
    finish(false, 'Too many requests from this device.', 429);
}

$subject = "Quote request: {$year} {$make} {$model} ({$name})";
$body = implode("\n", [
    'New quote request from dukeautorepair.com',
    '',
    "Vehicle: {$year} {$make} {$model}",
    '',
    "What's going on:",
    $symptoms,
    '',
    "Name:  {$name}",
    "Phone: {$phone}",
    'Email: ' . ($email !== '' ? $email : '(not given)'),
    '',
    'Sent ' . date('D, M j, Y g:i A T'),
]);

$headers = [
    'From: Duke Auto Repair Website <' . QUOTE_FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$sent = mail(
    QUOTE_TO,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers),
    '-f' . QUOTE_FROM
);

if (!$sent) {
    finish(false, 'We could not send your request.', 500);
}

$recent[] = time();
@file_put_contents($log, implode("\n", $recent), LOCK_EX);
finish(true);
