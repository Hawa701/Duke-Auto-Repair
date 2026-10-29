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

