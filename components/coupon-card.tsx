import type { ReactNode } from "react";
import { business } from "@/lib/business";
import { isHolidayCoupon, type Coupon } from "@/lib/coupons";
import "./coupon-card.css";

/**
 * One coupon "cut-out" that screenshots and prints cleanly. Used on the
 * coupons page (with a Claim button) and the thank-you page (with the promo
 * code shown).
 */
export default function CouponCard({
  coupon,
  showCode = false,
  children,
  id,
}: {
  coupon: Coupon;
  showCode?: boolean;
  /** Extra content at the foot of the card (e.g. the Claim button). */
  children?: ReactNode;
  id?: string;
}) {
  return (
    <article
      className={`coupon${isHolidayCoupon(coupon) ? " coupon--holiday" : ""}`}
      id={id}
      aria-label={`${coupon.value} ${coupon.title}`}
    >
      <div className="coupon-value">
        <span>{coupon.value}</span>
      </div>
      <div className="coupon-body">
        <h3>{coupon.title}</h3>
        <p>{coupon.detail}</p>
        {coupon.expires && (
          <p className="coupon-expires">Expires {coupon.expires}</p>
        )}
        {showCode && (
          <p className="coupon-code">
            Promo code: <b>{coupon.code}</b>
          </p>
        )}
        <small>
          {business.name} · {business.shortAddress} · {business.phoneLocal}.{" "}
          {coupon.terms} Show a screenshot or printed copy of this coupon at
          checkout. One coupon per visit.
        </small>
        {children}
      </div>
    </article>
  );
}
