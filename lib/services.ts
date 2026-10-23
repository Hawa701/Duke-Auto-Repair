import type { ServiceIconName } from "@/components/service-icon";

// Copy for every service page comes from the Duke Auto Repair Website Content
// & UX Guide (revised edition, section 3). URL slugs, titles, descriptions and alt text
// come from the Master SEO Blueprint (section 2). Slugs are public URLs:
// public/.htaccess redirects the retired service URLs to them.

export type SiloSection = { title: string; body: string };

export type Service = {
  slug: string;
  href: string;
  /** Menu / card label. */
  name: string;
  /** One-line card description. */
  summary: string;
  icon: ServiceIconName;
  /** Page H1. */
  heading: string;
  /** Exact <title>, meta description and hero image alt from the Master SEO Blueprint. */
  metaTitle: string;
  metaDescription: string;
  imageAlt: string;
  intro: string;
  image: string;
  imagePosition: string;
  sections: SiloSection[];
  banner: string;
  /** Extra shop photos shown under the page copy ("In the shop"). */
  gallery?: { src: string; alt: string }[];
  /** Certification logos for the sidebar (see components/cert-logos). */
  logos?: ("ase" | "va-safety" | "air-check")[];
};

const service = (s: Omit<Service, "href">): Service => ({
  ...s,
  href: `/${s.slug}`,
});

