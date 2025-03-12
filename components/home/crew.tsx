import Stagger from "@/components/stagger";
import Link from "next/link";
import GoogleRating from "../google-rating";

export default function HomeCrew() {
  return (
    <section className="crew">
      <Stagger className="wrap grid" pattern="alternate" interval={0.12}>
        <figure>
          <div
            className="ph"
            role="img"
            aria-label="The Duke Auto team standing outside the service bays"
          ></div>
          <figcaption>The Duke Auto team, outside the service bays.</figcaption>
        </figure>
        <div>
          <h2>Meet the people who'll look after your car.</h2>
          <p className="lead">
