import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import Icon from "./icon";
import "./trust-badges.css";

// Trust badges in the order set by the Content & UX Guide (revised),
// section 1: the awards first, then ASE, the Virginia station and the
// warranty. Seals use the artwork supplied by the shop.
type Badge = {
  id: string;
  top: string;
  /** Brand name shown after `top` in its own spelling, not bold or capitals. */
  brand?: string;
  bottom: string;
  /** The award badges link to the awards section on the home page. */
  href?: string;
} & (
  | { image: string; icon?: never }
  | { icon: "check"; image?: never }
);

const badges: Badge[] = [
  {
    id: "carfax",
    image: "/images/awards/carfax-badge-2025.png",
    top: "CARFAX Top-Rated",
    bottom: "Service Center 2022–2025",
    href: "/#awards",
  },
  {
    id: "businessrate",
    image: "/images/badges/businessrate-2025.png",
    top: "Best of",
    brand: "BusinessRate",
    bottom: "2025 Winner",
    href: "/#awards",
  },
  {
    id: "ase",
    image: "/images/badges/ase.png",
    top: "ASE",
    bottom: "Certified Mechanics",
  },
  {
    id: "va",
    image: "/images/badges/va-safety-inspection.png",
    top: "Virginia",
    bottom: "State Inspection Station",
  },
  {
    id: "warranty",
    icon: "check",
    top: business.warranty.short,
    bottom: "Warranty",
  },
];

export default function TrustBadges({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  return (
    <ul
      className={`trust-badges trust-badges--${tone}`}
      aria-label="Certifications and warranty"
    >
      {badges.map((badge) => {
        const content = (
          <>
            <span className="tb-seal" aria-hidden="true">
              {badge.image ? (
                <Image src={badge.image} alt="" width={96} height={96} />
              ) : (
                <Icon name={badge.icon ?? "check"} />
              )}
            </span>
            <span className="tb-text">
              <b>
                {badge.top}
                {badge.brand && (
                  <>
                    {" "}
                    <span className="tb-brand">{badge.brand}</span>
                  </>
                )}
              </b>
              <span>{badge.bottom}</span>
            </span>
          </>
        );
        return (
          <li key={badge.id} className={`tb tb--${badge.id}`}>
            {badge.href ? (
              <Link className="tb-link" href={badge.href}>
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
