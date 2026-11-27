"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { business, withBookingPopup } from "@/lib/business";
import { couponsForCodes } from "@/lib/coupons";
import CouponCard from "./coupon-card";
import Icon from "./icon";

const PRINTING = "printing-coupon";
const TARGET = "is-print-target";

/** The thank-you URL: ?c=WINTER49,ALIGN50&n=Sam (&mail=0 if the email failed). */
const readQuery = () => window.location.search;
const subscribe = () => () => {};

/** Print one coupon card: everything else is hidden while the print dialog is up. */
function printCoupon(item: HTMLElement | null) {
  if (!item) return;
  const root = document.documentElement;
  const done = () => {
    root.classList.remove(PRINTING);
    item.classList.remove(TARGET);
    window.removeEventListener("afterprint", done);
  };
  root.classList.add(PRINTING);
  item.classList.add(TARGET);
  const hasAfterPrint = "onafterprint" in window;
  window.addEventListener("afterprint", done);
  window.print();
  // Browsers without afterprint (older iOS) return from print() when it's done.
  if (!hasAfterPrint) window.setTimeout(done, 1000);
}

/**
 * Step 2 of the coupon funnel: shows only the coupons the visitor claimed,
 * with their promo codes, the ShopGenie booking instructions and a print
 * button under each card.
 */
export default function ThankYouCoupons() {
  const search = useSyncExternalStore(subscribe, readQuery, () => null);
  const params = new URLSearchParams(search ?? "");
  const claimed = couponsForCodes((params.get("c") || "").split(","));
  const firstName = (params.get("n") || "").slice(0, 40);
  const mailFailed = params.get("mail") === "0";
  // One coupon: its own tracking link. Several: the main booking link.
  const bookingUrl =
    claimed.length === 1 ? claimed[0].bookingUrl : business.bookingUrl;

  useEffect(() => {
    if (search === null || !claimed.length) return;
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "coupon_thank_you",
      coupon_codes: claimed.map((coupon) => coupon.code).join(","),
    });
    // Once per visit of this page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (search === null) {
    // Server render / first paint: the coupons come from the URL.
    return <div className="ty-loading" aria-hidden="true" />;
  }

  if (!claimed.length) {
    return (
      <div className="ty-empty">
        <p>
          We couldn&apos;t find a coupon in this link. Pick one on our coupons
          page and we&apos;ll send it straight over.
        </p>
        <Link href="/promotions" className="btn btn-y">
          See all coupons
          <Icon name="arrow" />
        </Link>
      </div>
    );
  }

  return (
    <>
      <p className="ty-greeting">
        {firstName ? `Thanks, ${firstName}! ` : ""}
        {mailFailed ? (
          <>
            Your {claimed.length > 1 ? "coupons are" : "coupon is"} below. We
            couldn&apos;t email {claimed.length > 1 ? "them" : "it"} just now,
            so please print or screenshot {claimed.length > 1 ? "them" : "it"}.
          </>
        ) : (
          <>
            We&apos;ve also emailed your{" "}
            {claimed.length > 1 ? "coupons" : "coupon"} from{" "}
            <b>{business.email}</b>. Check your spam folder if you don&apos;t
            see it.
          </>
        )}
      </p>

      <aside className="ty-callout" aria-labelledby="ty-callout-title">
        <h2 id="ty-callout-title">
          How to book &amp; redeem your coupon online (please read):
        </h2>
        <ol>
          <li>Screenshot or print your coupon voucher(s) below.</li>
          <li>
            Click &lsquo;Schedule Your Appointment Now&rsquo; to open our
            ShopGenie online booking calendar.
          </li>
          <li>
            <b>For Winter Packages ($49.95 &amp; $99.99):</b> Select
            &lsquo;Winter Safety Check ($49.95)&rsquo; or &lsquo;Complete
            Winter Package ($99.99)&rsquo; directly in the booking menu.
          </li>
          <li>
            <b>
              For $50 Off Alignment, $5 Off VA Inspection &amp; General
              Coupons:
            </b>{" "}
            Simply choose the standard service name in our booking tool (for
            example, choose standard &lsquo;Alignments&rsquo;, &lsquo;Safety
            Inspection&rsquo;, or your needed repair/maintenance service).
            Showing your coupon screenshot or email at check-in automatically
            applies your discount.
          </li>
        </ol>
      </aside>

      <div className="ty-cta">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={withBookingPopup("btn btn-y")}
        >
          Schedule Your Appointment Now
          <Icon name="calendar" />
        </a>
      </div>

      <h2 className="ty-list-title">
        Your {claimed.length > 1 ? "coupons" : "coupon"}
      </h2>
      <ul className="ty-list">
        {claimed.map((coupon) => (
          <li className="ty-item" key={coupon.code}>
            <CouponCard coupon={coupon} showCode />
            <button
              type="button"
              className="btn btn-n ty-print"
              onClick={(event) =>
                printCoupon(event.currentTarget.closest<HTMLElement>(".ty-item"))
              }
              aria-label={`Print your coupon: ${coupon.label}`}
            >
              Print Your Coupon
            </button>
            <p className="ty-helper">
              Or take a screenshot and show it at check-in
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
