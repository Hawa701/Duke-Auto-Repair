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
