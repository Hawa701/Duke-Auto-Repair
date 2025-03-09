import { business } from "@/lib/business";
import Stagger from "@/components/stagger";
import Link from "next/link";
import GoogleRating from "../google-rating";

export default function HomeAwards() {
  return (
    <section className="awards">
      <div className="wrap grid">
        <div className="copy">
          <h2>Top rated three years running.</h2>
          <p>
            Duke Auto was named a top-rated auto repair shop in 2023, 2024 and
            2025. Thank you to the drivers who keep coming back, and to the
            friends they send our way.
          </p>
          <div className="rating">
            <GoogleRating variant="utility" />
          </div>
          <div className="acts">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-y"
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
