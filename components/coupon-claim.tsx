"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  couponFormAction,
  couponGroups,
  coupons,
  thankYouHref,
} from "@/lib/coupons";
import { business } from "@/lib/business";
import Icon from "./icon";
import "./coupon-claim.css";

const CLAIM_EVENT = "duke:claim-coupon";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;
const UTM_STORE = "duke-coupon-utm";
const FALLBACK_ERROR = "We couldn't send your coupon.";

/** "Claim Coupon" on a coupon card: opens the pop-up with that coupon checked. */
export function ClaimCouponButton({
  code,
  label,
}: {
  code: string;
  label: string;
}) {
  return (
    <button
      type="button"
      className="btn btn-y coupon-action"
      aria-haspopup="dialog"
      aria-label={`Claim Coupon: ${label}`}
      onClick={() =>
        window.dispatchEvent(new CustomEvent(CLAIM_EVENT, { detail: code }))
      }
    >
      Claim Coupon
      <Icon name="arrow" />
    </button>
  );
}

/** Ad tags from this visit's landing URL, kept for the session so they survive page changes. */
function readUtm(): Record<string, string> {
  const fromUrl: Record<string, string> = {};
  const params = new URLSearchParams(window.location.search);
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value.slice(0, 120);
  }
  try {
    if (Object.keys(fromUrl).length) {
      window.sessionStorage.setItem(UTM_STORE, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return JSON.parse(window.sessionStorage.getItem(UTM_STORE) || "{}");
  } catch {
    return fromUrl;
  }
}

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "error"; message: string };

/**
 * The one claim pop-up on the coupons page (Step 1 of the coupon funnel).
 * Opens from any ClaimCouponButton with that coupon pre-checked; visitors can
 * tick more. Posts to send-coupons.php (emails the voucher, BCC the shop),
 * then goes to the thank-you page with the chosen coupons.
 */
export default function CouponClaim() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const startedRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const utmRef = useRef<Record<string, string>>({});

  useEffect(() => {
    // Read once on load: the landing URL carries the ad tags.
    utmRef.current = readUtm();
    const open = (event: Event) => {
      const code = (event as CustomEvent<string>).detail;
      setChecked([code]);
      setStatus({ state: "idle" });
      if (startedRef.current) startedRef.current.value = String(Date.now());
      const dialog = dialogRef.current;
      if (!dialog) return;
      // The winter promo pop-up may be open: one dialog at a time.
      document
        .querySelectorAll<HTMLDialogElement>("dialog[open]")
        .forEach((other) => other !== dialog && other.close());
      if (!dialog.open) dialog.showModal();
    };
    window.addEventListener(CLAIM_EVENT, open);
    return () => window.removeEventListener(CLAIM_EVENT, open);
  }, []);

  const close = () => dialogRef.current?.close();

  const toggle = (code: string, on: boolean) =>
    setChecked((current) =>
      on
        ? coupons
            .map((c) => c.code)
            .filter((c) => c === code || current.includes(c))
        : current.filter((c) => c !== code),
    );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === "sending") return;
    const form = event.currentTarget;
    if (!checked.length) {
      setStatus({ state: "error", message: "Please choose at least one coupon." });
      return;
    }
    const data = new FormData(form);
    // Hidden ad tags (?utm_campaign=winter) go with the claim.
    const utm = utmRef.current;
    for (const [key, value] of Object.entries(utm)) data.set(key, value);
    const firstName = String(data.get("name") || "").trim().split(/\s+/)[0];
    let emailed = true;

    if (couponFormAction) {
      setStatus({ state: "sending" });
      try {
        const response = await fetch(couponFormAction, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        const result = (await response.json().catch(() => null)) as {
          ok?: boolean;
          error?: string;
          mailFailed?: boolean;
        } | null;
        if (!response.ok || !result?.ok) {
          // The email didn't go out, but the visitor can still print the
          // coupons: carry on to the thank-you page and say so there.
          if (result?.mailFailed || response.status >= 500 || !result) {
            emailed = false;
          } else {
            setStatus({
              state: "error",
              message: result?.error || FALLBACK_ERROR,
            });
            return;
          }
        }
      } catch {
        emailed = false;
      }
    }

    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "coupon_claim",
      coupon_codes: checked.join(","),
      coupon_count: checked.length,
      ...utm,
    });

    const href = thankYouHref(checked, firstName);
    setStatus({ state: "idle" });
    form.reset();
    close();
    router.push(emailed ? href : `${href}&mail=0`);
  }

  return (
    <dialog
      ref={dialogRef}
      className="coupon-claim"
      aria-labelledby="coupon-claim-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <form
        className="coupon-claim__box"
        action={couponFormAction || undefined}
        method="post"
        onSubmit={onSubmit}
      >
        <button
          type="button"
          className="coupon-claim__close"
          aria-label="Close"
          onClick={close}
        >
          <Icon name="close" />
        </button>
        <h2 id="coupon-claim-title">Claim Your Coupon</h2>
        <p className="coupon-claim__lead">
          We&apos;ll email your coupon and promo code, and show it on the next
          page so you can print it or take a screenshot.
        </p>

        <fieldset className="coupon-claim__offers">
          <legend>Your coupon(s)</legend>
          {couponGroups.map((group) => (
            <div className="coupon-claim__group" key={group.id}>
              <p className="coupon-claim__group-title">{group.title}</p>
              {coupons
                .filter((coupon) => coupon.group === group.id)
                .map((coupon) => (
                  <label className="coupon-claim__offer" key={coupon.code}>
                    <input
                      type="checkbox"
                      name="coupons[]"
                      value={coupon.code}
                      checked={checked.includes(coupon.code)}
                      onChange={(event) =>
                        toggle(coupon.code, event.target.checked)
                      }
                    />
                    <span>{coupon.label}</span>
                  </label>
                ))}
            </div>
          ))}
        </fieldset>

        {/* Spam trap: hidden from people, filled in by bots. */}
        <div className="coupon-claim__trap" aria-hidden="true">
          <label htmlFor="claim-company">Company</label>
          <input id="claim-company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
        <input ref={startedRef} type="hidden" name="started" defaultValue="" />

        <div className="coupon-claim__fields">
          <div className="coupon-claim__field">
            <label htmlFor="claim-name">Name</label>
            <input
              id="claim-name"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
            />
          </div>
          <div className="coupon-claim__field">
            <label htmlFor="claim-email">Email</label>
            <input
              id="claim-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </div>
          <div className="coupon-claim__field">
            <label htmlFor="claim-phone">Phone (optional)</label>
            <input
              id="claim-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              maxLength={30}
            />
          </div>
          <div className="coupon-claim__field">
            <label htmlFor="claim-vehicle">Vehicle (optional)</label>
            <input
              id="claim-vehicle"
              name="vehicle"
              placeholder="e.g. 2019 Honda Civic"
              maxLength={80}
            />
          </div>
        </div>

        <div aria-live="polite">
          {status.state === "error" && (
            <p className="coupon-claim__error">
              <b>{status.message}</b> Please try again, or call{" "}
              <a href={business.phoneHref}>{business.phoneLocal}</a>.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-y coupon-claim__submit"
          disabled={status.state === "sending"}
        >
          {status.state === "sending"
            ? "Sending…"
            : checked.length > 1
              ? "Get My Coupons"
              : "Get My Coupon"}
          <Icon name="arrow" />
        </button>
        <p className="coupon-claim__fine">
          Your coupon is emailed from {business.email}. We only use your
          details for your visit.
        </p>
      </form>
    </dialog>
  );
}
