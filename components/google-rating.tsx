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
        <dt className="l">Google rating</dt>
        <dd className="n">{score ?? "—"}</dd>
        <dd className="s">
          {data && <Stars rating={data.rating} />}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {count ? `${count} reviews on ` : "Read reviews on "}
            {attribution}
          </a>
          {attributionLinks}
        </dd>
      </div>
    );
  }
  if (variant === "score" || variant === "summary") {
    return (
      <div className={`google-rating google-rating--${variant}`}>
        {!data && (
          <div className="big" aria-label="Google rating unavailable">
            —
          </div>
        )}
        {data && (
          <>
            <div className="big">{score}</div>
            <Stars rating={data.rating} />
          </>
        )}
        <p>
          {count ? `Based on ${count} reviews on ` : "Customer reviews on "}
          {attribution}
        </p>
        {attributionLinks}
        {variant === "score" && (
          <a
            href={link}
            className="btn btn-n"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Google reviews
          </a>
        )}
      </div>
    );
  }
  return (
    <span className={`google-rating google-rating--${variant}`}>
      {data && (
        <>
          <b>{score}</b>
