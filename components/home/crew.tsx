import Stagger from "@/components/stagger";
import Link from "next/link";
import GoogleRating from "../google-rating";

export default function HomeCrew() {
  return (
    <section className="crew">
      <Stagger className="wrap grid" pattern="alternate" interval={0.12}>
        <figure>
