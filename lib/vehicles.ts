import { business } from "./business";
import { vehicleContent } from "./vehicle-content";
import type { SiloSection } from "./services";

// Vehicle silo pages, from section 4 of the Master Website Content & UX Guide.
// Every brand page follows the same template; only the models change.

type Brand = {
  slug: string;
  name: string;
  /** Models named in the intro paragraph. */
  models: string[];
  newer: string;
  older: string;
  image: string;
  imagePosition: string;
  /**
   * Brands listed in the Master SEO Blueprint (section 3): their own root URL
   * and exact title, description, H1 and image alt. Other brands keep the
   * /vehicles/<slug> URL and the template copy.
   */
  seo?: {
    path: string;
    metaTitle: string;
    metaDescription: string;
    heading: string;
    imageAlt: string;
  };
};

const brands: Brand[] = [
  { slug: "toyota", name: "Toyota", models: ["Camry", "Corolla", "RAV4", "Tacoma"], newer: "Highlander", older: "4Runner", image: "/images/services/toyota-rav4-hybrid.jpg", imagePosition: "center 45%", seo: { path: "toyota-mechanic", metaTitle: "Toyota Mechanic Near Me | Alexandria, VA | Duke Auto Repair", metaDescription: "Looking for a trusted Toyota mechanic near me in Alexandria, VA? Dealership-level service for Camry, RAV4, Tacoma & Prius at flat-rate prices.", heading: "Toyota Repair and Service in Alexandria, VA", imageAlt: "Black Toyota RAV4 Hybrid SUV on a service lift during Toyota repair and hybrid maintenance at Duke Auto Repair in Alexandria, VA" } },
  { slug: "honda", name: "Honda", models: ["Accord", "Civic", "CR-V", "Pilot"], newer: "HR-V", older: "Odyssey", image: "/images/shop/honda-on-lift.jpg", imagePosition: "center 40%", seo: { path: "honda-repairs", metaTitle: "Honda Repairs Near Me | Alexandria, VA | Duke Auto Repair", metaDescription: "Need reliable Honda repairs near me in Alexandria, VA? Expert VTEC service, timing belts & AC repairs for Civic, Accord & CR-V with free 5-mile shuttle.", heading: "Honda Repair and Service in Alexandria, VA", imageAlt: "ASE technician performing Honda repairs in Alexandria VA" } },
  { slug: "hyundai", name: "Hyundai", models: ["Elantra", "Sonata", "Tucson", "Santa Fe"], newer: "Kona", older: "Palisade", image: "/images/shop/hyundai-under-hood.jpg", imagePosition: "center 45%", seo: { path: "hyundai-maintenance", metaTitle: "Hyundai Maintenance Near Me | Alexandria, VA | Duke Auto", metaDescription: "Your dealership alternative for Hyundai maintenance near me in Alexandria, VA. Expert GDI carbon cleanings & diagnostics for Elantra, Sonata & Tucson.", heading: "Hyundai Repair and Service in Alexandria, VA", imageAlt: "Technician performing Hyundai maintenance and GDI diagnostics in Alexandria VA" } },
  { slug: "nissan", name: "Nissan", models: ["Altima", "Sentra", "Rogue", "Pathfinder"], newer: "Murano", older: "Titan", image: "/images/shop/nissan-in-bay.jpg", imagePosition: "center 55%", seo: { path: "nissan-repair-shop", metaTitle: "Independent Nissan Repair Shop in Alexandria, VA | Duke Auto", metaDescription: "Skip the dealership at our independent Nissan repair shop in Alexandria, VA. Specialized CVT fluid exchanges & diagnostics for Altima, Rogue & Pathfinder.", heading: "Nissan Repair and Service in Alexandria, VA", imageAlt: "Nissan repair shop technician servicing CVT transmission in Alexandria VA" } },
  { slug: "lexus", name: "Lexus", models: ["RX", "ES", "NX", "IS"], newer: "GX", older: "LS", image: "/images/shop/lexus-on-lift.jpg", imagePosition: "center 45%", seo: { path: "lexus-mechanic", metaTitle: "Lexus Mechanic Near Me | Alexandria, VA | Duke Auto Repair", metaDescription: "Looking for an independent Lexus mechanic near me in Alexandria, VA? Hybrid drive checks, V6 timing belts & precision brake care at flat-rate prices.", heading: "Lexus Repair and Service in Alexandria, VA", imageAlt: "Lexus mechanic near me inspecting hybrid vehicle in Alexandria VA" } },
  { slug: "bmw", name: "BMW", models: ["3 Series", "5 Series", "X3", "X5"], newer: "X7", older: "7 Series", image: "/images/shop/bmw-in-bay.jpg", imagePosition: "center 50%", seo: { path: "bmw-service", metaTitle: "Independent BMW Repair & Service in Alexandria, VA | Duke", metaDescription: "Skip the dealership waitlist with expert BMW repair in Alexandria, VA. CBS maintenance, VANOS diagnostics & Liqui Moly oil changes for 3/5 Series & X5.", heading: "BMW Repair and Service in Alexandria, VA", imageAlt: "European specialist performing BMW repair and diagnostics in Alexandria VA" } },
  { slug: "mercedes-benz", name: "Mercedes-Benz", models: ["C-Class", "E-Class", "GLC", "GLE"], newer: "GLS", older: "S-Class", image: "/images/shop/mercedes-in-bay.jpg", imagePosition: "center 55%", seo: { path: "mercedes-service", metaTitle: "Independent Mercedes Service in Alexandria, VA | Duke Auto", metaDescription: "Dealership-level Mercedes service in Alexandria, VA without the markup. Routine Service A & B, AIRMATIC suspension & ASSYST PLUS diagnostics.", heading: "Mercedes-Benz Repair and Service in Alexandria, VA", imageAlt: "Technician performing Mercedes Service A and B maintenance in Alexandria VA" } },
  { slug: "audi", name: "Audi", models: ["A4", "A6", "Q5", "Q7"], newer: "Q3", older: "A8", image: "/images/about/alignment-tech.jpg", imagePosition: "65% 50%", seo: { path: "audi-repair", metaTitle: "Audi & European Auto Repair Shop Near Me | Alexandria, VA", metaDescription: "Trusted Audi & European auto repair shop near me in Alexandria, VA. Quattro diagnostics, DSG transmission fluid flushes & GDI carbon cleaning.", heading: "Audi Repair and Service in Alexandria, VA", imageAlt: "Technician at European auto repair shop servicing Audi Quattro in Alexandria VA" } },
  { slug: "ford", name: "Ford", models: ["F-150", "Explorer", "Escape", "Mustang"], newer: "Bronco", older: "Super Duty", image: "/images/about/brake-tech.jpg", imagePosition: "35% 50%", seo: { path: "ford-service", metaTitle: "Ford Service Near Me | F-150 & EcoBoost | Alexandria, VA", metaDescription: "Searching for dependable Ford service near me in Alexandria, VA? Heavy-duty F-150 repairs, EcoBoost diagnostics & Motorcraft parts at flat-rate prices.", heading: "Ford Repair and Service in Alexandria, VA", imageAlt: "Mechanic performing Ford service on truck lift in Alexandria VA" } },
  { slug: "chevrolet", name: "Chevy", models: ["Silverado", "Equinox", "Malibu", "Tahoe"], newer: "Traverse", older: "Colorado", image: "/images/about/state-inspection.jpg", imagePosition: "center 55%", seo: { path: "chevy-repair", metaTitle: "Chevy Car Repair Near Me | Alexandria, VA | Duke Auto Repair", metaDescription: "Trusted Chevy car repair near me in Alexandria, VA. ASE-certified service for Silverado, Equinox & Tahoe using AC Delco OEM parts and full DVI reports.", heading: "Chevrolet Repair and Service in Alexandria, VA", imageAlt: "Chevy car repair technician inspecting Silverado in Alexandria VA" } },
  { slug: "jeep", name: "Jeep", models: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass"], newer: "Gladiator", older: "Renegade", image: "/images/about/exterior-bays.jpg", imagePosition: "center 60%", seo: { path: "jeep-repair-shop", metaTitle: "Jeep Repair Shop in Alexandria, VA | Wrangler & Cherokee", metaDescription: "Heavy-duty Jeep repair shop in Alexandria, VA. Expert front-end suspension, death wobble fixes & Mopar parts for Wrangler and Grand Cherokee.", heading: "Jeep Repair and Service in Alexandria, VA", imageAlt: "Jeep repair shop mechanic inspecting Wrangler suspension in Alexandria VA" } },
];

const listModels = (models: string[]) =>
  models.length > 2
    ? `${models.slice(0, -1).join(", ")}, or ${models[models.length - 1]}`
    : models.join(" or ");

export type Vehicle = Omit<Brand, "seo"> & {
  href: string;
  heading: string;
  metaTitle?: string;
  metaDescription?: string;
  imageAlt: string;
  intro: string;
  sections: SiloSection[];
  banner: string;
};

export const vehicles: Vehicle[] = brands.map(({ seo, ...brand }) => {
  const { name } = brand;
  // Brands in the Vehicle Content guide use its copy; the rest use the template.
  const content = vehicleContent[brand.slug];
  return {
    ...brand,
    slug: seo?.path ?? brand.slug,
    href: seo ? `/${seo.path}` : `/vehicles/${brand.slug}`,
    heading: seo?.heading ?? `${name} Repair & Service in Alexandria, VA`,
    metaTitle: seo?.metaTitle,
    metaDescription: seo?.metaDescription,
    imageAlt: seo?.imageAlt ?? `${name} service at Duke Auto Repair in Alexandria, VA`,
    intro: content?.intro ?? `At Duke Auto Repair, we provide ${name} owners with the absolute best repairs and maintenance services at competitive prices. We are dedicated to providing exceptional care for your ${listModels(brand.models)} in Alexandria, VA. Trust our ASE-certified mechanics to ensure your ${name}’s optimal performance and legendary reliability.`,
    sections: content?.sections ?? [
      {
        title: `Trustworthy ${name} Auto Repair`,
        body: `We have a complete team of technicians who are exceptionally well-versed in repairing the entire ${name} lineup. From routine factory scheduled maintenance on a newer ${brand.newer} to complex engine diagnostics on an older ${brand.older}, let the team at Duke Auto Repair help you take the best care of your vehicle.`,
      },
      {
        title: `Why Choose Duke Auto Repair For Your ${name}`,
        body: `Our goal is to ensure that every customer is satisfied and receives the high-quality, professional service they expect from a dealership, without the inflated dealership prices. Our mechanics easily perform a massive range of services using high-quality OEM and premium aftermarket parts. When you bring your ${name} to us on Duke Street, we treat it as if it were our own. We work efficiently to minimize your downtime because we know having a dependable vehicle is a priority for our customers.`,
      },
      {
        title: `${name} Service Near Me`,
        body: `To schedule your ${name} service appointment in Alexandria, VA, simply give us a call at ${business.phoneLocal} or book online today. We look forward to serving you at Duke Auto Repair, proudly serving Alexandria and the surrounding areas.`,
      },
    ],
    banner: `Precision Performance – ${name} Care at Duke Auto Repair.`,
  };
});

export const findVehicle = (slug: string) =>
  vehicles.find((item) => item.slug === slug);

/**
 * Blueprint brands, served from the site root (see app/[slug]). Only the 11
 * brands in the Vehicle Content guide are listed; the other makes were removed
 * at the shop's request and their old /vehicles/<brand> URLs redirect to
 * /vehicles/ (public/.htaccess).
 */
export const rootVehicles = vehicles.filter((item) => !item.href.startsWith("/vehicles/"));
