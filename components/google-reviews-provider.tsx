"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { loadGoogleRating, type GoogleRatingData } from "@/lib/google-reviews";
import { googleReviewSnapshot } from "@/lib/customer-reviews";

const GoogleReviewsContext = createContext<GoogleRatingData | null>(
  googleReviewSnapshot,
);
const REFRESH_INTERVAL = 15 * 60 * 1000;

export default function GoogleReviewsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<GoogleRatingData | null>(
    googleReviewSnapshot,
  );

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey?.trim()) return;
    let active = true;
    let fetching = false;
    let lastAttempt = 0;

    async function refresh() {
      if (fetching || document.visibilityState === "hidden") return;
      fetching = true;
      lastAttempt = Date.now();
      let timeout: ReturnType<typeof setTimeout> | undefined;
      try {
        const result = await Promise.race([
          loadGoogleRating(apiKey!, process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID),
          new Promise<never>((_, reject) => {
            timeout = setTimeout(
              () => reject(new Error("Google request timed out.")),
              20_000,
            );
          }),
        ]);
        if (active) setData(result);
      } catch {
        // Use the supplied listing snapshot until a live response is available.
        if (active) setData(googleReviewSnapshot);
      } finally {
        clearTimeout(timeout);
        fetching = false;
      }
    }
    const onVisible = () => {
      if (Date.now() - lastAttempt >= REFRESH_INTERVAL) void refresh();
    };
    void refresh();
    const interval = setInterval(onVisible, REFRESH_INTERVAL);
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    return () => {
      active = false;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, []);
