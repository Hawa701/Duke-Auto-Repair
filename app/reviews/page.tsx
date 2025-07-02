import type { Metadata } from "next";
import { business } from "@/lib/business";
import ReviewsContent from "@/components/reviews/reviews-content";
import BookingCta from "@/components/home/booking-cta";
import PageHeader from "@/components/page-header";
import "./reviews.css";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Explore customer feedback and find ${business.name}'s Google reviews in ${business.city}, ${business.region}.`,
};

