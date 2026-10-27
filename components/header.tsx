"use client";

import { usePathname } from "next/navigation";
import { business, integrations } from "@/lib/business";

import Icon from "./icon";
import SiteNavigation from "./site-navigation";
import "./header.css";

export default function Header() {
  const home = usePathname() === "/";
  return (
    <header className={`site-header${home ? " site-header--home" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="util">
        <div className="wrap">
          <span className="util-address">
            <Icon name="pin" />
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {business.shortAddress}
            </a>
          </span>
          <div className="right">
            <GoogleRating variant="utility" />
          </div>
        </div>
      </div>
      <SiteNavigation />
    </header>
  );
}
