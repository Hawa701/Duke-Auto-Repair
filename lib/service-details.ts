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
