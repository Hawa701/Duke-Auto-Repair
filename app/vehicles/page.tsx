import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import BookingCta from "@/components/home/booking-cta";
import Icon from "@/components/icon";
import { business } from "@/lib/business";
import { vehicles } from "@/lib/vehicles";
import "./vehicles.css";

export const metadata: Metadata = {
  title: "Vehicles We Service",
  description: `ASE-certified repair and maintenance for ${vehicles
    .map((vehicle) => vehicle.name)
    .join(", ")} in ${business.city}, ${business.region}.`,
};

export default function VehiclesPage() {
  return (
    <div className="vehicles-page">
      <PageHeader
        title="Vehicles We Service"
        breadcrumb="Vehicles we service"
        description="Dealership-level care for domestic and Asian imports, without the dealership markup."
        image="/images/about/shop-floor.jpg"
        compact
      />
      <section className="vehicle-index" aria-labelledby="vehicle-index-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="vehicle-index-title">Choose your make.</h2>
            <p>
              Our ASE-certified mechanics service the full lineup of every
              brand below, from factory scheduled maintenance to complex
              engine diagnostics.
            </p>
          </div>
          <ul className="vehicle-grid">
            {vehicles.map((vehicle) => (
              <li key={vehicle.slug}>
                <Link href={vehicle.href}>
                  <b>{vehicle.name}</b>
                  <span>{vehicle.models.join(" · ")}</span>
                  <em>
                    {vehicle.name} repair
                    <Icon name="arrow" />
                  </em>
                </Link>
              </li>
            ))}
          </ul>
          <p className="vehicle-note">
            Don&apos;t see your make? Call us at{" "}
            <a href={business.phoneHref}>{business.phoneLocal}</a> or{" "}
            <Link href="/quote">request a quote</Link>. We work on most cars,
            SUVs and light trucks.
          </p>
        </div>
      </section>
      <BookingCta />
    </div>
  );
}
