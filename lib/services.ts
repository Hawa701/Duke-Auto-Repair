import type { ServiceIconName } from "@/components/service-icon";

type ServiceGroup = {
  id: string;
  title: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  services: {
    id: string;
    name: string;
    description: string;
    icon: ServiceIconName;
    href: string;
  }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "maintenance",
    title: "Maintenance.",
    label: "Maintenance",
    description:
      "Routine care that keeps small problems from becoming big ones.",
    image: "/images/about/techs-under-hood.jpg",
    imageAlt: "Two Duke Auto technicians working together under the hood",
    imagePosition: "50% 40%",
    services: [
      {
        id: "oil-change",
        href: "/services/oil-change",
        name: "Oil change",
        description:
          "Fresh oil and a new filter to keep your engine running strong.",
        icon: "oil",
      },
      {
        id: "bg-fluids",
        href: "/services/bg-fluids",
        name: "BG fluid services",
        description:
          "Professional BG fluid service to protect your engine and transmission.",
        icon: "fluids",
      },
      {
        id: "battery-services",
        href: "/services/battery-services",
        name: "Battery services",
        description: "Testing and replacement so your car starts reliably.",
        icon: "battery",
      },
    ],
  },
  {
    id: "repairs",
    title: "Repairs.",
    label: "Repairs",
    description:
      "Brakes, suspension, heating and cooling, all cared for under one roof.",
    image: "/images/about/brake-tech.jpg",
    imageAlt: "A Duke Auto technician servicing the brakes on a truck",
    imagePosition: "35% 50%",
    services: [
      {
        id: "brake-repair",
        href: "/services/brakes",
        name: "Brake repair",
        description: "Free brake inspection and premium brake service.",
        icon: "brakes",
      },
      {
        id: "suspension-steering",
        href: "/services/suspension-steering",
        name: "Suspension and steering",
        description: "A smooth, safe, controlled ride.",
        icon: "suspension",
      },
      {
        id: "air-conditioning",
        href: "/services/air-conditioning",
        name: "Air conditioning repair",
        description:
          "Professional A/C service to keep you cool through Virginia summers.",
        icon: "air-conditioning",
      },
      {
        id: "heating-system",
        href: "/services/heating-system",
        name: "Heating system service",
        description: "Heat and defrost that work when the cold mornings come.",
        icon: "heating",
      },
    ],
  },
  {
    id: "alignment",
    title: "Wheel alignment.",
    label: "Wheel alignment",
    description:
      "Keep your car tracking straight for a smooth, controlled drive.",
    image: "/images/about/alignment-tech.jpg",
    imageAlt: "A Duke Auto technician setting up a wheel alignment",
    imagePosition: "70% 50%",
    services: [
      {
        id: "wheel-alignment",
        href: "/services/wheel-alignment",
        name: "Wheel alignment",
        description: "Drive straight, ride smooth, and reduce uneven wear.",
        icon: "alignment",
      },
    ],
  },
  {
    id: "inspection",
    title: "Diagnostics and inspections.",
    label: "Diagnostics and inspections",
    description:
      "Find out what's wrong, and get your state inspection done in one stop.",
