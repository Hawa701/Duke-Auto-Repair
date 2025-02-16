import { business } from "./business";
import type { GoogleRatingData } from "./google-reviews";

// Manually supplied Google listing snapshot. Live API results take precedence.
export const googleReviewSnapshot: GoogleRatingData = {
  rating: 4.8,
  reviewCount: 765,
  mapsUrl: business.googleReviewsUrl,
  attributions: [],
};

