"use client";

import { business } from "@/lib/business";
import { useGoogleRating } from "./google-reviews-provider";
import { Stars } from "./icon";

type Variant =
  "utility" | "hero" | "footer" | "score" | "stat" | "summary" | "crew";

export default function GoogleRating({
