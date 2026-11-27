import data from "@/public/coupon-offers.json";

/**
 * The coupon funnel (Coupon Cards, Thank-You Page & Email Copy Guide):
 * 1. /promotions/ shows every coupon; "Claim Coupon" opens one pop-up form
 *    with that coupon pre-checked (components/coupon-claim.tsx).
 * 2. The form posts to public/send-coupons.php, which emails the voucher from
 *    service@dukeautorepair.com (BCC to the shop).
 * 3. The visitor lands on /thank-you-coupons/?c=CODE,CODE to print or
 *    screenshot the coupons they chose, then books in ShopGenie.
 *
 * The offers live in public/coupon-offers.json so the PHP mailer reads the
 * same copy. Edit offers there.
 */
export type CouponGroup = "winter" | "winter-driving" | "evergreen";

export type Coupon = {
  id: string;
  /** Promo code, shown on the thank-you page and in the email. */
  code: string;
  group: CouponGroup;
  /** Price header, e.g. "$49.95" or "$50 Off". */
  value: string;
  title: string;
  /** Short name used in the pop-up checklist and the email. */
  label: string;
  detail: string;
  /** e.g. "February 27, 2027"; null for coupons with no expiration. */
  expires: string | null;
  /** Fine print for this offer, printed before the standard lines. */
  terms: string;
  /** How to book this offer in ShopGenie (email voucher). */
  booking: string;
  /** ShopGenie tracking link for this offer. */
  bookingUrl: string;
};

export const coupons = data.coupons as Coupon[];

export const couponGroups: {
  id: CouponGroup;
  title: string;
  /** Red seasonal styling (the winter campaign artwork). */
  holiday?: boolean;
}[] = [
  { id: "winter", title: "Winter Campaign Specials", holiday: true },
  { id: "winter-driving", title: "Winter Driving & Inspection Specials" },
  { id: "evergreen", title: "First-Visit & Everyday Coupons" },
];

export const isHolidayCoupon = (coupon: Coupon) =>
  couponGroups.some((group) => group.id === coupon.group && group.holiday);

/** Coupons for a list of codes (any case), in page order, unknown codes dropped. */
export function couponsForCodes(codes: string[]): Coupon[] {
  const wanted = new Set(codes.map((code) => code.trim().toUpperCase()));
  return coupons.filter((coupon) => wanted.has(coupon.code));
}

/** Where the claim form posts; the script emails the voucher. Empty: no email, straight to the thank-you page. */
export const couponFormAction = "/send-coupons.php";

/** Thank-you page for a set of coupons. */
export const thankYouHref = (codes: string[], firstName?: string) => {
  const params = new URLSearchParams({ c: codes.join(",") });
  if (firstName) params.set("n", firstName);
  return `/thank-you-coupons/?${params.toString().replace(/%2C/g, ",")}`;
};
