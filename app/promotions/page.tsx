import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Icon from "@/components/icon";
import CouponCard from "@/components/coupon-card";
import CouponClaim, { ClaimCouponButton } from "@/components/coupon-claim";
import { business, withBookingPopup } from "@/lib/business";
import { couponGroups, coupons } from "@/lib/coupons";
import "./coupons.css";

// Title, description, H1 and header alt text: Master SEO Blueprint, section 1.
export const metadata: Metadata = {
  title: {
    absolute: "Auto Repair Deals & Offers in Alexandria, VA | Duke Auto",
  },
  description:
    "Save on your next visit with auto repair deals in Alexandria, VA. Get $25 to $50 off first-time service or $5 off VA state safety inspections.",
};

// Offers: Coupon Cards, Thank-You Page & Email Copy Guide. The copy lives in
// public/coupon-offers.json (shared with the email script). The winter deals
// can be claimed until December 30, 2026 and are valid through February 27,
// 2027; after that, remove them there.
export default function CouponsPage() {
  return (
    <div className="coupons-page">
      <PageHeader
        title="Alexandria Auto Repair Deals & Offers"
        breadcrumb="Promotions"
        description="Claim a coupon to get it by email, then show it on your phone or print it at checkout."
        image="/images/about/shop-floor.jpg"
        imageAlt="Duke Auto Repair service bay in Alexandria VA"
        compact
      />
      <section className="coupons" aria-labelledby="coupons-title">
        <div className="wrap">
          <h2 id="coupons-title" className="coupons-title">
            <Icon name="scissors" />
            Digital coupons &amp; local offers
          </h2>
          {couponGroups.map((group) => {
            const items = coupons.filter((coupon) => coupon.group === group.id);
            if (!items.length) return null;
            return (
              <section
                key={group.id}
                className={`coupon-group${group.holiday ? " coupon-group--holiday" : ""}`}
                aria-labelledby={`coupon-group-${group.id}`}
              >
                <h3 id={`coupon-group-${group.id}`} className="coupon-group__title">
                  {group.title}
                </h3>
                <ul
                  className={`coupon-list${items.length === 3 ? " coupon-list--3" : ""}`}
                >
                  {items.map((coupon) => (
                    <li key={coupon.id}>
                      <CouponCard coupon={coupon} id={`coupon-${coupon.id}`}>
                        <ClaimCouponButton
                          code={coupon.code}
                          label={`${coupon.value} ${coupon.title}`}
                        />
                      </CouponCard>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
          <div className="coupon-help">
            <p>
              <b>How it works:</b> claim a coupon and we&apos;ll email it to
              you with your promo code. Then book online and show the email,
              a screenshot or a printout at check-in.
            </p>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={withBookingPopup("btn btn-n")}
            >
              Book an Appointment
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>
      <CouponClaim />
    </div>
  );
}
