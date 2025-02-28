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
