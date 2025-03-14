import { business } from "@/lib/business";
import GoogleRating from "../google-rating";
import Entrance from "../entrance";
import Fascia from "./fascia";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <div className="shot">
        <div className="wrap">
          <Entrance className="card" pattern="fade" waitForFonts>
            <div className="where">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Locally owned on Duke Street, {business.city}
            </div>
            <h1 id="home-hero-title">Expert auto care you can count on.</h1>
            <p className="lede">
              Fast, reliable, and always affordable. From oil changes to major
              repairs, our certified technicians get you back on the road.
            </p>
            <div className="acts">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-y"
              >
                Book an appointment
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href={business.phoneHref} className="btn btn-on">
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {business.phoneDisplay}
              </a>
            </div>
            <div className="proof">
              <GoogleRating variant="hero" />
              <span>
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Free digital inspection
              </span>
            </div>
          </Entrance>
        </div>
      </div>
      <Fascia />
    </section>
  );
}
