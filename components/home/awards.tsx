import { business } from "@/lib/business";
import Stagger from "@/components/stagger";
import Link from "next/link";
import GoogleRating from "../google-rating";

export default function HomeAwards() {
  return (
    <section className="awards">
      <div className="wrap grid">
        <div className="copy">
          <h2>Top rated three years running.</h2>
          <p>
            Duke Auto was named a top-rated auto repair shop in 2023, 2024 and
            2025. Thank you to the drivers who keep coming back, and to the
            friends they send our way.
          </p>
          <div className="rating">
            <GoogleRating variant="utility" />
          </div>
          <div className="acts">
            <a
              href={business.bookingUrl}
