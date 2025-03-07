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
