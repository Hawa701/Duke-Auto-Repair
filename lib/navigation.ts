export type NavItem = {
  href: string;
  label: string;
  /** Shorter label used only on narrow desktop widths (800–1024px). */
  short?: string;
  /** Items with a menu open a mega-menu dropdown. */
  menu?: "services" | "vehicles";
};

// Main navigation, per Part 2 of the Web Audit overview.
export const mainNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services", menu: "services" },
  { href: "/vehicles", label: "Vehicles We Service", short: "Vehicles", menu: "vehicles" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/promotions", label: "Coupons" },
  { href: "/car-tips", label: "Car Tips" },
  // Added at the client's request: the quote page was only in the footer.
  { href: "/quote", label: "Get a Quote", short: "Quote" },
];
