import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Icon from "@/components/icon";
import { business, withBookingPopup } from "@/lib/business";
import "./coupons.css";

// Title, description, H1 and header alt text: Master SEO Blueprint, section 1.
export const metadata: Metadata = {
  title: {
    absolute: "Auto Repair Deals & Offers in Alexandria, VA | Duke Auto",
  },
  description:
    "Save on your next visit with auto repair deals in Alexandria, VA. Get $25 to $50 off first-time service or $5 off VA state safety inspections.",
};

// Offers: Content & UX Guide (revised), section 5. Set `expires` (e.g.
// "December 31, 2026") on an offer to print its expiration date.
const coupons: {
  id: string;
  value: string;
  title: string;
  detail: string;
  expires?: string;
  /** Extra fine print for this offer, printed before the standard lines. */
  terms?: string;
  /** "holiday": red seasonal styling (client request for the winter deals). */
  theme?: "holiday";
  /** Shopgenie tracking link for this offer's booking button. */
  bookingUrl: string;
}[] = [
  // Winter offers (client's updated coupon copy), shown first and in red.
  // Get by December 30, 2026; valid through February 27, 2027. After that,
  // remove the two winter deals and update or restyle the other two.
  {
    id: "winter-safety",
    value: "$49.95",
    title: "Winter Safety Check",
    detail:
      "Battery & charging system test, coolant freeze protection test, brake & tire inspection, wheel alignment check, heating/defrost check, wipers/lights/belts/hoses check, tire rotation & balance, and complete Digital Vehicle Inspection (DVI). Save $40.00 (regularly $89.95). Get this deal by December 30, 2026.",
    expires: "February 27, 2027",
    terms: "Inspection, rotation & balance package; oil change not included.",
    theme: "holiday",
    bookingUrl: "https://booking.shopgenie.io/?r=23lpk4",
  },
  {
    id: "winter-package",
    value: "$99.99",
    title: "Complete Winter Package",
    detail:
      "Everything in the Winter Safety Package, PLUS full synthetic oil & filter change (up to 5 quarts), tire rotation, fluid level check & basic top-off, and engine/cabin air filter inspection. Save $30.00 (regularly $129.99). Get this deal by December 30, 2026.",
    expires: "February 27, 2027",
    terms:
      "Up to 5 quarts full synthetic oil; extra quarts/specialty filters additional.",
    theme: "holiday",
    bookingUrl: "https://booking.shopgenie.io/?r=23lfk8",
  },
  {
    id: "inspection",
    value: "$5 Off",
    title: "VA State Emissions & Safety Inspection",
    detail:
      "Save $5.00 on your Virginia State Emissions & Safety Inspection combo. Beat the end-of-the-month rush—walk-ins welcome Monday–Saturday!",
    expires: "February 27, 2027",
    terms: "Applies to combined VA Safety & Emissions inspection visit.",
    theme: "holiday",
    bookingUrl: "https://booking.shopgenie.io/?r=23ldju",
  },
  {
    id: "wheel-alignment",
    value: "$60 Off",
    title: "Wheel Alignment Special",
    detail:
      "Save $60 on a precision 4-wheel alignment for most cars. Protect your tires and improve winter road handling.",
    expires: "February 27, 2027",
    terms: "Valid for most passenger vehicles.",
    theme: "holiday",
    // No tracking link for this offer yet: the main booking link.
    bookingUrl: business.bookingUrl,
  },
  {
    id: "first-visit-25",
    value: "$25 Off",
    title: "First Visit",
    detail: "Minimum $150 service.",
    bookingUrl: "https://booking.shopgenie.io/?r=23ldi4",
  },
  {
    id: "first-visit-50",
    value: "$50 Off",
    title: "First Visit",
    detail: "Minimum $500 service.",
    bookingUrl: "https://booking.shopgenie.io/?r=23ldj4",
  },
  {
    id: "honda",
    value: "$25 Off",
    title: "Honda Maintenance",
    detail: "With an expiration date.",
    bookingUrl: "https://booking.shopgenie.io/?r=23ldjv",
  },
];

