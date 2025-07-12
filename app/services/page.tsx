import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import BookingCta from "@/components/home/booking-cta";
import Icon from "@/components/icon";
import ServiceIcon from "@/components/service-icon";
import { business } from "@/lib/business";
import { serviceGroups } from "@/lib/services";
import "./services.css";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore maintenance, repairs, wheel alignment, diagnostics and state inspections at ${business.name} in ${business.city}. Every visit includes a free digital inspection.`,
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageHeader
        title="Our Services"
        breadcrumb="Services"
        description="Everything your car needs, done right here in one garage. Every visit includes a free digital inspection."
        image="/images/about/shop-floor.jpg"
      />
      <nav className="service-jump" aria-label="Service categories">
        <div className="wrap">
          <span className="jump-label">Jump to:</span>
          <div className="jump-links">
            {serviceGroups.map((group) => (
              <a href={`#${group.id}`} key={group.id}>
                {group.label}
              </a>
            ))}
          </div>
          <a className="jump-call" href={business.phoneHref}>
            <Icon name="phone" />
            {business.phoneDisplay}
          </a>
        </div>
      </nav>

      <div className="service-groups wrap">
        {serviceGroups.map((group, index) => (
          <section
            className={`service-group${index % 2 ? " is-reversed" : ""}`}
            id={group.id}
            key={group.id}
            aria-labelledby={`${group.id}-title`}
          >
            <figure className="service-photo">
              <Image
                src={group.image}
                alt={group.imageAlt}
                fill
                sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1280px) 40vw, 480px"
                style={{ objectPosition: group.imagePosition }}
              />
              <figcaption>
                {group.services.length}{" "}
                {group.services.length === 1 ? "service" : "services"}
