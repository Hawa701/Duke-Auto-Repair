import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Entrance from "./entrance";
import RichText from "./rich-text";
import "./page-header.css";

type PageHeaderProps = {
  title: string;
  breadcrumb?: string;
  description: string;
  image: string;
  /** Describes the header photo. Leave empty for a purely decorative photo. */
  imageAlt?: string;
  imagePosition?: string;
  breadcrumbs?: { href: string; label: string }[];
  hasLift?: boolean;
  /** Smaller title for long, SEO-style headings. */
  compact?: boolean;
};

export default function PageHeader({
  title,
  breadcrumb = title,
  description,
  image,
  imageAlt = "",
  imagePosition = "center 55%",
  breadcrumbs = [{ href: "/", label: "Home" }],
  hasLift = false,
  compact = false,
}: PageHeaderProps) {
  return (
    <header
      className={`page-header${hasLift ? " has-lift" : ""}${compact ? " page-header--compact" : ""}`}
      aria-labelledby="page-title"
    >
      <Image
        className="page-header__img"
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: imagePosition }}
      />
      <Entrance className="wrap" pattern="up" waitForFonts>
        <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map(({ href, label }) => (
            <Fragment key={href}>
              <Link href={href}>{label}</Link>
              <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Fragment>
          ))}
          <b aria-current="page">{breadcrumb}</b>
        </nav>
        <h1 id="page-title">{title}</h1>
        <p>{description}</p>
      </Entrance>
    </header>
  );
}
