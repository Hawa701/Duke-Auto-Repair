import Link from "next/link";
import Entrance from "../entrance";
import { business } from "@/lib/business";

export default function HomeServices() {
  return (
    <section className="svc" id="services">
      <div className="wrap">
        <Entrance className="sec-head" inView>
          <h2>Whatever your car needs, we've got it covered.</h2>
          <p>
            From a quick oil change to brakes, diagnostics and state
            inspections, it's all done here in one garage. No running from shop
            to shop.
          </p>
        </Entrance>
        <div className="board">
          <div className="s hot" id="brake-repair">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.2" />
                <path d="M12 3a9 9 0 0 1 8.5 6" />
                <path d="M16.5 4.2 19 7.5" />
              </svg>
            </div>
            <h3>Brake repair</h3>
            <p>Free brake inspection and premium brake service.</p>
            <Link href="/services/brakes">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="oil-change">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
              </svg>
            </div>
            <h3>Oil change</h3>
            <p>
              Fast, affordable oil changes to keep your engine running strong.
            </p>
            <Link href="/services/oil-change">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="battery-services">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M7 7V4.5h3V7M14 7V4.5h3V7" />
                <path d="M7 13.5h4M9 11.5v4M14 13.5h3" />
              </svg>
            </div>
            <h3>Battery services</h3>
            <p>Testing and replacement to keep your car starting every time.</p>
            <Link href="/services/battery-services">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="air-conditioning">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M2 12h20M12 2v20M20 16l-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
              </svg>
            </div>
            <h3>Air conditioning repair</h3>
            <p>
              Professional A/C service to keep you cool through Virginia
              summers.
            </p>
            <Link href="/services/air-conditioning">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="heating-system">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </div>
            <h3>Heating system service</h3>
            <p>Heat and defrost that work when the cold mornings come.</p>
            <Link href="/services/heating-system">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="wheel-alignment">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <rect x="2" y="4" width="4.5" height="16" rx="1.2" />
                <rect x="17.5" y="4" width="4.5" height="16" rx="1.2" />
                <path d="M6.5 12h11M9.5 9l-3 3 3 3M14.5 9l3 3-3 3" />
              </svg>
            </div>
            <h3>Wheel alignment</h3>
            <p>Drive straight, ride smooth, and save your tires.</p>
            <Link href="/services/wheel-alignment">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="suspension-steering">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M12 2v2.5M12 19.5V22M8 4.5h8M8 19.5h8M8 4.5l8 3-8 3 8 3-8 3 8 3" />
              </svg>
            </div>
            <h3>Suspension and steering</h3>
            <p>
              A smooth, safe, controlled ride. Expert repairs you can trust.
            </p>
            <Link href="/services/suspension-steering">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="engine-diagnostics">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="14" rx="2" />
                <path d="M6 11h3l2-3 2 6 2-3h3" />
                <path d="M8 21h8M12 18v3" />
              </svg>
            </div>
            <h3>Check engine diagnostics</h3>
            <p>Computer diagnostics to find out exactly why the light is on.</p>
            <Link href="/services/engine-diagnostics">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="bg-fluids">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M9 3h6M10 3v5l-5.5 10.5A2 2 0 0 0 6.3 21.5h11.4a2 2 0 0 0 1.8-3L14 8V3" />
                <path d="M7 15h10" />
              </svg>
            </div>
            <h3>BG fluid services</h3>
            <p>
              Protect your engine and transmission with professional BG fluid
              service.
            </p>
            <Link href="/services/bg-fluids">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s" id="state-inspection">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <rect width="8" height="4" x="8" y="2" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </div>
            <h3>State safety and emissions</h3>
            <p>State inspection and emissions testing, done on site.</p>
            <Link href="/services/state-inspection">
              Learn more
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="s ask" id="service-help">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <h3>Not sure what's wrong?</h3>
            <p>
              Tell us about the noise, the warning light or the feeling. We'll
              find it and fix it.
            </p>
            <a href={business.phoneHref}>
              Call {business.phoneDisplay}
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
        <div className="more">
          <p>
            <b>Every visit includes a free digital inspection,</b> so you'll
            know what's good, what needs attention, and what can wait.
          </p>
          <div className="acts">
            <Link href="/services" className="btn btn-ob">
              View all services
            </Link>
            <a
              href={business.bookingUrl}
              target="_blank"
