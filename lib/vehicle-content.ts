import type { SiloSection } from "./services";

// Brand page copy from "Vehicle Content Review for Technicians & Developer
// Guide". Linked keywords use [text](/path/) and render bold (see
// components/rich-text.tsx), per the guide's internal-linking instructions.

const BRAKES = "/brake-repair/";
const DIAGNOSTICS = "/check-engine-light-diagnostic/";
const ALIGNMENT = "/wheel-alignment/";
const OIL = "/oil-change-service/";
const AC = "/car-ac-repair/";
const SUSPENSION = "/suspension-repair/";
const TRANSMISSION = "/transmission-repair/";
const HONDA_COUPON = "/promotions/#coupon-honda";
const MECHANICS = "/mechanic-alexandria-va/";

export const vehicleContent: Record<
  string,
  { intro: string; sections: SiloSection[] }
> = {
  toyota: {
    intro:
      "Alexandria drivers rely on Toyotas for their legendary longevity and resale value. Whether you commute daily in a Camry or Corolla, haul the family in a RAV4 or Highlander, or depend on the rugged capability of a Tacoma or 4Runner, Duke Auto Repair is your trusted alternative to the high-priced Toyota dealership.",
    sections: [
      {
        title: "Trustworthy Toyota Auto Repair",
        body: `Our ASE-certified technicians are exceptionally well-versed in the specific needs of the Toyota lineup. We specialize in high-mileage maintenance to push your Toyota past the 200,000-mile mark. From replacing leaking water pumps on older V6 engines to performing routine [brake pad replacements](${BRAKES}), hybrid battery health checks for your Prius, and comprehensive [tire sales and wheel alignments](${ALIGNMENT}) for your Tacoma, our team has you covered.`,
      },
      {
        title: "Why Choose Duke Auto Repair For Your Toyota",
        body: "We use high-quality OEM Toyota fluids and premium aftermarket parts to protect your vehicle's warranty. When you bring your Toyota to our repair shop, we provide a transparent, flat-rate itemized estimate before starting any work. We work efficiently to minimize your downtime because we know a dependable vehicle is a priority.",
      },
      {
        title: "Toyota Dashboard Warning Lights & Diagnostics",
        body: `When a warning light appears on your Toyota dashboard, prompt [diagnostics](${DIAGNOSTICS}) are key. Common Toyota diagnostic codes often stem from faulty EVAP canister valves, mass airflow sensor issues, or oxygen sensor failures. At Duke Auto Repair, we provide Digital Vehicle Inspections (DVI) sent straight to your phone to pinpoint the exact fault.`,
      },
    ],
  },
  honda: {
    intro:
      "Hondas are engineered for incredible reliability and efficiency, making them a staple on Alexandria roads. From routine maintenance on your Civic or Accord to comprehensive family-vehicle care for your CR-V, Odyssey, or Pilot, Duke Auto Repair delivers expert Honda service without the premium dealership prices.",
    sections: [
      {
        title: "Trustworthy Honda Auto Repair",
        body: `Our technicians understand the unique engineering of Honda's VTEC engines and drivetrains. We expertly handle critical Honda maintenance milestones, including crucial timing belt and water pump replacements on V6 engines, valve clearance adjustments, and addressing [AC compressor issues](${AC}) common in older CR-Vs.`,
      },
      {
        title: "Why Choose Duke Auto Repair For Your Honda",
        body: `Using the right fluids is vital, which is why we utilize factory-spec fluids like Honda Dual Pump Fluid II. Our goal is to ensure you receive dealership-level precision paired with the honest communication of a neighborhood shop. To help you avoid inflated dealership prices, we offer a [$25 Off Honda A1/B1 Service Coupon](${HONDA_COUPON}) for our customers, directly saving you money on scheduled maintenance. Enjoy our free 5-mile local shuttle service so your daily routine isn't interrupted while we service your vehicle.`,
      },
      {
        title: "Honda Dashboard Warning Lights & Diagnostics",
        body: `Frequent Honda warning lights are triggered by misfires, VTEC solenoid pressure issues, or VVT system faults. Duke Auto Repair provides comprehensive computer [diagnostics](${DIAGNOSTICS}) and transparent flat-rate pricing to accurately identify the issue and perform reliable repairs.`,
      },
    ],
  },
  nissan: {
    intro:
      `Skip the long waits and inflated prices at the local Nissan dealership. Duke Auto Repair provides expert Nissan repairs in Alexandria. Whether you drive an Altima, Sentra, Rogue, Pathfinder, or Frontier, trust our [ASE-certified mechanics](${MECHANICS}) to keep your Nissan running safely and smoothly.`,
    sections: [
      {
        title: "Trustworthy Nissan Auto Repair",
        body: `Because Nissan relies heavily on Continuously Variable Transmissions (CVT), strict maintenance is absolutely critical. Our technicians specialize in Nissan CVT [fluid exchanges](${TRANSMISSION}) and diagnostics to prevent premature transmission failure.`,
      },
      {
        title: "Why Choose Duke Auto Repair For Your Nissan",
        body: `We utilize factory-specified NS-2 and NS-3 CVT fluids and high-quality OEM-equivalent parts. We provide transparent estimates and clear explanations of what needs immediate attention versus what can wait. Need a major CVT [transmission repair](${TRANSMISSION})?`,
      },
      {
        title: "Nissan Dashboard Warning Lights & Diagnostics",
        body: `An illuminated CVT transmission warning light requires immediate attention. Our [ASE-certified mechanics](${MECHANICS}) run full diagnostic scans to resolve mass airflow sensor failures or early CVT performance issues quickly.`,
      },
    ],
  },
  ford: {
    intro:
      "From the hardworking F-150 to versatile SUVs like the Explorer and Escape, Ford builds vehicles designed to endure. At Duke Auto Repair, we provide Ford owners with expert maintenance and heavy-duty repairs at competitive flat-rate prices.",
    sections: [
      {
        title: "Trustworthy Ford Auto Repair",
        body: `Our mechanics are highly experienced with complex diagnostics for EcoBoost engines. We expertly handle common Ford repairs, such as replacing timing chains, addressing water pump failures, and performing heavy-duty [brake and suspension repairs](${SUSPENSION}) for F-Series trucks.`,
      },
      {
        title: "Why Choose Duke Auto Repair For Your Ford",
        body: "We focus on durable repairs using high-quality Motorcraft OEM parts. With our heavy-duty lifts and advanced diagnostic equipment, we deliver dealership-level capabilities without the dealership price tag or extended wait times. We also offer secure after-hours drop-off and Text-to-Pay for ultimate convenience.",
      },
      {
        title: "Ford Dashboard Warning Lights & Diagnostics",
        body: "Common issues in EcoBoost engines and F-Series trucks include turbocharger boost sensor faults and EVAP system leaks. We use advanced diagnostic scanners and provide photo updates directly to your phone.",
      },
    ],
  },
  hyundai: {
    intro:
      "Duke Auto Repair is dedicated to providing exceptional, cost-effective care for your Elantra, Sonata, Tucson, or Santa Fe in Alexandria, VA as your premier dealership alternative.",
    sections: [
      {
        title: "Trustworthy Hyundai Auto Repair",
        body: "Many Hyundai models utilize Gasoline Direct Injection (GDI) engines. We specialize in GDI carbon cleanings, monitoring engine oil consumption in older Theta II engines, and replacing faulty sensors.",
      },
      {
        title: "Why Choose Duke Auto Repair For Your Hyundai",
        body: "We provide dealership-level expertise with the honest, transparent flat-rate pricing of a locally owned business.",
      },
      {
        title: "Hyundai Dashboard Warning Lights & Diagnostics",
        body: `Hyundai GDI engines frequently trigger codes related to intake valve carbon buildup. Duke Auto Repair delivers fast, precise [diagnostic evaluations](${DIAGNOSTICS}).`,
      },
    ],
