// Editorial sources and review notes: docs/service-content-sources.md.
export type ServiceDetail = {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  introTitle: string;
  intro: string;
  signsTitle: string;
  signs: string[];
  checks: { title: string; description: string }[];
  bookingTitle: string;
  bookingTag: string;
  bookingDescription: string;
  relatedIds: string[];
  relatedDescription: string;
  helpfulLinks?: { label: string; href: string }[];
};

export const serviceDetails = {
  "brake-repair": {
    id: "brake-repair",
    title: "Brake Repair",
    description:
      "Free brake inspection and premium brake service, so you can stop with confidence.",
    image: "/images/about/brake-tech.jpg",
    imagePosition: "center 45%",
    introTitle: "Brakes you can trust, every time you stop.",
    intro:
      "Your brakes are one of the most important safety systems on your car. Our certified technicians inspect your brakes for free, show you exactly what they found, and only do the work you approve.",
    signsTitle: "Signs you need brake repair",
    signs: [
      "Squealing or squeaking when you brake",
      "Grinding or scraping sounds",
      "A soft or spongy brake pedal",
      "The car pulls to one side when stopping",
      "Vibration in the pedal or steering wheel",
      "The brake warning light is on",
    ],
    checks: [
      {
        title: "Brake pads and shoes",
        description:
          "Pads and shoes wear down every time you stop. We measure what's left and replace them before they damage other parts.",
      },
      {
        title: "Rotors and drums",
        description:
          "Worn or warped rotors can cause vibration and longer stops. We check their thickness and surface, then resurface or replace them as needed.",
      },
      {
        title: "Calipers",
        description:
          "A sticking caliper can make the car pull to one side and wear pads unevenly. We make sure each one grips and releases smoothly.",
      },
      {
        title: "Brake fluid",
        description:
          "Old fluid absorbs moisture, which can make the pedal feel soft. We test it and flush it when it's due.",
      },
      {
        title: "Brake lines and hoses",
        description:
          "We look for leaks, cracks and corrosion so pressure reaches every wheel when you press the pedal.",
      },
      {
        title: "ABS and warning lights",
        description:
          "If your ABS or brake light is on, we read the codes and find the cause before we recommend a repair.",
      },
    ],
    bookingTitle: "Book your brake repair",
    bookingTag: "Free brake inspection",
    bookingDescription:
      "Call our team to find a time that works for you. Most services are done the same day.",
    relatedIds: [
      "suspension-steering",
      "wheel-alignment",
      "bg-fluids",
      "engine-diagnostics",
    ],
    relatedDescription: "Often done alongside brake repair.",
  },
  "oil-change": {
    id: "oil-change",
    title: "Oil Change",
    description:
      "The right oil, a fresh filter, and a maintenance plan that fits your engine.",
    image: "/images/about/techs-under-hood.jpg",
    imagePosition: "center 45%",
    introTitle: "A small service that does a lot for your engine.",
    intro:
      "Fresh oil helps moving engine parts stay lubricated. We match the oil and filter to your vehicle, check for visible leaks, and help you follow the manufacturer's time, mileage or oil-life recommendations. There is no single change interval that fits every car.",
    signsTitle: "When to arrange an oil change",
    signs: [
      "Your maintenance reminder is on",
      "You've reached the scheduled mileage",
      "The time interval in your manual is due",
      "Your last service date is uncertain",
      "You frequently make short trips",
      "Your driving includes towing or heavy loads",
    ],
    checks: [
      {
        title: "Vehicle specifications",
        description:
          "We confirm the viscosity and approval requirements for your engine before choosing oil.",
      },
      {
        title: "Oil and filter",
        description:
          "Old oil is drained and the oil filter replaced with a suitable new filter.",
      },
      {
        title: "Seals and drain plug",
        description:
          "The filter seal, drain plug and visible surrounding areas are checked for leakage.",
      },
      {
        title: "Correct fill level",
        description:
          "We refill to the specified quantity and verify the level using the vehicle's required procedure.",
      },
      {
        title: "Maintenance reminder",
        description:
          "Where applicable, the service reminder is reset after the oil change is complete.",
      },
      {
        title: "Your next visit",
        description:
          "We review the factory schedule and your driving conditions, rather than using a universal mileage rule.",
      },
    ],
    bookingTitle: "Book your oil change",
    bookingTag: "Routine engine care",
    bookingDescription:
      "Tell us your make, model and engine so we can discuss the right service for your car.",
    relatedIds: [
      "bg-fluids",
      "battery-services",
      "brake-repair",
      "engine-diagnostics",
    ],
    relatedDescription: "More ways to keep routine maintenance on track.",
  },
  "bg-fluids": {
    id: "bg-fluids",
    title: "BG Fluid Services",
    description:
      "Fluid maintenance selected for your vehicle, its service history, and the systems that need attention.",
    image: "/images/about/shop-floor.jpg",
    imagePosition: "center 50%",
    introTitle: "Protect the systems that work hard on every drive.",
    intro:
      "Engine, transmission, cooling and brake systems depend on suitable fluids. We review your manufacturer's recommendations and service history before discussing an appropriate BG maintenance service. Fluid service is preventive care; it cannot repair a worn or damaged mechanical component.",
    signsTitle: "When to discuss fluid maintenance",
    signs: [
      "A scheduled fluid service is due",
      "Your service records are incomplete",
      "You've bought a used vehicle",
      "Your vehicle works in demanding conditions",
      "A fluid leak has been repaired",
      "An inspection identifies a fluid concern",
    ],
    checks: [
      {
        title: "Service history",
        description:
          "We establish what has already been done and which maintenance tasks are actually due.",
      },
      {
        title: "Fluid compatibility",
        description:
          "The fluid specification and service method must suit the particular vehicle and system.",
      },
      {
        title: "Engine maintenance",
        description:
          "We discuss applicable engine-oil maintenance options, alongside the required oil and filter service.",
      },
      {
        title: "Transmission condition",
        description:
          "Fluid maintenance is considered separately from a shifting fault that needs diagnosis or mechanical repair.",
      },
      {
        title: "Cooling and braking",
        description:
          "Coolant or brake-fluid maintenance is considered according to condition, service requirements and system compatibility.",
      },
      {
        title: "A clear recommendation",
        description:
          "We explain the suggested service and its purpose before you approve the work.",
      },
    ],
    bookingTitle: "Discuss BG fluid service",
    bookingTag: "Vehicle-specific maintenance",
    bookingDescription:
      "Call with your vehicle details. Our team will help identify the applicable fluid service.",
    relatedIds: [
      "oil-change",
      "brake-repair",
      "heating-system",
      "engine-diagnostics",
    ],
    relatedDescription: "Related maintenance and diagnostic services.",
  },
  "battery-services": {
    id: "battery-services",
    title: "Battery Services",
    description:
      "Battery, starting and charging checks to find out why your car is struggling to start.",
    image: "/images/about/diagnostics-tech.jpg",
    imagePosition: "center 45%",
    introTitle: "Find the cause of the slow start.",
    intro:
      "A weak battery is only one possible reason a car will not start. Loose connections, charging problems and starter faults can produce similar symptoms. We test before recommending a replacement and check that the battery type and fit suit your vehicle.",
    signsTitle: "Signs your starting system needs attention",
    signs: [
      "The engine cranks slowly",
      "You hear clicking instead of cranking",
      "The car has needed a jump-start",
      "Connections show visible corrosion",
      "Starting becomes unreliable in cold weather",
      "A battery or charging warning appears",
    ],
    checks: [
      {
        title: "Battery condition",
        description:
          "Testing helps distinguish a discharged battery from one that can no longer deliver adequate starting power.",
      },
      {
        title: "Terminals and cables",
        description:
          "We inspect for loose connections, damage and corrosion that can restrict electrical current.",
      },
      {
        title: "Charging performance",
        description:
          "Charging-system checks help identify faults that leave an otherwise usable battery undercharged.",
