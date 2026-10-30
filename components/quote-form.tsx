"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import { business, integrations } from "@/lib/business";
import { vehicles } from "@/lib/vehicles";
import Icon from "./icon";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const FALLBACK_ERROR = "We couldn't send your request.";

/** Result of a no-JavaScript submission (send-quote.php redirects with ?sent=1 / ?error=1). */
const readRedirectResult = (): "sent" | "error" | null => {
  const params = new URLSearchParams(window.location.search);
  return params.has("sent") ? "sent" : params.has("error") ? "error" : null;
};

/**
 * Request a Quote form. Posts to integrations.quoteFormAction
 * (public/send-quote.php on the host), which emails the shop. Without
 * JavaScript the browser posts normally and the script redirects back here
 * with ?sent=1 or ?error=1.
 */
export default function QuoteForm({ newestYear }: { newestYear: number }) {
  const years = Array.from(
    { length: newestYear - 1989 },
    (_, i) => newestYear - i,
  );
  const action = integrations.quoteFormAction;
  const [submitted, setStatus] = useState<Status>({ state: "idle" });
  const redirected = useSyncExternalStore(
    () => () => {},
    readRedirectResult,
    () => null,
  );
  const status: Status =
    submitted.state !== "idle"
      ? submitted
      : redirected === "sent"
        ? { state: "sent" }
        : redirected === "error"
          ? { state: "error", message: FALLBACK_ERROR }
          : submitted;
  const startedRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When the form was shown: the handler drops submissions made too fast.
    if (startedRef.current) startedRef.current.value = String(Date.now());
  }, []);

  useEffect(() => {
    if (status.state !== "sent" && status.state !== "error") return;
    // Centre the message so the sticky header can't cover it.
    messageRef.current?.focus({ preventScroll: true });
    messageRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [status.state]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!action || status.state === "sending") return;
    const form = event.currentTarget;
    setStatus({ state: "sending" });
    try {
      const response = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (response.ok && result?.ok) {
        form.reset();
        setStatus({ state: "sent" });
      } else {
        setStatus({ state: "error", message: result?.error || FALLBACK_ERROR });
      }
    } catch {
      setStatus({ state: "error", message: FALLBACK_ERROR });
    }
  }

  return (
    <form
      className="quote-form"
      action={action || undefined}
      method="post"
      aria-labelledby="quote-form-title"
      aria-describedby={!action ? "quote-form-note" : undefined}
      onSubmit={onSubmit}
    >
      <h2 id="quote-form-title">Request a quote</h2>
      {!action && (
        <p id="quote-form-note" className="qf-note">
          Online quote requests are coming soon. For now, call{" "}
          <a href={business.phoneHref}>{business.phoneLocal}</a> and a
          service advisor will talk you through it.
        </p>
      )}
      <div aria-live="polite">
        {status.state === "sent" && (
          <div ref={messageRef} tabIndex={-1} className="qf-status qf-status--ok">
            <b>Thanks, your quote request was sent.</b> A service advisor will
            get back to you soon. Need it sooner? Call{" "}
            <a href={business.phoneHref}>{business.phoneLocal}</a>.
          </div>
        )}
        {status.state === "error" && (
          <div ref={messageRef} tabIndex={-1} className="qf-status qf-status--error">
            <b>{status.message}</b> Please try again, or call{" "}
            <a href={business.phoneHref}>{business.phoneLocal}</a>.
          </div>
        )}
      </div>
      {/* Spam trap: hidden from people, filled in by bots. */}
      <div className="qf-trap" aria-hidden="true">
        <label htmlFor="quote-company">Company</label>
        <input id="quote-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedRef} type="hidden" name="started" defaultValue="" />
      <fieldset>
        <legend>Your vehicle</legend>
        <div className="qf-row qf-row--3">
          <div className="qf-field">
            <label htmlFor="quote-year">Year</label>
            <select id="quote-year" name="year" required defaultValue="">
              <option value="" disabled>
                Select year
              </option>
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
              <option value="older">Older</option>
            </select>
          </div>
          <div className="qf-field">
            <label htmlFor="quote-make">Make</label>
            <select id="quote-make" name="make" required defaultValue="">
              <option value="" disabled>
                Select make
              </option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.slug}>{vehicle.name}</option>
              ))}
              <option value="other">Other</option>
            </select>
          </div>
          <div className="qf-field">
            <label htmlFor="quote-model">Model</label>
            <input
              id="quote-model"
              name="model"
              placeholder="e.g. Camry"
              required
              maxLength={80}
            />
          </div>
        </div>
        <div className="qf-field">
          <label htmlFor="quote-symptoms">What&apos;s going on?</label>
          <textarea
            id="quote-symptoms"
            name="symptoms"
            rows={5}
            required
            maxLength={4000}
            placeholder="Describe the symptoms, noises, warning lights, or the service you need."
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>How we reach you</legend>
        <div className="qf-row qf-row--3">
          <div className="qf-field">
            <label htmlFor="quote-name">Name</label>
            <input
              id="quote-name"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
            />
          </div>
          <div className="qf-field">
            <label htmlFor="quote-phone">Phone</label>
            <input
              id="quote-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              maxLength={30}
            />
          </div>
          <div className="qf-field">
            <label htmlFor="quote-email">Email (optional)</label>
            <input
              id="quote-email"
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
            />
          </div>
        </div>
      </fieldset>
      <button
        type="submit"
        className="btn btn-y"
        disabled={!action || status.state === "sending"}
      >
        {status.state === "sending" ? "Sending…" : "Send quote request"}
        <Icon name="arrow" />
      </button>
    </form>
  );
}
