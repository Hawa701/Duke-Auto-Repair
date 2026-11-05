import Image from "next/image";
import Link from "next/link";
import PageHeader from "./page-header";
import ReviewsSlider from "./reviews-slider";
import Icon from "./icon";
import RichText from "./rich-text";
import CertLogos, { type CertLogoId } from "./cert-logos";
import { business, withBookingPopup } from "@/lib/business";
import type { SiloSection } from "@/lib/services";
import "./silo-page.css";

type SiloLink = { href: string; label: string };

/**
 * Shared layout for the service and vehicle "silo" pages in the content
 * guide: hero + intro, fixed left sidebar, SEO H2 sections, a bottom CTA
 * banner, then a reviews slider beside the first-visit offer.
 */
export default function SiloPage({
  name,
  heading,
  intro,
  image,
  imageAlt,
  imagePosition,
  sections,
  banner,
  parent,
  others,
  othersTitle,
  logos,
  gallery,
}: {
  name: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  sections: SiloSection[];
  banner: string;
  parent: SiloLink;
  others: SiloLink[];
  othersTitle: string;
  /** Certification logos shown in the sidebar (e.g. on the inspection page). */
  logos?: CertLogoId[];
  /** Extra shop photos shown under the page copy. */
  gallery?: { src: string; alt: string }[];
}) {
  return (
    <div className="silo-page">
      <PageHeader
        title={heading}
        breadcrumb={name}
        breadcrumbs={[{ href: "/", label: "Home" }, parent]}
        description={intro}
        image={image}
        imageAlt={imageAlt}
        imagePosition={imagePosition}
        compact
      />
      <section className="silo">
        <div className="wrap silo-grid">
          <div className="silo-main">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>
                  <RichText text={section.body} />
                </p>
              </section>
            ))}
            {gallery && gallery.length > 0 && (
              <section className="silo-gallery" aria-labelledby="silo-gallery-title">
                <h2 id="silo-gallery-title">In the shop</h2>
                <div className="silo-gallery-grid">
                  {gallery.map((photo) => (
                    <figure key={photo.src}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={1600}
                        height={739}
                        sizes="(max-width: 900px) 100vw, 420px"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>
          <aside className="silo-side" aria-label={`${othersTitle} and contact`}>
            <nav className="side-card side-links" aria-label={othersTitle}>
              <h2>{othersTitle}</h2>
              <ul>
                {others.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                      <Icon name="arrow" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link className="side-all" href={parent.href}>
                View all {parent.label.toLowerCase()}
              </Link>
            </nav>
            {logos && (
              <div className="side-card side-certs">
                <h2>Certified Station</h2>
                <CertLogos ids={logos} label="Station certifications" />
              </div>
            )}
            <div className="side-card side-contact">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <Icon name="pin" />
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {business.shortAddress}
                  </a>
                </li>
                <li>
                  <Icon name="phone" />
                  <a href={business.phoneHref}>{business.phoneLocal}</a>
                </li>
                <li>
                  <Icon name="clock" />
                  <span>
                    {business.hours.slice(0, 2).map((row) => (
                      <span className="side-hours" key={row.short}>
                        {row.short} {row.time.replace(/:00/g, "")}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={withBookingPopup("btn btn-y")}
              >
                Book An Appointment
              </a>
              <Link className="side-quote" href="/quote">
                Request a quote
                <Icon name="arrow" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="silo-banner" aria-label="Book your visit">
        <div className="wrap">
          <p>{banner}</p>
          <div className="silo-banner-acts">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={withBookingPopup("btn btn-y")}
            >
              Book An Appointment
            </a>
            <a href={business.phoneHref} className="btn btn-o">
              <Icon name="phone" />
              {business.phoneLocal}
            </a>
          </div>
        </div>
      </section>
      <div className="silo-widgets">
        <div className="wrap">
          <ReviewsSlider />
          <OfferCard />
        </div>
      </div>
    </div>
  );
}

export function OfferCard() {
  return (
    <aside className="offer-card" aria-labelledby="offer-card-title">
      <span className="offer-tag">
        <Icon name="scissors" />
        Digital coupon
      </span>
      <h2 id="offer-card-title">
        <b>Up to $50 Off</b> Your First Visit
      </h2>
      <p>Show this offer on your phone at checkout. No printing required.</p>
      <Link href="/promotions" className="btn btn-n">
        See all coupons
        <Icon name="arrow" />
      </Link>
    </aside>
  );
}
