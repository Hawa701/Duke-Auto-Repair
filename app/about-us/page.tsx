import Stagger from "@/components/stagger";
import type { Metadata } from "next";
import Image from "next/image";
import { business, certifications, team } from "@/lib/business";
import Icon from "@/components/icon";
import PageHeader from "@/components/page-header";
import HomeAwards from "@/components/home/awards";
import BookingCta from "@/components/home/booking-cta";
import TrustBadges from "@/components/trust-badges";
import CertLogos from "@/components/cert-logos";
import "./about.css";

// Title, description, H1 and header alt text: Master SEO Blueprint, section 1.
export const metadata: Metadata = {
  title: {
    absolute: "About Us | ASE Certified Mechanics in Alexandria, VA",
  },
  description:
    "Locally owned for 20+ years, Duke Auto Repair offers ASE-certified mechanics, transparent flat-rate pricing, and a 24-month warranty in Alexandria, VA.",
};

const stats = [
  {
    value: "20",
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
    value: "50K",
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

// Values as given by the shop (Website Information Request, About Us).
const values = [
  {
    title: "Honesty.",
    text: "We recommend services based on what your vehicle genuinely needs.",
    image: "/images/about/state-inspection.jpg",
    imagePosition: "55% 45%",
    imageAlt: "A technician checking a state inspection sticker",
  },
  {
    title: "Transparency.",
    text: "Clear explanations, upfront estimates, and open communication.",
    image: "/images/about/alignment-rig.jpg",
    imagePosition: "50% 55%",
    imageAlt: "Wheel alignment equipment showing a live reading",
  },
  {
    title: "Customers are family.",
    text: "We treat every customer with the respect, care, and attention we'd give our own family.",
    image: "/images/about/lounge.jpg",
    imagePosition: "50% 55%",
    imageAlt: "The customer lounge with seating and coffee",
  },
  {
    title: "Quality & accountability.",
    text: "Professional workmanship, dependable repairs, and a commitment to standing behind our work.",
    image: "/images/about/brake-tech.jpg",
    imagePosition: "35% 50%",
    imageAlt: "A Duke Auto technician servicing the brakes on a truck",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHeader
        title="Locally Owned. Community Driven."
        breadcrumb="About us"
        description={`A locally owned repair shop in ${business.city}, built on honest, transparent service centered around you, the driver.`}
        image="/images/home/team.jpg"
        imageAlt="Duke Auto Repair ASE certified mechanics team in Alexandria VA"
        imagePosition="center 78%"
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
      <section className="story" aria-labelledby="story-title">
        <div className="wrap">
          <h2 id="story-title">Our story.</h2>
          {/* Content & UX Guide (revised), section 2. */}
          <p>
            Duke Auto Repair &amp; Service began over 20 years ago when our
            founder, Simon Gebrehiwot, built the business from the ground up.
            Starting with a single service bay, the business grew to three bays
            and eventually expanded into our current 10-bay facility in
            Alexandria, Virginia. Today, we combine decades of hands-on
            experience with modern diagnostic equipment and comprehensive
            automotive services. Our shop has grown, but our commitment remains
            the same: honest service, quality workmanship, and treating every
            customer like family.
          </p>
        </div>
      </section>
      <section className="values" aria-labelledby="values-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="values-title">What we stand for.</h2>
            <p>
              The promises we make to every driver who comes through our doors.
            </p>
          </div>
          <Stagger className="vals" pattern="alternate" interval={0.1}>
            {values.map((value, index) => (
              <div className="val" key={value.title}>
                <div className="ph">
