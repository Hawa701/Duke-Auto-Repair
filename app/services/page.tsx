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
              </figcaption>
            </figure>
            <div className="service-group-content">
              <div className="service-group-heading">
                <span className="service-eyebrow">
                  {String(index + 1).padStart(2, "0")} / {group.label}
                </span>
                <h2 id={`${group.id}-title`}>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <ul className="service-list">
                {group.services.map((service) => (
                  <li id={service.id} key={service.id}>
                    <Link
                      className="service-row"
                      href={service.href}
                      aria-label={`Learn more about ${service.name.toLowerCase()}`}
                    >
                      <span className="service-icon">
                        <ServiceIcon name={service.icon} />
                      </span>
                      <span className="service-text">
                        <span className="service-name">{service.name}</span>
                        <span className="service-description">
                          {service.description}
                        </span>
                      </span>
                      <span className="service-go">
                        <Icon name="arrow" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section
        className="service-unsure wrap"
