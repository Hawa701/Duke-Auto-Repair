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
  const attribution = (
    <span className="google-maps-attribution" translate="no">
      Google Maps
    </span>
  );
  const attributionLinks = data?.attributions.map(
    ({ provider, uri }, index) => (
      <span
        className="google-provider-attribution"
        key={`${provider}-${index}`}
      >
        {uri ? (
          <a href={uri} target="_blank" rel="noopener noreferrer">
            {provider}
          </a>
        ) : (
          provider
        )}
      </span>
    ),
  );

  if (variant === "crew") {
    return (
      <div className="crew-rating">
        <dt>{score ? `${score} on Google` : "Google reviews"}</dt>
        <dd>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {count ? `From ${count} reviews` : "Read customer reviews"}
          </a>
          <span className="crew-rating__attribution">
            {attribution}
            {attributionLinks}
          </span>
        </dd>
      </div>
    );
  }
  if (variant === "stat") {
    return (
      <div className="st google-rating google-rating--stat">
