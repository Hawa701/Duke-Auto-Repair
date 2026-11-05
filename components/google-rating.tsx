"use client";

import { business } from "@/lib/business";
import { useGoogleRating } from "./google-reviews-provider";
import { Stars } from "./icon";
import GoogleMark from "./google-mark";

type Variant =
  "utility" | "hero" | "footer" | "score" | "summary" | "crew" | "home-hero";

export default function GoogleRating({
  variant = "footer",
  brandMark = false,
}: {
  variant?: Variant;
  brandMark?: boolean;
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

  if (variant === "home-hero") {
    return (
      <div className="home-rating">
        <GoogleMark />
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="home-rating__score"
          >
            {data && <Stars rating={data.rating} />}
            <b>{score ?? "Google reviews"}</b>
            {count && <span>({count} reviews)</span>}
          </a>
          <small>on {attribution}</small>
          {attributionLinks}
        </div>
      </div>
    );
  }
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
          {variant !== "footer" && <Stars rating={data.rating} />}
        </>
      )}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {count ? `${count} reviews on ` : "Read reviews on "}
        {attribution}
      </a>
      {attributionLinks}
      {brandMark && <GoogleMark />}
    </span>
  );
}
