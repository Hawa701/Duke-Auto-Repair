"use client";

import Entrance from "@/components/entrance";

import { useState, type CSSProperties } from "react";
import { business } from "@/lib/business";
import { dummyReviews } from "@/lib/dummy-reviews";
import {
  customerReviews,
  reviewTopics,
  ratingDistribution,
  type ReviewTopic,
} from "@/lib/customer-reviews";
import GoogleRating from "../google-rating";
import { Stars } from "../icon";

type Filter = "all" | ReviewTopic;

function GoogleMark() {
  return (
    <svg className="g" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export default function ReviewsContent() {
  const [filter, setFilter] = useState<Filter>("all");
  const reviewsUrl = business.googleReviewsUrl;
  const featuredReview = customerReviews[0];
  const visibleReviews = dummyReviews.filter(
    (review) => filter === "all" || review.topics.includes(filter),
  );

  return (
    <>
      <section className="revpage" aria-label="Customer feedback">
        <div className="wrap">
          <div className="summary" aria-label="Google review summary">
            <div className="sc">
              <GoogleRating variant="summary" />
            </div>
            <div
              className="rating-breakdown"
              role="img"
              aria-label="Rating distribution from the supplied Google listing screenshot. Most reviews are five stars."
            >
              {ratingDistribution.map(({ stars, width }) => (
                <div
                  className="rating-breakdown__row"
                  key={stars}
                  aria-hidden="true"
                >
                  <span>{stars}</span>
                  <span className="rating-breakdown__track">
                    <span
                      style={{ "--bar-width": `${width}%` } as CSSProperties}
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className="acts">
              <a
                href={reviewsUrl}
                className="btn btn-n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
                Write a review
              </a>
              <a
                href={reviewsUrl}
                className="btn btn-gl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleMark />
                Read us on Google
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
          <Entrance className="hlq" pattern="left" inView>
            <div className="q" aria-hidden="true">
              &ldquo;
            </div>
            <div>
              <blockquote>{featuredReview.text}</blockquote>
              <div className="who">
                <Stars rating={featuredReview.rating} />
                <span>
                  <b>{featuredReview.name}</b> &middot; Google review
                </span>
              </div>
            </div>
          </Entrance>
          <div className="rv-head" id="customer-reviews">
            <h2>What drivers are saying.</h2>
          </div>
          <p className="topic-source">Popular topics on Google</p>
          <div className="rv-tools">
            <div
              className="chips"
              role="group"
              aria-label="Google review topics"
            >
              <button
                type="button"
                aria-pressed={filter === "all"}
