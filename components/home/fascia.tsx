import Link from "next/link";
import ServiceIcon from "../service-icon";

const services = [
  {
    title: "Engine Repair",
    description: "Diagnostics & repair",
    href: "/check-engine-light-diagnostic",
    icon: "diagnostics",
  },
  {
    title: "Brakes",
    description: "Pads, rotors & more",
    href: "/brake-repair",
    icon: "brakes",
  },
  {
    title: "Oil Change",
    description: "Quick & professional",
    href: "/oil-change-service",
    icon: "oil",
  },
  {
    title: "Wheel Alignment",
    description: "Laser wheel alignment",
    href: "/wheel-alignment",
    icon: "alignment",
  },
  {
    title: "State Inspections",
    description: "Walk-ins welcome",
    href: "/virginia-safety-inspection",
    icon: "inspection",
  },
  {
    title: "A/C Repair",
    description: "Diagnostics & recharge",
    href: "/car-ac-repair",
    icon: "air-conditioning",
  },
] as const;

export default function Fascia() {
  return (
    <section className="xstrip" aria-label="Explore our auto repair services">
      <div className="wrap home-strip-viewport">
        <div className="home-strip-track">
          {[false, true].map((duplicate) => (
            <ul
              className="home-strip-group"
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
            >
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    className="sv"
                    href={service.href}
                    tabIndex={duplicate ? -1 : undefined}
                  >
                    <ServiceIcon name={service.icon} />
                    <span>
                      <b>{service.title}</b>
                      <small>{service.description}</small>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
