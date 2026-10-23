import { business } from "./business";
import type { GoogleRatingData } from "./google-reviews";

// Manually supplied Google listing snapshot. Live API results take precedence.
export const googleReviewSnapshot: GoogleRatingData = {
  rating: 4.8,
  reviewCount: 789,
  mapsUrl: business.googleReviewsUrl,
  attributions: [],
};

// Topic mention counts from the supplied Google screenshot, not local card counts.
export const reviewTopics = [
  { id: "safety-inspection", label: "Safety inspection", count: 80, match: /\binspect/i },
  { id: "emissions-test", label: "Emissions test", count: 13, match: /\bemission/i },
  { id: "check-engine", label: "Check engine light diagnostics", count: 8, match: /check engine|engine light|diagnos/i },
  { id: "fair-pricing", label: "Fair pricing", count: 63, match: /\bpric|\bfair\b|reasonabl|affordab|\bcheap|\bcost/i },
  { id: "kind-staff", label: "Kind staff", count: 42, match: /\bkind\b|friendly|courteous|\bnice\b|welcoming/i },
  { id: "friendly-technicians", label: "Friendly technicians", count: 12, match: /technician|mechanic/i },
  { id: "honest-staff", label: "Honest staff", count: 17, match: /\bhonest|trustworth|\btrust/i },
] as const;

export type ReviewTopic = (typeof reviewTopics)[number]["id"];

export type CustomerReview = {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  service: string;
  topics: ReviewTopic[];
};

// Transcribed from the Google review screenshot supplied by the user.
export const customerReviews: CustomerReview[] = [
  {
    id: "jennie-dunnavant",
    name: "Jennie Dunnavant",
    initials: "JD",
    rating: 5,
    text: "I stopped in for a safety inspection. I was helped right away and my car was finished more quickly than they estimated. Everyone I spoke to was friendly and helpful. I will definitely be bringing my car here in the future.",
    service: "Safety inspection",
    topics: ["safety-inspection", "kind-staff"],
  },
];

// Relative visual lengths approximated from the screenshot, not exact percentages.
export const ratingDistribution = [
  { stars: 5, width: 100 },
  { stars: 4, width: 4 },
  { stars: 3, width: 1 },
  { stars: 2, width: 1 },
  { stars: 1, width: 4 },
] as const;

/** "Ana María López" -> "AL": avatar fallback when Google has no photo. */
export const initialsOf = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const letters = [parts[0], parts.length > 1 ? parts[parts.length - 1] : undefined]
    .map((part) => part?.[0] ?? "")
    .join("");
  return letters.toUpperCase() || "G";
};
