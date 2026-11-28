import Link from "next/link";
import Entrance from "../entrance";
import Icon from "../icon";
import ServiceCarousel from "./service-carousel";
import { services } from "@/lib/services";

const blurbs: Record<string, string> = {
  "brake-repair": "Safe stopping power you can rely on.",
  "check-engine-light-diagnostic": "Find out exactly why the light is on.",
  "virginia-safety-inspection": "Annual Virginia safety inspections, walk-ins welcome.",
  "virginia-emissions-inspection": "Certified emissions tests sent straight to the DMV.",
  "wheel-alignment": "Computerized four-wheel laser alignment.",
  "oil-change-service": "Oil changes and factory scheduled service.",
  "car-ac-repair": "Ice-cold A/C, leak detection, and recharges.",
  "cooling-system-repair": "Stop overheating and coolant leaks.",
  "car-heater-repair": "Warm cabin and a clear windshield.",
  "suspension-repair": "Confident handling, a comfortable ride.",
  "transmission-repair": "Honest diagnostics before any rebuild.",
  "tire-shop-alexandria": "New tires, flat repairs, and balancing.",
  "mechanic-alexandria-va": "ASE-certified mechanics for every repair.",
  "auto-electrical-repair": "Batteries, alternators, starters, wiring.",
  "auto-tune-up": "Restore lost power and fuel economy.",
};

export default function HomeServices() {
  const cards = services.map((service) => ({
    id: service.slug,
    title: service.name,
    description: blurbs[service.slug] ?? service.summary,
    image: service.image,
    imagePosition: service.imagePosition,
    href: service.href,
  }));
  return (
    <section className="xsvc" aria-labelledby="home-services-title">
      <div className="wrap">
        <Entrance className="intro" pattern="left" inView>
          <p className="eyebrow">
            <i aria-hidden="true" />
            Our services
          </p>
          <h2 id="home-services-title">
            Full-Service Auto Repair for All Makes &amp; Models
          </h2>
          <p>
            From routine maintenance to complex repairs, Duke Auto Repair &amp;
            Service provides reliable, high-quality service using the latest
            diagnostic technology.
          </p>
          <Link className="xbtn" href="/services">
            View all services
            <Icon name="arrow" />
          </Link>
        </Entrance>
        <ServiceCarousel cards={cards} />
      </div>
    </section>
  );
}
