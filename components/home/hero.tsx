import { business } from "@/lib/business";
import GoogleRating from "../google-rating";
import Entrance from "../entrance";
import Fascia from "./fascia";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <div className="shot">
        <div className="wrap">
          <Entrance className="card" pattern="fade" waitForFonts>
            <div className="where">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Locally owned on Duke Street, {business.city}
            </div>
            <h1 id="home-hero-title">Expert auto care you can count on.</h1>
            <p className="lede">
              Fast, reliable, and always affordable. From oil changes to major
              repairs, our certified technicians get you back on the road.
            </p>
            <div className="acts">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-y"
              >
                Book an appointment
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
