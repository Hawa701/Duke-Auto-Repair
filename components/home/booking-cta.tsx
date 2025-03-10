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
        <div>
          <h2>Ready to book your car service?</h2>
          <p>
            Book online to arrange your visit, or call and talk to our
            front desk.
          </p>
        </div>
        <div className="act">
          <a
            href={business.bookingUrl}
            target="_blank"
