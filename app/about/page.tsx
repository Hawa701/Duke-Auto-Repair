import Stagger from "@/components/stagger";
import type { Metadata } from "next";
import { business } from "@/lib/business";
import PageHeader from "@/components/page-header";
import HomeAwards from "@/components/home/awards";
import BookingCta from "@/components/home/booking-cta";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${business.name}, your locally owned repair shop in ${business.city}, built on honest, transparent service centered around you.`,
};

const stats = [
  {
    value: "10",
    suffix: "+",
    label: "Years of experience",
    detail: `Serving ${business.city} drivers`,
  },
  {
    value: "10",
    suffix: "+",
    label: "Certified technicians",
    detail: "Trained for major and minor repairs",
  },
  {
    value: "10K",
    suffix: "+",
    label: "Vehicles serviced",
    detail: "And handed back with confidence",
  },
  {
    value: "98",
    suffix: "%",
    label: "Satisfaction rate",
    detail: "From customers we've served",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHeader
        title="About Us"
        breadcrumb="About us"
        description={`A locally owned repair shop in ${business.city}, built on honest, transparent service centered around you, the driver.`}
        image="/images/about/exterior-bays.jpg"
        hasLift
      />
      <section className="lift" aria-label="Our shop and team">
        <div className="wrap strip">
          <figure className="s1">
            <i
              role="img"
              aria-label="The Duke Auto storefront"
              style={{
                backgroundImage: "url(/images/about/storefront-square.jpg)",
                backgroundPosition: "50% 55%",
              }}
            ></i>
          </figure>
          <figure className="s2">
            <i
              role="img"
              aria-label="Three Duke Auto team members at the front desk"
              style={{
                backgroundImage: "url(/images/about/desk-trio.jpg)",
                backgroundPosition: "50% 30%",
              }}
            ></i>
          </figure>
          <figure className="s3">
            <i
              role="img"
              aria-label="A technician running diagnostics"
              style={{
                backgroundImage: "url(/images/about/diagnostics-portrait.jpg)",
                backgroundPosition: "60% 40%",
              }}
            ></i>
          </figure>
          <figure className="s4">
            <i
              role="img"
              aria-label="Two technicians working together under the hood"
              style={{
                backgroundImage: "url(/images/about/techs-under-hood.jpg)",
                backgroundPosition: "50% 50%",
              }}
            ></i>
          </figure>
        </div>
      </section>
      <section
        className="stats after-lift"
        aria-label="Duke Auto by the numbers"
      >
        <div>
          <dl className="wrap">
            {stats.map(({ value, suffix, label, detail }) => (
              <div className="st" key={label}>
                <dt className="l">{label}</dt>
                <dd className="n">
                  {value}
                  <sup>{suffix}</sup>
                </dd>
                <dd className="s">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="values" aria-labelledby="values-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="values-title">What we stand for.</h2>
            <p>
              Three promises we make to every driver who comes through our
              doors.
            </p>
          </div>
          <Stagger className="vals" pattern="alternate" interval={0.1}>
            <div className="val">
              <div className="ph">
                <i
                  role="img"
                  aria-label="A technician checking a state inspection sticker"
                  style={{
                    backgroundImage: "url(/images/about/state-inspection.jpg)",
                    backgroundPosition: "55% 45%",
                  }}
                ></i>
                <b>01</b>
              </div>
              <h3>Honest.</h3>
              <h4>No pressure, no upsell.</h4>
              <p>
                We tell you what needs attention now and what can wait. The
                decision is always yours.
              </p>
            </div>
            <div className="val">
              <div className="ph">
                <i
                  role="img"
                  aria-label="Wheel alignment equipment showing a live reading"
                  style={{
                    backgroundImage: "url(/images/about/alignment-rig.jpg)",
                    backgroundPosition: "50% 55%",
                  }}
                ></i>
                <b>02</b>
              </div>
              <h3>Transparent.</h3>
              <h4>See what we see.</h4>
              <p>
                Every visit comes with a free digital inspection report, so you
                can see your car's condition for yourself.
              </p>
            </div>
            <div className="val">
              <div className="ph">
                <i
                  role="img"
                  aria-label="The customer lounge with seating and coffee"
                  style={{
                    backgroundImage: "url(/images/about/lounge.jpg)",
                    backgroundPosition: "50% 55%",
                  }}
                ></i>
                <b>03</b>
              </div>
              <h3>Centered around&nbsp;you.</h3>
              <h4>Your time matters.</h4>
              <p>
                Wait in our lounge, drop your car off, or let us pick it up and
                bring it back to your door.
              </p>
            </div>
