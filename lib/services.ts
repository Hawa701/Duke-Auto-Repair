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
