import Link from "next/link";
import { business } from "@/lib/business";

export default function BookingCta({
  servicesHref = "/services",
}: {
  servicesHref?: string;
}) {
  return (
    <section className="cta cta--final">
      <div className="wrap">
        <div>
          <h2>Ready to book your car service?</h2>
          <p>
            Book online to arrange your visit, or call and talk to our
            front desk.
          </p>
        </div>
        <div className="act">
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-y"
          >
            Book an appointment
          </a>
          <Link href={servicesHref} className="btn btn-o">
            Explore services
          </Link>
          <a href={business.phoneHref} className="phone">
            <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <small>Prefer to call?</small>
              <b>{business.phoneDisplay}</b>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
