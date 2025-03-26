import { business } from "@/lib/business";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Icon from "./icon";
import SiteNavigation from "./site-navigation";
import "./page-hero.css";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  imagePlacement?: "full" | "right";
  imageSize?: string;
  imageMask?: string;
  links?: { href: string; label: string }[];
  sectionNavigation?: ReactNode;
};

export default function PageHero({
  title,
  description,
  image,
  imagePosition = "center",
  imagePlacement = "full",
  imageSize,
  imageMask,
  links = [],
  sectionNavigation,
}: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div
        className={`page-hero__background${imagePlacement === "right" ? " page-hero__right" : ""}`}
        style={
          {
            backgroundImage: `url(${image})`,
            backgroundPosition: imagePosition,
            "--page-hero-image-size": imageSize,
            "--page-hero-image-mask": imageMask,
          } as CSSProperties
        }
      />
      <SiteNavigation />
      <div className="page-hero__inner">
        <div className="wrap">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span aria-current="page">{title}</span>
          </nav>
          <div className="page-hero__copy">
            <h1 id="page-title">{title}</h1>
            <p>{description}</p>
          </div>
          <nav className="page-hero__jumps" aria-label={`${title} sections`}>
            {sectionNavigation ??
              links.map(({ href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  className={`page-hero__jump-link${index === 0 ? " page-hero__first" : ""}`}
                >
                  <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 5v14M6 13l6 6 6-6" />
                  </svg>
                  {label}
                </a>
              ))}
            <a href={business.phoneHref} className="page-hero__call">
              <Icon name="phone" />
              <span>
                Questions? <b>{business.phoneDisplay}</b>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
