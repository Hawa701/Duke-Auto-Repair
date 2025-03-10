import Link from "next/link";
import { business } from "@/lib/business";

export default function BookingCta({
  servicesHref = "/services",
}: {
  servicesHref?: string;
}) {
  return (
    <section className="cta cta--final">
      <div className="wrap">
