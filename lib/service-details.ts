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
      },
      {
        title: "Starting circuit",
        description:
          "Where symptoms call for it, we investigate the starter and related electrical connections.",
      },
      {
        title: "Suitable replacement",
        description:
          "A replacement must match the required size, capacity and battery technology, including AGM where specified.",
      },
      {
        title: "Installation requirements",
        description:
          "We check vehicle-specific procedures, including any battery-management reset needed after replacement.",
      },
    ],
    bookingTitle: "Arrange a battery check",
    bookingTag: "Test before replacing",
    bookingDescription:
      "Tell us how the car behaves when you try to start it and whether it has needed a jump.",
    relatedIds: [
      "engine-diagnostics",
      "oil-change",
      "state-inspection",
      "bg-fluids",
    ],
    relatedDescription: "Useful checks for dependable everyday driving.",
  },
  "suspension-steering": {
    id: "suspension-steering",
    title: "Suspension & Steering",
    description:
      "Get to the cause of clunks, bouncing, loose steering and changes in handling.",
    image: "/images/about/techs-under-hood.jpg",
    imagePosition: "center 50%",
    introTitle: "A steadier ride starts with a proper inspection.",
    intro:
      "Steering and suspension components work together to control the vehicle and maintain road contact. Wear can develop gradually. We inspect the relevant parts and explain whether the concern calls for a repair, an alignment, or further testing before recommending work.",
    signsTitle: "Signs your suspension or steering needs attention",
    signs: [
      "Clunking over bumps or during turns",
      "Repeated bouncing after a bump",
      "Loose or imprecise steering",
      "Excessive body roll in corners",
      "Uneven or scalloped tread wear",
      "The vehicle sits lower on one side",
    ],
    checks: [
      {
        title: "Shocks and struts",
        description:
          "We assess damping, mount condition and signs of leakage or damage, rather than relying on mileage alone.",
      },
      {
        title: "Steering joints",
        description:
          "Tie rods and other steering connections are checked for wear, damage and excessive movement.",
      },
      {
        title: "Ball joints and bushings",
        description:
          "We inspect load-bearing joints and rubber components that help locate and control suspension movement.",
      },
      {
        title: "Springs and ride height",
        description:
          "Broken or sagging springs and unusual ride height can affect handling and alignment.",
      },
      {
        title: "Steering assistance",
        description:
          "Checks depend on whether your vehicle uses hydraulic assistance, electric assistance, or another steering design.",
      },
      {
        title: "Alignment after repairs",
        description:
          "We determine whether wheel-angle checks or adjustment are needed after replacing relevant components.",
      },
    ],
    bookingTitle: "Check your ride and handling",
    bookingTag: "Find the cause of the clunk",
    bookingDescription:
      "Tell us when the noise or handling change happens, including speed, bumps and turns.",
    relatedIds: [
      "wheel-alignment",
      "brake-repair",
      "state-inspection",
      "engine-diagnostics",
    ],
    relatedDescription:
      "Other services that support controlled, predictable handling.",
  },
  "air-conditioning": {
    id: "air-conditioning",
    title: "Air Conditioning Repair",
    description:
      "Cooling and airflow checks to find out why your cabin is not getting comfortable.",
    image: "/images/about/diagnostics-tech.jpg",
    imagePosition: "center 45%",
    introTitle: "Cool air starts with finding the actual fault.",
    intro:
      "Warm air can come from a refrigerant leak, a control fault, restricted airflow or a component problem. We check system performance before recommending a repair. The refrigerant and service procedure must match the vehicle; adding refrigerant alone does not fix a leak.",
    signsTitle: "Signs your A/C needs attention",
    signs: [
      "Air stays warm with cooling selected",
      "Cooling fades in slow traffic",
      "Vent airflow is noticeably weak",
      "Cabin temperature changes unexpectedly",
      "Unusual sounds occur with A/C on",
      "Musty odors come from the vents",
    ],
    checks: [
      {
        title: "Cooling performance",
        description:
          "We compare vent temperature and operating behavior with the conditions when your complaint occurs.",
      },
      {
        title: "Leaks and refrigerant",
        description:
          "We investigate refrigerant loss and confirm the vehicle's refrigerant type before discussing service options.",
      },
      {
        title: "Compressor operation",
        description:
          "Compressor operation and its controls are checked as part of the diagnosis, rather than assuming replacement is needed.",
      },
      {
        title: "Condenser and fans",
        description:
          "Airflow through the condenser and cooling-fan operation can affect performance, particularly at low road speeds.",
      },
      {
        title: "Cabin airflow",
        description:
          "We check the cabin filter, blower operation and airflow restrictions where applicable.",
      },
      {
        title: "Temperature controls",
        description:
          "Blend doors, actuators and relevant controls are considered when temperatures do not match the selected setting.",
      },
    ],
    bookingTitle: "Arrange an A/C diagnosis",
    bookingTag: "Comfort starts with diagnosis",
    bookingDescription:
      "Call with your vehicle details to confirm the appropriate A/C service and availability.",
    relatedIds: [
      "heating-system",
      "engine-diagnostics",
      "battery-services",
      "bg-fluids",
    ],
    relatedDescription: "Related comfort, electrical and maintenance services.",
  },
  "heating-system": {
    id: "heating-system",
    title: "Heating System Service",
    description:
      "Restore reliable cabin heat, airflow and windshield clearing for colder days.",
    image: "/images/about/shop-floor.jpg",
    imagePosition: "center 50%",
    introTitle: "Warm journeys and a clearer view ahead.",
    intro:
      "On many vehicles, cabin heat depends on warm engine coolant passing through a heater core. Poor heat may involve coolant flow, engine temperature or cabin-air controls. We check the cause before recommending parts, and tailor the diagnosis to your vehicle's heating system.",
    signsTitle: "Signs your heater needs attention",
    signs: [
      "The vents blow cold after warm-up",
      "Heat varies between vents",
      "The blower works only at some speeds",
      "The windshield clears slowly",
      "A sweet smell develops in the cabin",
      "Coolant level repeatedly drops",
    ],
    checks: [
      {
        title: "Coolant level and leaks",
        description:
          "We check coolant condition and look for leaks that can reduce circulation through the heating system.",
      },
      {
        title: "Thermostat operation",
        description:
          "An engine that does not reach its intended operating temperature can provide weak cabin heat.",
      },
      {
        title: "Heater-core circulation",
        description:
          "We assess flow and signs of leakage before recommending cleaning, repairs or replacement.",
      },
      {
        title: "Blower and airflow",
        description:
          "The fan, speed controls and cabin filter are checked when airflow is weak or intermittent.",
      },
      {
        title: "Blend doors and controls",
        description:
          "We check how the system routes air and responds to your temperature and outlet selections.",
      },
      {
        title: "Defrost performance",
        description:
          "We verify air reaches the windshield outlets and discuss any related A/C or humidity-control concerns.",
      },
    ],
    bookingTitle: "Book a heating-system check",
    bookingTag: "Heat and visibility matter",
    bookingDescription:
      "Tell us whether the problem is cold air, weak airflow or a windshield that will not clear.",
    relatedIds: [
      "air-conditioning",
      "bg-fluids",
      "engine-diagnostics",
      "state-inspection",
    ],
    relatedDescription: "Other services for comfort and everyday visibility.",
  },
  "wheel-alignment": {
    id: "wheel-alignment",
    title: "Wheel Alignment",
    description:
      "Wheel-angle checks and adjustments for straighter tracking and more even tread wear.",
    image: "/images/about/alignment-rig.jpg",
    imagePosition: "center 50%",
    introTitle: "Point your wheels in the right direction.",
    intro:
      "Alignment adjusts wheel angles to the vehicle manufacturer's specifications. It is different from wheel balancing, and it cannot compensate for worn steering or suspension parts. We check the relevant condition first and explain what can be adjusted on your vehicle.",
    signsTitle: "When to have alignment checked",
    signs: [
      "The car pulls on a level road",
      "The steering wheel sits off-center",
      "Tread wear is heavier on one edge",
      "You've struck a pothole or curb",
      "Steering or suspension parts were replaced",
      "Handling has changed without a clear cause",
    ],
    checks: [
      {
        title: "Before adjustment",
        description:
          "Tread condition, pressures and relevant steering or suspension wear are checked before setting angles.",
      },
      {
        title: "Toe settings",
        description:
          "Toe describes how the wheels point inward or outward when viewed from above.",
      },
      {
        title: "Camber readings",
        description:
          "Camber describes inward or outward wheel tilt. Adjustment depends on the vehicle's suspension design.",
      },
      {
        title: "Caster readings",
        description:
          "Caster relates to the steering-axis angle and is checked against the appropriate vehicle specifications.",
      },
      {
        title: "Available adjustments",
        description:
          "We set the angles that are adjustable and explain damage or wear that prevents an acceptable result.",
      },
      {
        title: "Final verification",
        description:
          "Final readings and steering-wheel position are reviewed, with a road check where appropriate.",
      },
    ],
    bookingTitle: "Arrange a wheel alignment",
    bookingTag: "Measured against specifications",
    bookingDescription:
      "Tell us about any recent impacts, component replacements or changes in steering feel.",
    relatedIds: [
      "suspension-steering",
      "brake-repair",
      "state-inspection",
      "oil-change",
    ],
    relatedDescription:
      "Related checks for handling, stopping and routine care.",
  },
  "engine-diagnostics": {
    id: "engine-diagnostics",
    title: "Check Engine Diagnostics",
    description:
      "Testing that goes beyond a code scan to understand why your warning light is on.",
    image: "/images/about/diagnostics-portrait.jpg",
    imagePosition: "center 40%",
    introTitle: "Understand the warning before replacing parts.",
    intro:
      "A diagnostic trouble code points toward a condition or system; it does not automatically identify a failed part. We combine stored information, operating data and targeted tests to build a repair recommendation. A flashing check-engine light needs prompt attention: minimize driving and contact us about next steps.",
    signsTitle: "Reasons to arrange a diagnostic visit",
    signs: [
      "The check-engine light stays on",
      "A warning light returns after a reset",
      "The engine runs roughly or stalls",
      "Starting takes longer than usual",
      "Acceleration or fuel economy changes",
      "An emissions test reports an OBD problem",
    ],
    checks: [
      {
        title: "Your driving symptoms",
        description:
          "We ask when the concern occurs, including engine temperature, road speed and recent repair history.",
      },
      {
        title: "Codes and recorded data",
        description:
          "Stored codes and available freeze-frame information help show the conditions present when a fault was detected.",
      },
      {
        title: "Live operating information",
        description:
          "Sensor readings and system responses help narrow the investigation under the relevant conditions.",
      },
      {
        title: "Targeted component tests",
        description:
          "Further tests are selected from the evidence rather than treating a fault code as a parts-replacement order.",
      },
      {
        title: "A repair explanation",
        description:
          "We explain the findings and recommended next steps before you decide which work to approve.",
      },
      {
        title: "Verification and readiness",
        description:
          "After an approved repair, we review operation and any remaining monitor-readiness requirements. Clearing codes alone is not a repair.",
      },
    ],
    bookingTitle: "Book a diagnostic visit",
    bookingTag: "Diagnosis before replacement",
    bookingDescription:
      "Describe the light and any driving symptoms. If it is flashing, call before continuing your journey.",
    relatedIds: [
      "state-inspection",
      "battery-services",
      "oil-change",
      "bg-fluids",
    ],
    relatedDescription: "Other services that may follow a diagnostic visit.",
  },
  "state-inspection": {
    id: "state-inspection",
    title: "State Safety & Emissions",
    description:
      "Virginia safety inspections and emissions testing, with clear guidance about your vehicle's requirements.",
    image: "/images/about/state-inspection.jpg",
    imagePosition: "center 55%",
    introTitle: "Two different inspections. One helpful team.",
    intro:
      "Virginia safety inspections assess required safety equipment. Emissions testing is a separate requirement for many eligible vehicles in Northern Virginia, including Alexandria. Eligibility depends on the vehicle and registration circumstances. Call with your vehicle details to check what is due and arrange your visit.",
    signsTitle: "When to arrange an inspection",
    signs: [
      "Your safety-inspection sticker is due",
      "DMV requests an emissions result",
      "Your emissions certificate is nearing expiry",
      "You're registering a vehicle in Virginia",
      "You need a reinspection after repairs",
