import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";
import { serviceDetails } from "@/lib/service-details";
import { business } from "@/lib/business";

const service = serviceDetails["bg-fluids"];
export const metadata: Metadata = {
  title: service.title,
  description: `${service.description} ${business.name} in ${business.city}, ${business.region}.`,
};

export default function ServicePage() {
  return <ServiceDetail service={service} />;
}
