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

