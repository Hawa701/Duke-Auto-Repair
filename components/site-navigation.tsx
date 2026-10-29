"use client";

import { business, withBookingPopup } from "@/lib/business";
import { mainNavigation, type NavItem } from "@/lib/navigation";
import { services } from "@/lib/services";
import { vehicles } from "@/lib/vehicles";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./icon";
import ServiceIcon from "./service-icon";

type MenuId = NonNullable<NavItem["menu"]>;

// Must match the desktop breakpoint in header.css.
const DESKTOP = "(min-width: 800px)";

export default function SiteNavigation() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const closeAll = () => {
    setOpen(false);
    setMenu(null);
  };

  // Close menus after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setMenu(null);
  }

  useEffect(() => {
    if (!open && !menu) return;
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target)
      ) {
        setOpen(false);
        setMenu(null);
      }
    };
    const desktop = window.matchMedia(DESKTOP);
    const onBreakpoint = () => {
      setOpen(false);
      setMenu(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, menu]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const isDesktop = () => window.matchMedia(DESKTOP).matches;

  const hover = (id: MenuId | null) => {
    if (!isDesktop()) return;
    window.clearTimeout(closeTimer.current);
    if (id) setMenu(id);
    // A short delay lets the pointer cross the gap into the panel.
    else closeTimer.current = window.setTimeout(() => setMenu(null), 140);
  };

  return (
    <nav
      ref={navRef}
      className="site-nav"
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || (!open && !menu)) return;
        event.preventDefault();
        if (menu) {
          const trigger = navRef.current?.querySelector<HTMLButtonElement>(
            `[aria-controls="mega-${menu}"]`,
          );
          setMenu(null);
          trigger?.focus();
        } else {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeAll();
      }}
    >
      <div className="wrap">
        <Link
          href="/"
          className="nav-logo"
          aria-label="Duke Auto Repair home"
          onClick={closeAll}
        >
          <Image
            className="logo"
            src="/images/home/logo.png"
            alt="Duke Auto Repair & Service"
            width={1287}
            height={339}
            priority
          />
        </Link>
        <ul id="site-navigation" className={open ? "is-open" : undefined}>
          {mainNavigation.map((item) => {
            const current = pathname === item.href;
            // Service and blueprint vehicle pages live at the site root, so
            // their menu tab is matched by the page list, not the URL prefix.
            const inMenu =
              (item.menu === "services" &&
                services.some((service) => service.href === pathname)) ||
              (item.menu === "vehicles" &&
                vehicles.some((vehicle) => vehicle.href === pathname));
            const active =
              current ||
              inMenu ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            const link = (
              <Link
                href={item.href}
                aria-current={
                  current ? "page" : active ? "location" : undefined
                }
                onClick={closeAll}
              >
                {item.short ? (
                  <>
                    <span className="lbl-full">{item.label}</span>
                    <span className="lbl-short">{item.short}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            );
            if (!item.menu)
              return (
                <li key={item.href} className={active ? "on" : undefined}>
                  {link}
                </li>
              );
            const id = item.menu;
            const expanded = menu === id;
            return (
              <li
                key={item.href}
                className={`has-menu${active ? " on" : ""}${expanded ? " is-expanded" : ""}`}
                onMouseEnter={() => hover(id)}
                onMouseLeave={() => hover(null)}
              >
                <div className="nav-top">
                  {link}
                  <button
                    type="button"
                    className="sub-toggle"
                    aria-expanded={expanded}
                    aria-controls={`mega-${id}`}
                    aria-label={`${expanded ? "Hide" : "Show"} ${item.label} menu`}
                    onClick={() => setMenu(expanded ? null : id)}
                  >
                    <Icon name="chevron" />
                  </button>
                </div>
                <div className="mega" id={`mega-${id}`}>
                  {id === "services" ? (
                    <ServicesMenu onNavigate={closeAll} />
                  ) : (
                    <VehiclesMenu onNavigate={closeAll} />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <a
          className="nav-call"
          href={business.phoneHref}
          aria-label={`Call ${business.phoneDisplay}`}
        >
          <Icon name="phone" />
        </a>
        <a
          href={business.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={withBookingPopup("btn btn-y header-booking")}
          onClick={closeAll}
        >
          <span className="lbl-full">Book an Appointment</span>
          <span className="lbl-short">Book Now</span>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => {
            setOpen(!open);
            setMenu(null);
          }}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </nav>
  );
}

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mega-inner">
      <ul className="mega-services">
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={service.href} onClick={onNavigate}>
              <span className="mega-icon">
                <ServiceIcon name={service.icon} />
              </span>
              <span>
                <b>{service.name}</b>
                <small>{service.summary}</small>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mega-foot">
        <Link href="/services" onClick={onNavigate}>
          View all services
          <Icon name="arrow" />
        </Link>
        <Link href="/quote" onClick={onNavigate}>
          Request a quote
          <Icon name="arrow" />
        </Link>
      </div>
    </div>
  );
}

function VehiclesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mega-inner">
      <ul className="mega-vehicles">
        {vehicles.map((vehicle) => (
          <li key={vehicle.slug}>
            <Link href={vehicle.href} onClick={onNavigate}>
              {vehicle.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mega-foot">
        <Link href="/vehicles" onClick={onNavigate}>
          All vehicles we service
          <Icon name="arrow" />
        </Link>
        <span>Domestic &amp; Asian imports, cars, SUVs and light trucks.</span>
      </div>
    </div>
  );
}
