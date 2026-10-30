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
