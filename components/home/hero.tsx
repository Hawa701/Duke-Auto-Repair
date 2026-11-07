import Image from "next/image";
import { business, withBookingPopup } from "@/lib/business";
import GoogleRating from "../google-rating";
import Entrance from "../entrance";
import Icon from "../icon";
import TrustBadges from "../trust-badges";
import Fascia from "./fascia";

export default function Hero() {
  return (
    <>
      <section className="xhero" aria-labelledby="home-hero-title">
        <Image
          className="xhero-img"
          src="/images/home/storefront.jpg"
          alt="Duke Auto Repair 10-bay auto repair shop in Alexandria VA"
          fill
          priority
          sizes="100vw"
        />
        <div className="wrap">
          <Entrance className="hero-content" pattern="fade" waitForFonts>
            <p className="kick">
              Built From One Bay. Driven by Trust for Over 20 Years.
            </p>
            {/* H1: Content & UX Guide (Google Doc), hero section, per the
                client's final comments (replaces the SEO Blueprint H1). */}
            <h1 id="home-hero-title">Trusted Auto Repair in Alexandria, VA</h1>
            {/* Sub-headline: Content & UX Guide (revised), section 1. */}
            <p className="lede">
              Dealership expertise without the dealership markup. Honest
              mechanics, transparent estimates, and a robust 2‑Year/24,000‑Mile
              warranty.
            </p>
            <div className="acts">
              <a
                className={withBookingPopup("xbtn lg")}
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="calendar" />
                Book an Appointment
                <Icon name="arrow" />
              </a>
              <a
                className="xbtn ghost lg"
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="pin" />
                Get Directions
              </a>
            </div>
            <TrustBadges />
          </Entrance>
          <div className="trust">
            <GoogleRating variant="home-hero" />
          </div>
        </div>
      </section>
      <Fascia />
    </>
  );
}
