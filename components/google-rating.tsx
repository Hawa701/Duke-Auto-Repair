"use client";

import { business } from "@/lib/business";
import { useGoogleRating } from "./google-reviews-provider";
import { Stars } from "./icon";

type Variant =
  "utility" | "hero" | "footer" | "score" | "stat" | "summary" | "crew";

export default function GoogleRating({
  variant = "footer",
}: {
  variant?: Variant;
}) {
  const data = useGoogleRating();
  const score = data?.rating.toFixed(1);
  const count = data
    ? new Intl.NumberFormat("en-US").format(data.reviewCount)
    : null;
  const link = business.googleReviewsUrl;
