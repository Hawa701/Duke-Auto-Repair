import Link from "next/link";
import PageHeader from "@/components/page-header";
import BookingCta from "@/components/home/booking-cta";
import GoogleRating from "@/components/google-rating";
import Icon from "@/components/icon";
import ServiceIcon from "@/components/service-icon";
import { business } from "@/lib/business";
import { serviceGroups } from "@/lib/services";
import type { ServiceDetail as ServiceDetailContent } from "@/lib/service-details";
import "@/app/services/service-detail.css";

const services = serviceGroups.flatMap((group) => group.services);

export default function ServiceDetail({
  service,
}: {
  service: ServiceDetailContent;
}) {
  const relatedServices = service.relatedIds.flatMap((id) =>
    services.filter((item) => item.id === id),
  );
  return (
    <div className={`service-detail-page ${service.id}-service-page`}>
      <PageHeader
        title={service.title}
        breadcrumb={service.title}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ]}
        description={service.description}
        image={service.image}
        imagePosition={service.imagePosition}
      />
      <section
        className="service-detail"
        aria-labelledby={`${service.id}-intro-title`}
      >
        <div className="wrap detail-grid">
          <div className="detail-content">
            <h2 id={`${service.id}-intro-title`}>{service.introTitle}</h2>
            <p className="detail-lead">{service.intro}</p>
            <h3 id={`${service.id}-signs-title`}>{service.signsTitle}</h3>
            <ul
              className="detail-signs"
              aria-labelledby={`${service.id}-signs-title`}
            >
              {service.signs.map((sign) => (
                <li key={sign}>
                  <Icon name="check" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <h3 id={`${service.id}-checks-title`}>What we check and service</h3>
            <div
              className="detail-checks"
              aria-labelledby={`${service.id}-checks-title`}
            >
              {service.checks.map((check) => (
                <div className="detail-check" key={check.title}>
                  <span className="check-icon">
                    <Icon name="check" />
                  </span>
                  <div>
                    <h4>{check.title}</h4>
                    <p>{check.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {service.helpfulLinks && (
              <div className="detail-helpful-links">
                <p>Check the current requirements for your vehicle:</p>
                <ul>
                  {service.helpfulLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <Icon name="arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside
            className="service-bookcard"
            aria-labelledby={`${service.id}-booking-title`}
          >
            <span className="booking-tag">{service.bookingTag}</span>
            <h2 id={`${service.id}-booking-title`}>{service.bookingTitle}</h2>
            <p>{service.bookingDescription}</p>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-y"
            >
              Book an appointment
              <Icon name="arrow" />
            </a>
            <a className="booking-phone" href={business.phoneHref}>
              <Icon name="phone" />
              <span>
                <small>Prefer to call?</small>
                <b>{business.phoneDisplay}</b>
              </span>
            </a>
            <ul className="booking-benefits">
              <li>
                <Icon name="check" />
                Free digital inspection
              </li>
              <li>
                <Icon name="check" />
                Certified technicians
              </li>
            </ul>
            <div className="booking-rating">
              <GoogleRating variant="utility" />
            </div>
          </aside>
        </div>
      </section>
      <section
        className="related-services"
        aria-labelledby="related-services-title"
      >
        <div className="wrap">
          <div className="sec-head">
            <h2 id="related-services-title">Related services.</h2>
            <p>
              {service.relatedDescription}{" "}
              <Link href="/services">See all services</Link>
            </p>
