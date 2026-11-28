import type { ServiceIconName } from "@/components/service-icon";

// Copy for every service page comes from the Duke Auto Repair Website Content
// & UX Guide (revised edition, section 3). URL slugs, titles, descriptions and alt text
// come from the Master SEO Blueprint (section 2). Slugs are public URLs:
// public/.htaccess redirects the retired service URLs to them.

export type SiloSection = { title: string; body: string };

/** A shop photo. Give width/height for photos that aren't 1600x739 (portrait ones especially). */
export type GalleryPhoto = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** CSS object-position for the crop, e.g. "center 30%". */
  position?: string;
};

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
  gallery?: GalleryPhoto[];
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
      { src: "/images/services/brake-pad-gauge.jpg", alt: "Technician measuring brake pad wear thickness against a brake rotor and caliper at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
      { src: "/images/services/brake-caliper-inspection.jpg", alt: "Mechanic inspecting a disc brake caliper and rotor assembly on a lifted vehicle at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
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
    imageAlt: "OBD2 computer diagnostic scanner connected to a vehicle steering wheel during engine diagnostics and check engine light testing at Duke Auto Repair in Alexandria, VA",
    name: "Engine & Diagnostics",
    summary: "Check engine light diagnostics and major engine repair.",
    icon: "diagnostics",
    heading: "Engine Diagnostics and Repair in Alexandria, VA",
    intro:
      "A glowing check engine light is your vehicle's way of asking for help. Don't rely on parts stores that just pull codes and guess at the problem. Trust the ASE-certified diagnostic experts at Duke Auto Repair for accurate, transparent engine repair in Alexandria, VA.",
    image: "/images/services/obd2-scanner.jpg",
    imagePosition: "center 50%",
    gallery: [
      { src: "/images/about/diagnostics-portrait.jpg", alt: "Technician using a diagnostic scan tool beside an open engine bay at Duke Auto Repair in Alexandria, VA", width: 1092, height: 1365, position: "center 35%" },
      { src: "/images/services/obd2-scanner.jpg", alt: "OBD2 computer diagnostic scanner connected to a vehicle steering wheel during engine diagnostics and check engine light testing at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
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
    slug: "virginia-safety-inspection",
    logos: ["va-safety"],
    metaTitle: "Virginia State Safety Inspection in Alexandria, VA | Duke Auto Repair",
    metaDescription: "Need your annual Virginia State Safety Inspection in Alexandria, VA? Visit Duke Auto Repair at 5220 Duke St for fast, certified state inspections. Walk-ins welcome!",
    imageAlt: "Certified Virginia state inspector checking vehicle safety systems and windshield inspection decal at Duke Auto Repair in Alexandria, VA",
    name: "Virginia Safety Inspection",
    summary: "Annual Virginia State Safety Inspections, walk-ins welcome.",
    icon: "inspection",
    heading: "Virginia State Safety Inspection in Alexandria, VA",
    intro: "Keep your vehicle road-legal and your family safe with a fast, certified annual Virginia State Safety Inspection at Duke Auto Repair. Conveniently located on Duke Street in Alexandria, our state-certified inspectors welcome walk-ins and complete thorough inspections without unnecessary delays.",
    image: "/images/services/safety-inspection-decal.jpg",
    imagePosition: "center 40%",
    gallery: [
      { src: "/images/services/safety-inspection-brake-gauge.jpg", alt: "ASE-certified technician measuring brake pad wear thickness during a Virginia State Safety Inspection at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
      { src: "/images/services/safety-inspection-windshield.jpg", alt: "Certified Virginia state inspector checking the windshield inspection decal during a safety inspection at Duke Auto Repair in Alexandria, VA", width: 1430, height: 814 },
    ],
    sections: [
      {
        title: "Certified Annual Virginia State Safety Inspections",
        body: "All vehicles registered in Virginia must undergo an annual Virginia State Safety Inspection and display a valid inspection decal on the lower-left corner of the windshield, with the exception of vehicles registered with antique plates. At Duke Auto Repair, our licensed state inspectors follow every official Virginia State Police guideline to ensure your car, SUV, or light truck meets state safety standards.",
      },
      {
        title: "Comprehensive Brake, Tire, and Steering Checks",
        body: "During your official safety inspection, our certified inspectors thoroughly evaluate all critical mechanical and safety components on your vehicle. We inspect brake pad thickness, rotor condition, parking brake operation, and hydraulic brake lines alongside tire tread depth, sidewall condition, and wheel lug integrity. We also examine key steering and suspension components—including ball joints, tie rods, control arms, shocks, and struts—to ensure predictable handling on Northern Virginia roads.",
      },
      {
        title: "Visibility, Lighting, and Occupant Safety Verification",
        body: "Beyond mechanical systems, your Virginia State Safety Inspection covers every component that protects visibility and occupant safety. Our team verifies proper headlight aim and output, brake lights, turn signals, hazard lights, and dashboard warning indicators. We also check windshield glass for cracks or chips in the driver's line of sight, test wiper blades and washer fluid systems, and inspect mirrors, seatbelts, horn operation, and exhaust integrity.",
      },
      {
        title: "Virginia Inspection Near Me in Alexandria, VA",
        body: "If you are searching for a reliable Virginia inspection near me in Alexandria or across Northern Virginia, Duke Auto Repair makes your annual state safety inspection fast and hassle-free. Conveniently located at 5220 Duke St in Alexandria—just minutes from Old Town Alexandria, Landmark, Eisenhower Valley, and I-395—our certified inspectors welcome walk-ins and get you back on the road quickly.",
      },
    ],
    banner: "Fast, Certified Virginia Safety Inspections – Walk-ins Welcome!",
  }),
  service({
    slug: "virginia-emissions-inspection",
    logos: ["air-check"],
    metaTitle: "Virginia Emissions Inspection Near Me in Alexandria, VA | Duke Auto Repair",
    metaDescription: "Need a Virginia emissions inspection near me in Alexandria, VA? Visit Duke Auto Repair at 5220 Duke St for fast, certified emissions testing with instant DMV reporting.",
    imageAlt: "Certified Virginia emissions inspector operating the computerized emissions testing station for DMV registration renewal at Duke Auto Repair in Alexandria, VA",
    name: "Virginia Emissions Inspection",
    summary: "Certified emissions testing with results sent to the DMV.",
    icon: "diagnostics",
    heading: "Virginia Emissions Inspection in Alexandria, VA",
    intro: "Renew your Virginia DMV registration without the hassle at Duke Auto Repair, a certified Virginia emissions inspection station in Alexandria. Our certified inspectors provide fast, accurate emissions testing and transmit your passing results directly to the Virginia DMV.",
    image: "/images/services/emissions-station.jpg",
    imagePosition: "center 45%",
    gallery: [
      { src: "/images/services/emissions-paperwork.jpg", alt: "Certified Virginia emissions inspector reviewing vehicle test paperwork at the emissions testing computer station at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
      { src: "/images/services/emissions-station-2.jpg", alt: "Certified Virginia emissions inspector running a computerized emissions test for DMV registration renewal at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
    ],
    sections: [
      {
        title: "Certified Virginia Emissions Testing in Northern Virginia",
        body: "In Northern Virginia, most gasoline- and diesel-powered vehicles are required to pass a Virginia emissions inspection every two years before the owner can renew their registration with the DMV. Vehicles garaged or registered in Alexandria, Arlington, Fairfax, Falls Church, Loudoun, Manassas, Manassas Park, Prince William, or Stafford must complete this biennial testing unless exempt under state rules for newer model years, electric vehicles, or qualified hybrids.",
      },
      {
        title: "Modern OBD2 and Tailpipe Emissions Testing",
        body: "Depending on your vehicle's model year, weight, and fuel system, our certified technicians perform the exact testing procedure required for your vehicle. For most 1996 and newer gasoline vehicles and 1997 and newer light-duty diesels, we connect directly to your vehicle's On-Board Diagnostics (OBD2) port to verify emissions readiness monitors and check for stored fault codes. For older model vehicles, we conduct tailpipe exhaust testing alongside a visual inspection of factory emissions controls and fuel cap seals.",
      },
      {
        title: "Check Engine Light Diagnostics and Emissions Repairs",
        body: "An illuminated Check Engine Light will result in an automatic Virginia emissions inspection failure. If your vehicle fails due to an active trouble code, faulty oxygen sensor, EVAP leak, or catalytic converter issue, our ASE-certified diagnostic technicians can pinpoint the exact root cause, perform certified emissions repairs on-site, and get your vehicle re-tested so you pass smoothly.",
      },
      {
        title: "Virginia Emissions Inspection Near Me in Alexandria, VA",
        body: "When you need a fast Virginia emissions inspection near me for your DMV registration renewal, Duke Auto Repair is a certified emissions testing station right here in Alexandria. Located at 5220 Duke St near Old Town Alexandria, Landmark, Arlington, and Springfield, our certified team completes your emissions test quickly and sends your passing results straight to the Virginia DMV.",
      },
    ],
    banner: "Pass Your Emissions Test – Certified Testing at Duke Auto Repair.",
  }),
  service({
    slug: "wheel-alignment",
    metaTitle: "Wheel Alignment in Alexandria, VA | Duke Auto Repair",
    metaDescription:
      "Is your car pulling to one side or wearing tires unevenly? Get professional four-wheel alignment at Duke Auto Repair in Alexandria, VA. Schedule today.",
    imageAlt: "Computerized four-wheel laser alignment service on a vehicle at Duke Auto Repair in Alexandria, VA",
    name: "Wheel Alignment",
    summary: "Computerized four-wheel laser alignment.",
    icon: "alignment",
    heading: "Wheel Alignment in Alexandria, VA",
    intro:
      "Does your car pull to one side? Is your steering wheel crooked when driving straight? Have you noticed uneven tire wear? These are common signs that your vehicle needs a wheel alignment. At Duke Auto Repair, we use advanced wheel alignment equipment to restore your vehicle’s handling, stability, and driving comfort—and we recommend checking your alignment annually, when purchasing new tires, or after hitting a significant pothole or curb.",
    image: "/images/services/alignment-laser.jpg",
    imagePosition: "center 45%",
    gallery: [
      { src: "/images/services/alignment-check.jpg", alt: "ASE-certified technician performing a precision four-wheel alignment check at Duke Auto Repair in Alexandria, VA", width: 1430, height: 953 },
      { src: "/images/services/alignment-wheel-clamp.jpg", alt: "Four-wheel alignment clamp mounted on a wheel during a precision alignment check at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
      { src: "/images/services/alignment-rack.jpg", alt: "Vehicle on the computerized alignment rack during a four-wheel alignment at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
      { src: "/images/services/alignment-target.jpg", alt: "Alignment target mounted on a wheel for computerized four-wheel alignment at Duke Auto Repair in Alexandria, VA", width: 1430, height: 953 },
      { src: "/images/services/alignment-target-2.jpg", alt: "Close-up of a laser alignment target on a tire during a precision wheel alignment at Duke Auto Repair in Alexandria, VA", width: 1430, height: 953 },
    ],
    sections: [
      {
        title: "Laser Wheel Alignment",
        body: "Potholes and curbs can easily knock your vehicle out of alignment. We use precision laser alignment technology to inspect your steering and suspension components and adjust your vehicle's alignment back to factory specifications, preventing premature tire wear and improving fuel efficiency.",
      },
      {
        title: "Signs You Need a Wheel Alignment",
        body: "If your car pulls to the left or right, your steering wheel is off-center, your tires are wearing unevenly, or your vehicle feels unstable while driving, visit our ASE-certified technicians at 5220 Duke St, Alexandria, VA 22304.",
      },
      {
        title: "Benefits of Proper Wheel Alignment",
        body: "Regular four-wheel alignment extends tire life, improves steering and handling, helps boost fuel efficiency, reduces unnecessary suspension wear, and delivers a smoother, more comfortable drive.",
      },
      {
        title: "Wheel Alignment Near Me",
        body: "Duke Auto Repair proudly serves Alexandria, Springfield, Kingstowne, Franconia, and surrounding Northern Virginia communities. Call (703) 212-0608 or schedule your wheel alignment online today!",
      },
    ],
    banner:
      "Drive Straight Again – Precision Wheel Alignment at Duke Auto Repair.",
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
      { src: "/images/services/oil-mobil1-pour.jpg", alt: "ASE-certified technician pouring Mobil 1 full synthetic motor oil into a Toyota V6 engine during an oil change service at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
      { src: "/images/services/oil-mobil1-pour-2.jpg", alt: "Technician refilling a Toyota V6 engine with Mobil 1 full synthetic motor oil during an oil change at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
      { src: "/images/shop/oil-check-2.jpg", alt: "Two Duke Auto technicians checking under the hood during an oil service" },
      { src: "/images/shop/oil-check-3.jpg", alt: "Technician checking engine fluids with a shop rag in hand" },
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
    metaTitle: "Auto Air Conditioning Repair in Alexandria, VA | Duke Auto Repair",
    metaDescription: "Car AC blowing warm air? Get expert auto A/C recharge, compressor & refrigerant leak repair at Duke Auto Repair in Alexandria, VA.",
    imageAlt: "Technician testing automotive air conditioning pressure and refrigerant levels at Duke Auto Repair in Alexandria, VA",
    name: "Auto Air Conditioning Repair",
    summary: "A/C diagnostics, leak detection, and refrigerant recharge.",
    icon: "air-conditioning",
    heading: "Auto Air Conditioning Repair in Alexandria, VA",
    intro: "Is your car’s air conditioning blowing warm air, cycling on and off, or struggling to cool the cabin? Whether it’s summer heat or clearing humid windshield condensation, a properly working A/C system keeps your drive comfortable year-round. At Duke Auto Repair (5220 Duke St, Alexandria, VA), our ASE-certified technicians perform complete automotive A/C diagnostics, refrigerant recharges, and component repairs for all domestic, Asian, and European vehicles.",
    image: "/images/services/ac-pressure-test.jpg",
    imagePosition: "center 50%",
    gallery: [
      { src: "/images/services/ac-recharge.jpg", alt: "Technician connecting an A/C recharge machine to check refrigerant pressure at Duke Auto Repair in Alexandria, VA", width: 1430, height: 953 },
      { src: "/images/services/ac-service-bay.jpg", alt: "Technicians performing auto air conditioning service in the service bay at Duke Auto Repair in Alexandria, VA", width: 1430, height: 953 },
    ],
    sections: [
      {
        title: "Signs Your Auto A/C Needs Repair",
        body: "Air conditioning blowing warm or weak air, A/C cooling intermittently, unusual rattling or squealing noises when turning the A/C on, musty odors from the vents, or visible refrigerant/compressor leaks.",
      },
      {
        title: "Our Auto Air Conditioning Services",
        body: "Complete A/C system performance & pressure testing, R-134a and R-1234yf refrigerant evacuation and recharge, UV dye & electronic refrigerant leak detection, A/C compressor and clutch replacement, condenser and evaporator repair, expansion valve/orifice tube replacement, and cabin air filter replacement.",
      },
      {
        title: "Precision Diagnostics & Transparent Pricing",
        body: "We pinpoint leaks and pressure drops accurately the first time—sharing a photo-backed Digital Vehicle Inspection so you approve every repair with complete confidence.",
      },
      {
        title: "Auto A/C Repair Near Me",
        body: "Get fast, reliable cabin comfort back at Duke Auto Repair & Service. Proudly serving Alexandria (22304 & 22312), Springfield, Kingstowne, Franconia, and Northern Virginia—call (703) 212-0608 or schedule your auto A/C service online today!",
      },
    ],
    banner: "Beat the Heat – Expert Auto A/C Repair at Duke Auto Repair.",
  }),
  service({
    slug: "cooling-system-repair",
    metaTitle: "Cooling System Repair in Alexandria, VA | Duke Auto Repair",
    metaDescription: "Engine overheating or coolant leaking? Get expert radiator, water pump, thermostat & cooling system repair at Duke Auto Repair in Alexandria, VA.",
    imageAlt: "ASE-certified technician performing a coolant flush and cooling system pressure test on a Porsche at Duke Auto Repair in Alexandria, VA",
    name: "Cooling System",
    summary: "Overheating, coolant leaks, radiators, and water pumps.",
    icon: "fluids",
    heading: "Cooling System Repair in Alexandria, VA",
    intro: "Is your car overheating? Have you noticed coolant leaking underneath your vehicle or your temperature gauge rising higher than normal? Cooling system problems can lead to serious and expensive engine damage if left untreated. At Duke Auto Repair (5220 Duke St, Alexandria, VA), our ASE-certified technicians diagnose and repair cooling system problems—backed by a photo-based Digital Vehicle Inspection and 780+ 5-star local reviews—to keep your engine running at the proper temperature.",
    image: "/images/services/cooling-flush.jpg",
    imagePosition: "center 45%",
    gallery: [
      { src: "/images/services/cooling-hoses.jpg", alt: "Mechanic inspecting radiator hoses and diagnosing a vehicle cooling system at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
      { src: "/images/services/cooling-pressure-test.jpg", alt: "Cooling system pressure testing and antifreeze inspection equipment connected to an engine at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
      { src: "/images/services/cooling-exchange-lines.jpg", alt: "Technician connecting coolant exchange lines during radiator and antifreeze service at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
    ],
    sections: [
      {
        title: "Signs Your Cooling System Needs Repair",
        body: "Engine overheating, coolant leaking underneath your car, temperature gauge reading higher than normal, low coolant warning light, a sweet smell coming from the engine, steam coming from under the hood, or coolant levels constantly dropping.",
      },
      {
        title: "Our Car Cooling System Services",
        body: "Radiator repair and replacement, water pump replacement, thermostat replacement, coolant leak diagnosis, cooling system pressure testing, coolant flush and antifreeze freeze protection replacement, radiator hose replacement, and cooling fan diagnosis and repair.",
      },
      {
        title: "Prevent Costly Engine Damage",
        body: "Our technicians identify the exact source of the leak or overheating issue with zero guesswork and recommend only the repairs needed to protect your engine.",
      },
      {
        title: "Cooling System Repair Near Me",
        body: "If your engine is overheating, pull over safely and turn it off—continuing to drive can cause severe engine damage. Duke Auto Repair proudly serves drivers in Alexandria, Springfield, Kingstowne, Franconia, and surrounding Northern Virginia communities. Call (703) 212-0608 or schedule your cooling system service online today!",
      },
    ],
    banner: "Stop Overheating – Cooling System Repair at Duke Auto Repair.",
  }),
  service({
    slug: "car-heater-repair",
    metaTitle: "Car Heater Repair in Alexandria, VA | Duke Auto Repair",
    metaDescription: "Car heater blowing cold air or defroster weak? Get fast heater core, thermostat & blower motor repair at Duke Auto Repair in Alexandria, VA.",
    imageAlt: "Open hood engine bay inspection during car heating and cooling system diagnostics at Duke Auto Repair in Alexandria, VA",
    name: "Car Heating System Service",
    summary: "Heater core, blower motor, thermostat, and defrost repair.",
    icon: "heating",
    heading: "Car Heater Repair in Alexandria, VA",
    intro: "Is your car heater blowing cold air when freezing temperatures hit Northern Virginia? A weak heater or foggy windshield defroster isn't just uncomfortable—it’s a winter visibility and safety hazard. At Duke Auto Repair (5220 Duke St, Alexandria, VA), our ASE-certified technicians quickly pinpoint heating and defrost issues with a photo-backed Digital Vehicle Inspection so you stay warm and safe on the road.",
    image: "/images/services/heater-engine-bay.jpg",
    imagePosition: "center 50%",
    gallery: [
      { src: "/images/services/heater-climate-control.jpg", alt: "Audi climate control system set to HI during car heater repair and cabin heat testing at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 25%" },
      { src: "/images/services/heater-climate-control-2.jpg", alt: "Audi dashboard climate controls checked during car heater and defrost testing at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 25%" },
    ],
    sections: [
      {
        title: "Signs Your Car Heating System Needs Repair",
        body: "Heater blowing cold or lukewarm air, windshield defroster failing to clear fog or ice, weak airflow from cabin vents, sweet antifreeze odor inside the cabin, fogging on the inside of your windows, or strange noises when turning on the fan.",
      },
      {
        title: "Our Car Heating System Services",
        body: "Heater core diagnosis, flush, and replacement; blower motor and resistor repair; thermostat and coolant level/flow testing; heater hose and control valve replacement; blend door actuator repair; and full heating and defrost system performance checks.",
      },
      {
        title: "Honest Diagnostics With Zero Guesswork",
        body: "Over 780 Alexandria drivers rate Duke Auto Repair 4.8 stars because we test the entire heating and cooling loop first and send clear inspection photos straight to your phone before any repair begins.",
      },
      {
        title: "Car Heater Repair Near Me",
        body: "Don't get stuck commuting in a freezing cabin this winter. Duke Auto Repair proudly serves Alexandria, Springfield, Kingstowne, Franconia, and surrounding Northern Virginia communities. Call (703) 212-0608, stop by 5220 Duke St, Alexandria, VA, or schedule your heater service online today!",
      },
    ],
    banner: "Stay Warm This Winter – Car Heater Repair at Duke Auto Repair.",
  }),
  service({
    slug: "suspension-repair",
    metaTitle: "Suspension Repair & Steering Service Alexandria, VA | Duke",
    metaDescription:
      "Smooth out your ride with expert suspension repair in Alexandria, VA. We replace worn shocks, struts, ball joints & control arms at flat-rate prices.",
    imageAlt: "ASE-certified technician inspecting and servicing a front coil spring and strut suspension assembly at Duke Auto Repair in Alexandria, VA",
    name: "Suspension & Steering",
    summary: "Shock and strut replacement.",
    icon: "suspension",
    heading: "Steering and Suspension Repair in Alexandria, VA",
    intro:
      "Alexandria roads and winter potholes can wreak havoc on your vehicle's undercarriage. If you experience excessive bouncing over bumps, a clunking noise when turning, or a wandering steering wheel, your suspension components require immediate attention.",
    image: "/images/services/suspension-coil-strut.jpg",
    imagePosition: "center 45%",
    gallery: [
      { src: "/images/services/suspension-wheel-well.jpg", alt: "Mechanic performing front suspension and steering repair inside a vehicle wheel well at Duke Auto Repair in Alexandria, VA" },
      { src: "/images/services/suspension-knuckle.jpg", alt: "Technician inspecting brake, steering knuckle, and suspension components on a lifted car at Duke Auto Repair in Alexandria, VA" },
      { src: "/images/services/suspension-undercarriage.jpg", alt: "Underbody suspension inspection of control arms, bushings, and chassis components at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
    ],
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
    gallery: [
      { src: "/images/services/transmission-bg-pf5.jpg", alt: "ASE-certified technician performing a BG transmission fluid flush and exchange on a lifted vehicle at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 60%" },
      { src: "/images/services/transmission-bg-pf5-2.jpg", alt: "BG PF5 transmission fluid exchange machine connected under a lifted vehicle at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 60%" },
      { src: "/images/services/transmission-fluid-before.jpg", alt: "Before and after transmission fluid flush comparison showing dark used fluid on a BG PF5 exchange machine at Duke Auto Repair in Alexandria, VA", width: 1600, height: 720 },
      { src: "/images/services/transmission-fluid-after.jpg", alt: "Before and after transmission fluid flush comparison showing clean red transmission fluid on a BG PF5 exchange machine at Duke Auto Repair in Alexandria, VA", width: 1600, height: 720 },
    ],
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
    imageAlt: "Mechanic mounting and balancing a vehicle tire on a computerized balancing machine at Duke Auto Repair in Alexandria, VA",
    name: "Tire Sales & Service",
    summary: "Tire sales, flat repairs, mounting, and balancing.",
    icon: "tire",
    heading: "Tire Shop and Tire Repair in Alexandria, VA",
    intro:
      "Your tires are the only point of contact between your vehicle and the road. Uneven wear, vibrations, or a flat tire require immediate attention to keep you safe. Duke Auto Repair provides comprehensive tire sales, patching, mounting, and balancing for all major brands.",
    image: "/images/services/tire-balancing.jpg",
    imagePosition: "center 50%",
    gallery: [
      { src: "/images/services/tire-mounting.jpg", alt: "ASE-certified technician mounting a tire and alloy wheel onto a computerized wheel balancer at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 55%" },
      { src: "/images/services/tire-balancer-spin.jpg", alt: "Computerized wheel balancing machine spinning a tire with the safety hood closed at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 55%" },
      { src: "/images/services/tire-balancer-screen.jpg", alt: "CEMB computerized wheel balancing machine screen showing balanced tire and rim readings at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 60%" },
    ],
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
    imageAlt: "Two ASE-certified mechanics inspecting engine components with a flashlight during general auto repair diagnostics at Duke Auto Repair in Alexandria, VA",
    name: "General Mechanic Services",
    summary: "Comprehensive repairs from ASE-certified mechanics.",
    icon: "wrench",
    heading: "ASE-Certified Mechanics in Alexandria, VA",
    intro:
      "Finding a trustworthy mechanic can be a challenge. At Duke Auto Repair, we provide dealership expertise without the dealership markup. Our ASE-certified technicians combine decades of hands-on experience with modern diagnostic equipment to keep your vehicle running smoothly.",
    image: "/images/services/mechanics-flashlight.jpg",
    imagePosition: "center 40%",
    gallery: [
      { src: "/images/services/mechanic-obd2-scan.jpg", alt: "Mechanic sitting in the driver's seat using a handheld OBD2 computer diagnostics scanner at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
      { src: "/images/services/german-sedan-engine-bay.jpg", alt: "Open hood engine bay inspection and maintenance on a German sedan at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
      { src: "/images/services/engine-valve-cover.jpg", alt: "Close-up of a vehicle engine with the valve cover removed during internal engine repairs at Duke Auto Repair in Alexandria, VA", width: 647, height: 1400, position: "center 45%" },
      { src: "/images/services/mechanic-open-hood.jpg", alt: "ASE-certified mechanic servicing an open-hood vehicle in the service bay at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
    ],
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
    gallery: [
      { src: "/images/services/electrical-multimeter.jpg", alt: "Mechanic using a handheld digital multimeter and battery tester during auto electrical diagnostics at Duke Auto Repair in Alexandria, VA", width: 1430, height: 953 },
      { src: "/images/services/electrical-battery-test.jpg", alt: "ASE-certified technician testing a vehicle battery, alternator, and charging system under the hood at Duke Auto Repair in Alexandria, VA", width: 1430, height: 953 },
      { src: "/images/services/electrical-diagnostics.jpg", alt: "Technician performing auto electrical and battery system testing with diagnostic equipment at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
    ],
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
    imageAlt: "ASE-certified mechanics performing preventative engine maintenance and fluid checks during an auto tune-up at Duke Auto Repair in Alexandria, VA",
    name: "Auto Tune-Up Service",
    summary: "Spark plugs, ignition, filters, and belts.",
    icon: "tune-up",
    heading: "Auto Tune-Up Service in Alexandria, VA",
    intro:
      "The absolute best way to keep your vehicle running past 200,000 miles is strict adherence to preventative maintenance. A comprehensive engine tune-up at Duke Auto Repair restores lost power, improves fuel efficiency, and prevents costly breakdowns down the road.",
    image: "/images/services/tune-up-maintenance.jpg",
    imagePosition: "center 40%",
    gallery: [
      { src: "/images/services/tune-up-ignition.jpg", alt: "ASE-certified technician inspecting ignition coils, spark plugs, and upper engine components during an auto tune-up service at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
      { src: "/images/services/tune-up-dvi-tablet.jpg", alt: "Technician performing a Digital Vehicle Inspection (DVI) with a tablet under the hood during scheduled maintenance at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
      { src: "/images/services/mechanic-open-hood.jpg", alt: "Mechanic replacing an engine air filter during a comprehensive auto tune-up service at Duke Auto Repair in Alexandria, VA", width: 1299, height: 600 },
      { src: "/images/services/tune-up-belts-hoses.jpg", alt: "Two ASE-certified technicians inspecting belts, hoses, and engine components during a tune-up at Duke Auto Repair in Alexandria, VA", width: 1431, height: 661 },
    ],
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
    slugs: ["mechanic-alexandria-va", "brake-repair", "suspension-repair", "car-ac-repair", "car-heater-repair", "cooling-system-repair", "transmission-repair", "auto-electrical-repair"],
  },
  {
    id: "inspection",
    title: "Diagnostics and inspections.",
    label: "Diagnostics and inspections",
    description:
      "Find out what's wrong, and get your safety and emissions inspections done in one stop.",
    image: "/images/about/diagnostics-portrait.jpg",
    imageAlt: "A Duke Auto technician using a diagnostic tool beside an engine",
    imagePosition: "60% 35%",
    slugs: ["check-engine-light-diagnostic", "virginia-safety-inspection", "virginia-emissions-inspection"],
  },
];

export const serviceGroups = groups.map(({ slugs, ...group }) => ({
  ...group,
  services: slugs.map((slug) => findService(slug)!),
}));
