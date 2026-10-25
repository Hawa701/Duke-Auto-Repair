"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore, useState } from "react";
import Icon from "./icon";
import "./floating-widgets.css";

const DISMISS_KEY = "duke-coupon-sticker-dismissed";

const readDismissed = () => {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
};

/**
 * Bottom-left: a small, dismissible Coupons sticker. (Seasonal promos also
 * get a one-time popup at the client's request: components/promo-popup.tsx.)
 * Bottom-right: Shopgenie's "Text us" chat bubble,
 * added by the Shopgenie embed script loaded in app/layout.tsx.
 */
export default function FloatingWidgets() {
  const pathname = usePathname();
  // Hidden during prerender; read the session flag after hydration.
  const storedDismissal = useSyncExternalStore(
    () => () => {},
    readDismissed,
    () => true,
  );
  const [dismissed, setDismissed] = useState(false);
  const onCoupons = pathname.replace(/\/$/, "") === "/promotions";

  return (
    <>
      {!onCoupons && !storedDismissal && !dismissed && (
        <aside className="coupon-sticker" aria-label="Current offers">
          <Link href="/promotions">
            <Icon name="tag" />
            <b>Coupons</b>
          </Link>
          <button
            type="button"
            aria-label="Dismiss coupons sticker"
            onClick={() => {
              setDismissed(true);
              try {
                window.sessionStorage.setItem(DISMISS_KEY, "1");
              } catch {}
            }}
          >
            <Icon name="close" />
          </button>
        </aside>
      )}
    </>
  );
}
