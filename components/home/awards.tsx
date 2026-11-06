import { business, withBookingPopup } from "@/lib/business";
import Stagger from "@/components/stagger";
import Image from "next/image";
import Link from "next/link";
import GoogleRating from "../google-rating";
import "./awards.css";

// Award artwork supplied by the shop (public/images/awards).
const carfax = [
  { year: 2025, featured: true },
  { year: 2024, featured: false },
  { year: 2023, featured: false },
];

export default function HomeAwards() {
  return (
    <section id="awards" className="awards" aria-labelledby="awards-title">
      <div className="wrap grid">
        <div className="copy">
          {/* Content & UX Guide (revised), section 1: Awards Banner Update. */}
          <h2 id="awards-title">Top rated four years running.</h2>
          <p>
            Duke Auto Repair &amp; Service is a CARFAX Top-Rated Service Center
            for 2022, 2023, 2024, and 2025, and was named BusinessRate Best of
            2025 for car repair and maintenance in {business.city}, based on
            Google reviews. Thank you to the drivers who keep coming back, and
            to the friends they send our way.
          </p>
          <div className="rating">
            <GoogleRating variant="utility" />
          </div>
          <div className="acts">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={withBookingPopup("btn btn-y")}
            >
              Book an appointment
            </a>
            <Link href="/reviews" className="more">
              Read our reviews
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
        <Stagger className="plaques" pattern="zoom">
          <div className="plaque">
            <span>Top rated</span>
            <b>2023</b>
            <small>Auto repair</small>
          </div>
          <div className="plaque">
            <span>Top rated</span>
            <b>2024</b>
            <small>Auto repair</small>
          </div>
          <div className="plaque">
            <span>Top rated</span>
            <b>2025</b>
            <small>Auto repair</small>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