export const services: Service[] = [
  service({
    slug: "brake-repair",
    metaTitle: "Brake Repair & Service in Alexandria, VA | Duke Auto Repair",
    metaDescription:
      "Need reliable brake repair in Alexandria, VA? Our ASE-certified mechanics provide brake pad, rotor & fluid service with Digital Vehicle Inspections.",
    imageAlt: "ASE mechanic performing brake repair and rotor inspection in Alexandria VA",
    name: "Brake Services",
    summary: "Brake inspections with DVI photos, pads, rotors, and ABS.",
    icon: "brakes",
    heading: "Brake Repair and Service in Alexandria, VA",
    intro:
      "Your brakes are responsible for bringing your vehicle to a safe and controlled stop. If you're experiencing any changes in your braking performance—like squeaking, grinding, or a soft pedal—don't ignore them. Contact the ASE-certified professionals at Duke Auto Repair in Alexandria, VA.",
    image: "/images/about/brake-tech.jpg",
    imagePosition: "center 45%",
    gallery: [
      { src: "/images/shop/brake-job-1.jpg", alt: "Duke Auto technician working on a front brake assembly with the wheel removed" },
      { src: "/images/shop/brake-job-2.jpg", alt: "Technician servicing brake components on a vehicle raised on a lift" },
      { src: "/images/shop/brake-caliper.jpg", alt: "Close-up of a technician measuring brake pad wear at the caliper" },
    ],
    sections: [
      {
        title: "Brake Inspections & DVIs",
        body: "The Duke Auto Repair team will perform a Digital Vehicle Inspection (DVI) on all the major components of your vehicle's brake system. We send photos of your brake pad thickness directly to your phone to provide a clear, honest, and transparent evaluation before quoting any work.",
      },
      {
        title: "Brake Pad & Rotor Repairs",
        body: "If you feel a pulsing sensation in the brake pedal, hear a grinding sound, or notice visible brake dust, it is time for a repair. From simple ceramic brake pad changes to full rotor replacements and ABS diagnostics, our technicians have you covered.",
      },
      {
        title: "Brake Service Near Me",
        body: "When your car needs brake service or repairs in Alexandria, VA, there is one locally owned shop that stands out as the best: Duke Auto Repair. We gladly accept appointments online and walk-ins. Visit us at 5220 Duke St, Alexandria, VA 22304.",
      },
    ],
    banner:
      "Stop Safely with Duke Auto Repair – Reliable Brake Service on Duke St.",
  }),
  service({
    slug: "check-engine-light-diagnostic",
    metaTitle: "Check Engine Light Diagnostic Alexandria, VA | Duke Auto",
    metaDescription:
      "Get an accurate check engine light diagnostic in Alexandria, VA. Our ASE-certified experts use OBD-II scanners to pinpoint issues without guesswork.",
    imageAlt: "Technician running check engine light diagnostic scan in Alexandria VA",
    name: "Engine & Diagnostics",
    summary: "Check engine light diagnostics and major engine repair.",
    icon: "diagnostics",
    heading: "Engine Diagnostics and Repair in Alexandria, VA",
    intro:
      "A glowing check engine light is your vehicle's way of asking for help. Don't rely on parts stores that just pull codes and guess at the problem. Trust the ASE-certified diagnostic experts at Duke Auto Repair for accurate, transparent engine repair in Alexandria, VA.",
    image: "/images/about/diagnostics-portrait.jpg",
    imagePosition: "center 40%",
    gallery: [
      { src: "/images/shop/diagnostic-tablet.jpg", alt: "Technician reading diagnostic codes on a scan tablet from the driver's seat" },
      { src: "/images/shop/diagnostic-kit.jpg", alt: "Technician running engine diagnostics with a scan tool kit under the hood" },
    ],
    sections: [
      {
        title: "Check Engine Light Diagnostics",
        body: "Our mechanics use state-of-the-art computerized OBD-II diagnostic equipment to pinpoint the exact root cause of your engine's performance issues. We test the sensors, wiring, and computer modules so you don't waste money replacing parts that aren't broken.",
      },
      {
        title: "Major Engine Repairs",
        body: "From minor coolant leaks and overheating issues to complete engine rebuilds and replacements, our highly trained technicians are equipped to handle complex internal engine repairs for both domestic and Asian imported vehicles.",
      },
      {
        title: "Auto Diagnostics Near Me",
        body: "When you need accurate engine diagnostics in Alexandria, VA, look no further than Duke Auto Repair. Stop by 5220 Duke St, Alexandria, VA 22304, and let our experts find the problem right the first time.",
      },
    ],
    banner:
      "Keep Your Engine Running Strong – Expert Diagnostics at Duke Auto Repair.",
  }),
  service({
    slug: "emissions-test",
    logos: ["va-safety", "air-check"],
    metaTitle: "VA State Inspection & Emissions Test Alexandria, VA | Duke",
    metaDescription:
      "Walk-in Virginia safety inspection and emissions test in Alexandria, VA. Open Mon–Fri 8AM–6PM and Sat 8:30AM–4PM at 5220 Duke St. Drive in today!",
    imageAlt: "Certified Virginia safety inspection and emissions test station in Alexandria VA",
    name: "State Inspections & Emissions",
    summary: "Official Virginia safety and emissions inspections.",
    icon: "inspection",
    heading: "Virginia State Inspections and Emissions in Alexandria, VA",
    intro:
      "Is your vehicle's registration up for renewal? Duke Auto Repair is a certified, official Virginia State Safety and Emissions Inspection station. We provide fast, honest, and efficient inspections to keep Alexandria drivers (including 22304 and 22312 zip codes) legally and safely on the road.",
    image: "/images/about/state-inspection.jpg",
    imagePosition: "center 55%",
    sections: [
      {
        title: "Virginia Safety Inspections",
        body: "Our certified inspectors follow strict Virginia State Police guidelines, meticulously checking your brakes, headlights, steering, suspension, and exhaust systems. We prioritize speed and efficiency. Walk-ins are always welcome during our standard operating hours, and we explicitly offer extended Saturday Inspection hours from 8:30 AM to 4:00 PM for your convenience.",
      },
      {
        title: "Emissions Testing",
        body: "We are fully equipped to perform Virginia emissions testing to ensure your vehicle meets state environmental standards. If your vehicle fails an emissions test, our experienced technicians can diagnose the issue and recommend the necessary repairs, whether it’s a faulty oxygen sensor, catalytic converter, or another emissions-related component.",
      },
      {
        title: "Failed Inspection Repairs",
        body: "If your vehicle fails its safety or emissions inspection, you aren't left in the dark. Our team will clearly explain exactly why it failed and provide a transparent, competitively priced quote for the necessary repairs to get your sticker.",
      },
    ],
    banner: "Fast & Honest Virginia State Inspections – Walk-ins Welcome!",
  }),
  service({
    slug: "wheel-alignment",
    metaTitle: "Wheel Alignment Shops Near Me | Alexandria, VA | Duke Auto",
    metaDescription:
      "Searching for wheel alignment shops near me in Alexandria, VA? Duke Auto Repair offers precision laser wheel alignments, tire sales & balancing.",
    imageAlt: "Vehicle on precision laser alignment rack at wheel alignment shop in Alexandria VA",
    name: "Tire & Wheel Services",
    summary: "Precision laser wheel alignment.",
    icon: "tire",
    heading: "Tire Sales and Wheel Alignment in Alexandria, VA",
    intro:
      "Your tires are the only point of contact between your vehicle and the road. Uneven wear, vibrations, or a steering wheel that pulls to one side require immediate attention. Duke Auto Repair provides comprehensive tire sales, mounting, and laser alignments.",
    image: "/images/about/alignment-rig.jpg",
    imagePosition: "center 50%",
    sections: [
      {
        title: "Laser Wheel Alignment",
        body: "Potholes and curbs can easily knock your vehicle out of alignment. We use precision laser alignment technology to adjust your vehicle's suspension back to factory specifications, preventing premature tire wear and improving fuel efficiency.",
      },
      {
        title: "Tire Shop Near Me",
        body: "When you need new tires, flat repairs, or a precise wheel alignment in Alexandria, VA, Duke Auto Repair is the ultimate local choice. Visit our tire experts at 5220 Duke St, Alexandria, VA 22304.",
      },
    ],
    banner:
      "Maximize Your Tire Lifespan – Precision Alignments at Duke Auto Repair.",
  }),
  service({
    slug: "oil-change-service",
    metaTitle: "Oil Change Service Near Me | Alexandria, VA | Duke Auto",
    metaDescription:
      "Looking for an oil change service near me in Alexandria, VA? Every full-synthetic oil change at Duke Auto includes a complimentary Digital Vehicle Inspection.",
    imageAlt: "Mechanic performing full synthetic oil change service in Alexandria VA",
    name: "General Maintenance & Oil Changes",
    summary: "Full-synthetic oil changes with a free DVI, factory maintenance.",
    icon: "oil",
    heading: "Oil Changes and Preventative Maintenance in Alexandria, VA",
    intro:
      "The absolute best way to keep your vehicle running past 200,000 miles is strict adherence to factory preventative maintenance. While quick-lube chains rush you in and out, Duke Auto Repair takes the time to perform a thorough health check with every oil change.",
    image: "/images/shop/oil-check.jpg",
    imagePosition: "center 45%",
    gallery: [
      { src: "/images/shop/oil-check-2.jpg", alt: "Two Duke Auto technicians checking under the hood during an oil service" },
      { src: "/images/shop/oil-check-3.jpg", alt: "Technician checking engine fluids with a shop rag in hand" },
      { src: "/images/shop/battery-test.jpg", alt: "Technician testing the battery as part of a vehicle inspection" },
    ],
    sections: [
      {
        title: "Full-Synthetic Oil Changes & DVI",
        body: "We use premium full-synthetic and conventional motor oils tailored specifically to your engine's requirements. Every single oil change at Duke Auto Repair includes a complimentary Digital Vehicle Inspection (DVI). Our mechanics will text you photos of your tire tread, brake pads, and suspension components so you have a complete health profile of your vehicle.",
      },
      {
        title: "Factory Scheduled Maintenance",
        body: "Don't pay dealership prices for your 30k, 60k, 90k, or 120k factory maintenance milestones. Our ASE mechanics perform the exact same comprehensive services, fluid flushes, and inspections required to keep your warranty fully intact.",
      },
      {
        title: "Oil Change Near Me",
        body: "Looking for a trustworthy oil change in Alexandria, VA that includes a real mechanic's inspection? Look no further than Duke Auto Repair. Schedule your maintenance today at 5220 Duke St.",
      },
    ],
    banner: "Protect Your Engine – Book Your Preventative Maintenance Today.",
  }),
  service({
    slug: "car-ac-repair",
    metaTitle: "Car AC Repair & Heating Service Alexandria, VA | Duke Auto",
    metaDescription:
      "Fast, reliable car AC repair in Alexandria, VA. Our technicians perform UV leak detection, Freon recharges & heater core repairs to keep you comfortable.",
    imageAlt: "Technician using manifold gauges for car AC repair in Alexandria VA",
    name: "AC & Heating Repair",
    summary: "AC diagnostics, leak detection, and Freon recharge.",
    icon: "air-conditioning",
    heading: "Auto Air Conditioning and Heating Repair in Alexandria, VA",
    intro:
      "Don't suffer through a humid Virginia summer with a broken AC, or freeze in the winter with a failing heater. If your vents are blowing warm air or producing strange smells, the climate control experts at Duke Auto Repair can restore your cabin comfort.",
    image: "/images/shop/ac-machine.jpg",
    imagePosition: "center 55%",
    sections: [
      {
        title: "AC Diagnostics & Leak Detection",
        body: "Auto AC systems are sealed; if you are low on Freon, you have a leak. We utilize advanced UV dye and pressure-testing equipment to find microscopic leaks in your lines, condenser, or evaporator core so we can fix the root cause.",
      },
      {
        title: "Freon Recharge Service",
        body: "Once the integrity of your AC system is confirmed, our technicians will evacuate the old refrigerant, vacuum the system to remove harmful moisture, and recharge it with the exact amount of factory-specified Freon to restore ice-cold airflow.",
      },
      {
        title: "Auto AC Repair Near Me",
        body: "When you need fast and reliable air conditioning repair in Alexandria, VA, Duke Auto Repair is the cool choice. Visit us at 5220 Duke St, Alexandria, VA 22304 to get comfortable again.",
      },
    ],
    banner: "Beat the Heat – Expert Auto AC Repair at Duke Auto Repair.",
  }),
  service({
    slug: "suspension-repair",
    metaTitle: "Suspension Repair & Steering Service Alexandria, VA | Duke",
    metaDescription:
      "Smooth out your ride with expert suspension repair in Alexandria, VA. We replace worn shocks, struts, ball joints & control arms at flat-rate prices.",
    imageAlt: "Mechanic inspecting shocks and struts during suspension repair in Alexandria VA",
    name: "Suspension & Steering",
    summary: "Shock and strut replacement.",
    icon: "suspension",
    heading: "Steering and Suspension Repair in Alexandria, VA",
    intro:
      "Alexandria roads and winter potholes can wreak havoc on your vehicle's undercarriage. If you experience excessive bouncing over bumps, a clunking noise when turning, or a wandering steering wheel, your suspension components require immediate attention.",
    image: "/images/shop/suspension-wheel.jpg",
    imagePosition: "center 50%",
    sections: [
      {
        title: "Shock & Strut Replacement",
        body: "Shocks and struts do more than provide a comfortable ride; they keep your tires planted firmly on the road for safe braking. We inspect for leaking fluid and worn mounts, replacing compromised components to restore your vehicle's factory handling.",
      },
      {
        title: "Suspension Repair Near Me",
        body: "For a smooth and safe ride in Alexandria, VA, trust the suspension experts at Duke Auto Repair. Let our ASE-certified mechanics inspect your steering today at 5220 Duke St.",
      },
    ],
    banner: "Restore Your Smooth Ride – Professional Suspension Repair.",
  }),
  service({
    slug: "transmission-repair",
    metaTitle: "Transmission Repair & Fluid Flush Alexandria, VA | Duke",
    metaDescription:
      "Honest transmission repair and fluid exchanges in Alexandria, VA. Our ASE-certified mechanics diagnose slipping gears, clutches & drivetrains.",
    imageAlt: "Technician performing transmission repair and fluid service in Alexandria VA",
    name: "Transmission & Drivetrain",
    summary: "Transmission diagnostics, fluid flushes, and major repair.",
    icon: "transmission",
    heading: "Transmission Repair and Service in Alexandria, VA",
    intro:
      "Your transmission is the most complex mechanical component in your vehicle. If you are experiencing slipping gears, delayed engagement, harsh shifting, or a burning smell, you need expert intervention immediately from the team at Duke Auto Repair.",
    image: "/images/shop/undercarriage-lift.jpg",
    imagePosition: "center 45%",
    sections: [
      {
        title: "Transmission Diagnostics",
        body: "Transmission issues cause anxiety, but many problems are minor. Before assuming you need a costly rebuild, our technicians perform computerized diagnostics to check for faulty solenoids, sensors, or low fluid levels causing the poor shifting.",
      },
      {
        title: "Transmission Fluid Flushes",
        body: "Old, burnt transmission fluid is the leading cause of premature failure. We offer professional transmission fluid exchanges to remove the degraded fluid and metal shavings, replacing it with fresh, high-quality fluid to protect the gears.",
      },
      {
        title: "Major Transmission Repair",
        body: "Should your vehicle require a complete transmission replacement or rebuild, our team will walk you through the itemized estimate.",
      },
      {
        title: "Transmission Repair Near Me",
        body: "When you need honest transmission diagnostics and repair in Alexandria, VA, locals trust Duke Auto Repair. Don't wait until it breaks—visit us at 5220 Duke St, Alexandria, VA 22304.",
      },
    ],
    banner: "Honest Transmission Diagnostics – Stop By Duke Auto Repair.",
  }),
  // Sections 3.9 to 3.12 of the revised Content & UX Guide; meta title,
  // description and alt text from the updated Master SEO Blueprint.
  service({
    slug: "tire-shop-alexandria",
    metaTitle: "Tire Shop & Tire Sales in Alexandria, VA | Duke Auto",
    metaDescription:
      "Looking for a trusted tire shop in Alexandria, VA? Duke Auto Repair offers tire sales, patching, and mounting for all major brands.",
    imageAlt: "Mechanic mounting a new tire on a wheel at tire shop in Alexandria VA",
    name: "Tire Sales & Service",
    summary: "Tire sales, flat repairs, mounting, and balancing.",
    icon: "tire",
    heading: "Tire Shop and Tire Repair in Alexandria, VA",
    intro:
      "Your tires are the only point of contact between your vehicle and the road. Uneven wear, vibrations, or a flat tire require immediate attention to keep you safe. Duke Auto Repair provides comprehensive tire sales, patching, mounting, and balancing for all major brands.",
    image: "/images/shop/tire-wheel.jpg",
    imagePosition: "center 50%",
    sections: [
      {
        title: "Tire Sales & Installation",
        body: "We offer a wide selection of premium and budget-friendly tires tailored to your vehicle. Our ASE-certified professionals will help you choose the right tires and mount them perfectly using state-of-the-art equipment.",
      },
      {
        title: "Flat Tire Repair & Balancing",
        body: "Don't let a slow leak ruin your day. We perform safe, permanent plug-and-patch flat repairs and precision wheel balancing to eliminate steering wheel vibrations.",
      },
      {
        title: "Tire Shop Near Me",
        body: "When you need new tires or a quick flat repair in Alexandria, VA, look no further than Duke Auto Repair. Stop by our 10-bay facility at 5220 Duke St, Alexandria, VA 22304.",
      },
    ],
    banner: "New Tires and Flat Repairs – Roll In to Duke Auto Repair.",
  }),
  service({
    slug: "mechanic-alexandria-va",
    metaTitle: "ASE-Certified Mechanics in Alexandria, VA | Duke Auto",
    metaDescription:
      "Need a reliable mechanic in Alexandria, VA? Our ASE-certified technicians provide honest, flat-rate auto repair with full digital inspections.",
    imageAlt: "ASE-certified mechanic inspecting a car engine in Alexandria VA",
    name: "General Mechanic Services",
    summary: "Comprehensive repairs from ASE-certified mechanics.",
    icon: "wrench",
    heading: "ASE-Certified Mechanics in Alexandria, VA",
    intro:
      "Finding a trustworthy mechanic can be a challenge. At Duke Auto Repair, we provide dealership expertise without the dealership markup. Our ASE-certified technicians combine decades of hands-on experience with modern diagnostic equipment to keep your vehicle running smoothly.",
    image: "/images/shop/mechanics-under-hood.jpg",
    imagePosition: "center 45%",
    sections: [
      {
        title: "Comprehensive Mechanical Repairs",
        body: "From minor fluid leaks to complex drivetrain components, our experienced team provides comprehensive automotive maintenance, diagnostics, and mechanical repairs.",
      },
      {
        title: "Digital Vehicle Inspections (DVI)",
        body: "We believe in complete transparency. Before approving any flat-rate estimate, our mechanics will text you photos, videos, and detailed notes of your engine and undercarriage so you can see exactly what we see.",
      },
      {
        title: "Mechanic Near Me",
        body: "When you need a reliable mechanic in Alexandria, VA, trust the team that treats every customer like family. Visit us at 5220 Duke St, Alexandria, VA 22304 or contact us to book an appointment.",
      },
    ],
    banner: "Trusted Mechanics on Duke St – Book with Duke Auto Repair.",
  }),
  service({
    slug: "auto-electrical-repair",
    metaTitle: "Auto Electrical Repair in Alexandria, VA | Duke Auto",
    metaDescription:
      "Expert auto electrical service in Alexandria, VA. We diagnose and repair alternators, dead batteries, starters, and complex wiring issues.",
    imageAlt: "Mechanic testing car battery and electrical system in Alexandria VA",
    name: "Auto Electrical Service",
    summary: "Battery, alternator, starter, and wiring repairs.",
    icon: "battery",
    heading: "Auto Electrical Repair and Diagnostics in Alexandria, VA",
    intro:
      "Modern vehicles are essentially rolling computers, relying heavily on complex electrical systems. If your car won't start, your battery keeps dying, or you are experiencing electrical glitches, the diagnostic experts at Duke Auto Repair are fully equipped to find the root cause.",
    image: "/images/shop/battery-test.jpg",
    imagePosition: "center 50%",
    sections: [
      {
        title: "Battery, Alternator & Starter Diagnostics",
        body: "A dead car doesn't always mean a dead battery. Our mechanics use state-of-the-art computerized diagnostic equipment to accurately test your battery, alternator, and starter so you don't waste money replacing parts that aren't broken.",
      },
      {
        title: "Complex Wiring & Electrical Repairs",
        body: "From blown fuses and failing sensors to damaged wiring harnesses, our ASE-certified mechanics can track down parasitic draws and electrical shorts in both domestic and Asian imported vehicles.",
      },
      {
        title: "Auto Electrical Repair Near Me",
        body: "For accurate and transparent auto electrical service in Alexandria, VA, rely on Duke Auto Repair. We gladly accept appointments online and walk-ins at 5220 Duke St, Alexandria, VA 22304.",
      },
    ],
    banner: "Electrical Problems Solved – Visit Duke Auto Repair.",
  }),
  service({
    slug: "auto-tune-up",
    metaTitle: "Auto Tune-Up Service in Alexandria, VA | Duke Auto",
    metaDescription:
      "Keep your engine running smoothly with an auto tune-up service in Alexandria, VA. We replace spark plugs, filters, and inspect belts.",
    imageAlt: "Mechanic replacing spark plugs during an auto tune-up in Alexandria VA",
    name: "Auto Tune-Up Service",
    summary: "Spark plugs, ignition, filters, and belts.",
    icon: "tune-up",
    heading: "Auto Tune-Up Service in Alexandria, VA",
    intro:
      "The absolute best way to keep your vehicle running past 200,000 miles is strict adherence to preventative maintenance. A comprehensive engine tune-up at Duke Auto Repair restores lost power, improves fuel efficiency, and prevents costly breakdowns down the road.",
    image: "/images/shop/tune-up.jpg",
    imagePosition: "center 45%",
    sections: [
      {
        title: "Spark Plugs & Ignition Services",
        body: "Worn spark plugs and failing ignition coils can cause engine misfires, rough idling, and poor gas mileage. We replace these components to ensure your engine runs cleanly and smoothly.",
      },
      {
        title: "Filters, Belts, & Fluids",
        body: "Our tune-up services include checking and replacing dirty engine air filters, worn serpentine belts, and checking essential fluids. Every service includes a complimentary Digital Vehicle Inspection (DVI) for complete transparency.",
      },
      {
        title: "Tune-Up Service Near Me",
        body: "Looking for a trusted shop to perform an auto tune-up in Alexandria, VA? Avoid the quick-lube chains and get dealership-level care by visiting Duke Auto Repair at 5220 Duke St, Alexandria, VA 22304.",
      },
    ],
    banner: "Restore Your Engine's Power – Tune-Ups at Duke Auto Repair.",
  }),
];

