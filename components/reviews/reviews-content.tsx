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
