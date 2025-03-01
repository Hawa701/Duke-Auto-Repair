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
