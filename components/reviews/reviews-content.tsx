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
