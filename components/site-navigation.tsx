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
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="wrap">
        <Link
          href="/"
          aria-label="Duke Auto Repair home"
          onClick={() => setOpen(false)}
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
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <ul id="site-navigation" className={open ? "is-open" : ""}>
          {navigation.map(({ href, label }) => {
            const current = pathname === href;
            const active =
              current || (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <li key={href} className={active ? "on" : undefined}>
                <Link
                  href={href}
                  aria-current={
                    current ? "page" : active ? "location" : undefined
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={business.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-y header-booking"
          onClick={() => setOpen(false)}
        >
          Book an appointment
        </a>
      </div>
    </nav>
  );
}
