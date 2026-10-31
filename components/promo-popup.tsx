"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Icon from "./icon";
import "./promo-popup.css";

/**
 * Seasonal promo popup (client request): the Winter Deals artwork in a modal,
 * shown once per visit, a moment after the first page loads. Clicking the
 * picture opens the coupons page; the close button, Esc or a click outside
 * the picture closes it. It stops showing after `endsOn` (end of that day,
 * Eastern time) without a rebuild. To run a new promo, change this object.
 */
const promo = {
  image: "/images/home/winter-deals.webp",
  width: 1717,
  height: 916,
  alt: "Winter Deals are here! Get the best auto service deals of the year, now thru December 30. Download coupons. Coupons valid until 2/27/27.",
  href: "/promotions",
  endsOn: "2026-12-30",
  /** Wait this long after the page loads before showing it. */
  delayMs: 1500,
};

const SEEN_KEY = `duke-promo-seen-${promo.endsOn}`;

export default function PromoPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Not on the coupons page itself, and not after the promo ends.
    if (pathname.replace(/\/$/, "") === promo.href) return;
    if (Date.now() > Date.parse(`${promo.endsOn}T23:59:59-05:00`)) return;
    try {
      if (window.sessionStorage.getItem(SEEN_KEY) === "1") return;
    } catch {}

    let cancelled = false;
    let timer = 0;
    // Load the picture first so the popup never opens empty.
    const img = new window.Image();
    img.onload = () => {
      timer = window.setTimeout(() => {
        if (cancelled || dialog.open || document.querySelector("dialog[open]"))
          return;
        dialog.showModal();
        try {
          window.sessionStorage.setItem(SEEN_KEY, "1");
        } catch {}
      }, promo.delayMs);
    };
    img.src = promo.image;
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
    // Only on the first page of the visit; later navigation finds the flag.
  }, [pathname]);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className="promo-popup"
      aria-label="Winter Deals"
      onClick={(event) => {
        // A click on the dimmed backdrop lands on the dialog element itself.
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="promo-popup__box">
        <button
          type="button"
          className="promo-popup__close"
          aria-label="Close"
          onClick={close}
          autoFocus
        >
          <Icon name="close" />
        </button>
        <Link className="promo-popup__link" href={promo.href} onClick={close}>
          {/* Plain <img>: the export serves files as-is (images.unoptimized). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={promo.image}
            width={promo.width}
            height={promo.height}
            alt={promo.alt}
          />
        </Link>
      </div>
    </dialog>
  );
}
