import { business } from "@/lib/business";
import Entrance from "@/components/entrance";
import Link from "next/link";

export default function HomeBenefits({ id }: { id?: string }) {
  return (
    <section className="diff" id={id}>
      <div className="wrap">
        <div className="sec-head">
          <h2>We just do auto care differently.</h2>
          <p>
            Two things most shops don&apos;t offer, and neither one costs you
            anything.
          </p>
        </div>

        <Entrance className="perk" pattern="left" inView>
          <div
            className="media"
            style={{ backgroundImage: "url(/images/home/keys.jpg)" }}
          ></div>
          <div className="body">
            <span className="free">Complimentary</span>
            <h3>Concierge vehicle pick-up and drop-off</h3>
            <p>
              Let us come to you. We&apos;ll pick up your vehicle, service it,
              and return it to your door.
            </p>
            <ul className="ticks">
              <li>
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Picked up from your door
              </li>
              <li>
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Returned as soon as it&apos;s done
              </li>
            </ul>
            <Link href="/contact" className="btn btn-n">
              Schedule a pick-up
            </Link>
          </div>
        </Entrance>

        <Entrance className="perk flip" pattern="right" inView>
          <div
            className="media"
            style={{
              backgroundImage: "url(/images/home/tablet.jpg)",
              backgroundPosition: "60% 55%",
            }}
          ></div>
          <div className="body">
            <span className="free">Free with every visit</span>
            <h3>Digital vehicle health inspections</h3>
            <p>
              A complete, easy-to-understand report on your vehicle&apos;s
              health. From tire wear to brake life, we show you what&apos;s
              good, what needs attention, and what can wait, at no cost.
            </p>
            <ul className="ticks">
              <li>
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Tire wear, brake life, fluids, and more
              </li>
              <li>
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Always free, never any obligation
              </li>
            </ul>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-n"
            >
              Book an appointment
            </a>
          </div>
        </Entrance>
      </div>
    </section>
  );
}