export const findService = (slug: string) =>
  services.find((item) => item.slug === slug);

// Groupings for the /services overview page.
type ServiceGroup = {
  id: string;
  title: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  slugs: string[];
};

const groups: ServiceGroup[] = [
  {
    id: "maintenance",
    title: "Maintenance.",
    label: "Maintenance",
    description:
      "Routine care that keeps small problems from becoming big ones.",
    image: "/images/about/techs-under-hood.jpg",
    imageAlt: "Two Duke Auto technicians working together under the hood",
    imagePosition: "50% 40%",
    slugs: ["oil-change-service", "wheel-alignment", "tire-shop-alexandria", "auto-tune-up"],
  },
  {
    id: "repairs",
    title: "Repairs.",
    label: "Repairs",
    description:
      "Brakes, suspension, climate control and drivetrain, all under one roof.",
    image: "/images/about/brake-tech.jpg",
    imageAlt: "A Duke Auto technician servicing the brakes on a truck",
    imagePosition: "35% 50%",
    slugs: ["mechanic-alexandria-va", "brake-repair", "suspension-repair", "car-ac-repair", "transmission-repair", "auto-electrical-repair"],
  },
  {
    id: "inspection",
    title: "Diagnostics and inspections.",
    label: "Diagnostics and inspections",
    description:
      "Find out what's wrong, and get your state inspection done in one stop.",
    image: "/images/about/diagnostics-portrait.jpg",
    imageAlt: "A Duke Auto technician using a diagnostic tool beside an engine",
    imagePosition: "60% 35%",
    services: [
      {
        id: "engine-diagnostics",
        href: "/services/engine-diagnostics",
        name: "Check engine diagnostics",
        description: "Computer diagnostics to find out why the light is on.",
        icon: "diagnostics",
      },
      {
        id: "state-inspection",
        href: "/services/state-inspection",
        name: "State safety and emissions",
        description: "State inspection and emissions testing, done on site.",
        icon: "inspection",
      },
    ],
  },
];
