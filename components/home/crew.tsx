import Stagger from "@/components/stagger";
import Link from "next/link";
import GoogleRating from "../google-rating";

export default function HomeCrew() {
  return (
    <section className="crew">
      <Stagger className="wrap grid" pattern="alternate" interval={0.12}>
        <figure>
          <div
            className="ph"
            role="img"
            aria-label="The Duke Auto team standing outside the service bays"
          ></div>
          <figcaption>The Duke Auto team, outside the service bays.</figcaption>
        </figure>
        <div>
          <h2>Meet the people who'll look after your car.</h2>
          <p className="lead">
            Our front desk checks you in, and one of our certified technicians
            takes it from there. Every visit includes a free digital inspection,
            so you see what we see before you decide on anything.
          </p>
          <dl>
            <div>
              <dt>Certified technicians</dt>
              <dd>Major and minor repairs</dd>
            </div>
            <div>
              <dt>Same-day service</dt>
              <dd>On most repairs and maintenance</dd>
            </div>
            <div>
              <dt>Free inspection</dt>
              <dd>A digital report with every visit</dd>
            </div>
            <GoogleRating variant="crew" />
          </dl>
          <Link href="/about" className="btn btn-y">
            About our shop
            <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Stagger>
    </section>
  );
}
