import { business } from "@/lib/business";
import { customerReviews } from "@/lib/customer-reviews";
import GoogleRating from "../google-rating";

export default function HomeReviews() {
  const testimonial = customerReviews[0];
  return (
    <section className="rev" aria-label="Customer reviews">
      <div className="wrap grid">
        <div className="score">
          <GoogleRating variant="score" />
        </div>
