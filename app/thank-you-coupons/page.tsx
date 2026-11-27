import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ThankYouCoupons from "@/components/thank-you-coupons";
import "./thank-you.css";

// Step 2 of the coupon funnel (Coupon Cards, Thank-You Page & Email Copy
// Guide, section 2). Personal to each visitor, so kept out of search results.
export const metadata: Metadata = {
  title: "Your Coupons",
  description:
    "Print or screenshot your Duke Auto Repair & Service coupons, then book your appointment online.",
  robots: { index: false, follow: false },
};

/**
 * Hero banner. The client's banner artwork (sent separately) goes here:
 * copy it into public/images/promotions/ and set `banner` to its path and
 * size. While it's null, the shop photo header is used.
 */
const banner: { src: string; width: number; height: number; alt: string } | null =
  null;

export default function ThankYouCouponsPage() {
  return (
    <div className="thank-you-page">
      {banner ? (
        <header className="ty-banner" aria-labelledby="page-title">
          {/* Plain <img>: the export serves files as-is (images.unoptimized). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={banner.src}
            width={banner.width}
            height={banner.height}
            alt={banner.alt}
          />
          <div className="wrap ty-banner__text">
            <h1 id="page-title">Thank You for Claiming Your Coupons!</h1>
            <p>Print or screenshot your coupon(s) below</p>
          </div>
        </header>
      ) : (
        <PageHeader
          title="Thank You for Claiming Your Coupons!"
          breadcrumb="Your Coupons"
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/promotions", label: "Promotions" },
          ]}
          description="Print or screenshot your coupon(s) below"
          image="/images/about/shop-floor.jpg"
          compact
        />
      )}
      <section className="ty-section">
        <div className="wrap">
          <ThankYouCoupons />
        </div>
      </section>
    </div>
  );
}
