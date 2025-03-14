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
