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
