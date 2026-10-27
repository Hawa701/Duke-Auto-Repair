"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { customerReviews } from "@/lib/customer-reviews";
import { useGoogleRating } from "./google-reviews-provider";
import GoogleMark from "./google-mark";
import Icon, { Stars } from "./icon";

/**
 * Google reviews slider for the bottom of service and vehicle pages. Shows
 * real reviews from lib/customer-reviews.ts; add more there and the slider
 * controls appear automatically.
 */
export default function ReviewsSlider() {
  const data = useGoogleRating();
  const [index, setIndex] = useState(0);
  const review = customerReviews[index];
  const total = customerReviews.length;
  const count = data
    ? new Intl.NumberFormat("en-US").format(data.reviewCount)
    : null;

  return (
    <section className="reviews-slider" aria-labelledby="reviews-slider-title">
      <div className="rs-head">
        <GoogleMark />
        <div>
          <h2 id="reviews-slider-title">Google reviews</h2>
          <p>
            {data && <Stars rating={data.rating} />}
            {data ? (
              <>
                <b>{data.rating.toFixed(1)}</b> from {count} reviews
              </>
            ) : (
              "What Alexandria drivers say"
            )}
          </p>
        </div>
      </div>
      {review && (
        <figure className="rs-slide" aria-live="polite">
          <Stars rating={review.rating} />
          <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
