import type { Metadata } from "next";
import { business } from "@/lib/business";
import ReviewsContent from "@/components/reviews/reviews-content";
import BookingCta from "@/components/home/booking-cta";
import HomeAwards from "@/components/home/awards";
import PageHeader from "@/components/page-header";
import "./reviews.css";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Explore customer feedback and find ${business.name}'s Google reviews in ${business.city}, ${business.region}.`,
};

export default function ReviewsPage() {
  return (
    <div className="reviews-page">
      <PageHeader
        title="Don't Just Take Our Word For It"
        breadcrumb="Reviews"
        description="See why Alexandria drivers trust Duke Auto Repair with a 4.8-Star rating across hundreds of reviews."
        image="/images/home/keys.jpg"
        compact
      />
      <ReviewsContent />
      <HomeAwards />
      <BookingCta />
    </div>
  );
}
