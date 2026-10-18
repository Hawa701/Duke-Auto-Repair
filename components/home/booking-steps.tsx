import { business } from "@/lib/business";

export default function BookingSteps() {
  return (
    <section className="steps">
      <div className="wrap">
        <div className="sec-head">
          <h2>Getting your car fixed couldn&apos;t be easier.</h2>
          <p>
            Arrange your visit with our team. Most cars are ready the same day.
          </p>
        </div>
        <div className="step-row">
          <div className="step">
            <div className="n">1</div>
            <h3>Book a time</h3>
            <p>
              Book online or call our front desk to arrange a time that suits
              you.
            </p>
          </div>
          <div className="step">
            <div className="n">2</div>
            <h3>Drop off or wait</h3>
            <p>
              Bring your car in at your time. Leave it with us, or wait while we
              work on it.
            </p>
          </div>
          <div className="step">
            <div className="n">3</div>
            <h3>Pick it up</h3>
            <p>
              We walk you through what we did, you pay, and you&apos;re back on
              the road.
            </p>
          </div>
        </div>
        <div className="ctabar">
          <svg
            aria-hidden="true"
            className="i"
            viewBox="0 0 24 24"
            style={{ width: "28px", height: "28px", color: "var(--navy)" }}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <p>
            Questions before you book?{" "}
            <span style={{ color: "var(--steel)", fontWeight: "500" }}>
              Call {business.phoneDisplay} and talk to our front desk.
            </span>
          </p>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-y"
          >
            Book an appointment
          </a>
        </div>
      </div>
    </section>
  );
}
