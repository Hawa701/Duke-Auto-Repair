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
          <span className="util-inspection">
            <Icon name="clock" />
            <span>
              {business.inspectionHours}
              <span className="util-sep" aria-hidden="true">
                {" "}
                |{" "}
              </span>
              <strong>Walk-ins Welcome</strong>
            </span>
          </span>
          <span className="util-contact">
            <span>
              <Icon name="phone" />
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </span>
            {integrations.customerPortalUrl && (
              <span>
                <Icon name="user" />
                <a
                  href={integrations.customerPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer Dashboard
                </a>
              </span>
            )}
          </span>
        </div>
      </div>
      <SiteNavigation />
    </header>
  );
}
