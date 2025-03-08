"use client";

import { business } from "@/lib/business";

import Icon from "./icon";
import GoogleRating from "./google-rating";
import SiteNavigation from "./site-navigation";

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="util">
        <div className="wrap">
          <span>
            <Icon name="phone" />
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </span>
          <span>
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
