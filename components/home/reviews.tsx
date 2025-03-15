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
        <div className="quote">
          <blockquote>&ldquo;{testimonial.text}&rdquo;</blockquote>
          <div className="who">
            <span className="avatar" aria-hidden="true">
              {testimonial.initials}
            </span>
            <div>
              <b>{testimonial.name}</b>
              <small>Google review &middot; {testimonial.service}</small>
            </div>
            <a
              className="review-source"
