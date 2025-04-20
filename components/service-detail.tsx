import Link from "next/link";
import PageHeader from "@/components/page-header";
import BookingCta from "@/components/home/booking-cta";
import GoogleRating from "@/components/google-rating";
import Icon from "@/components/icon";
import ServiceIcon from "@/components/service-icon";
import { business } from "@/lib/business";
import { serviceGroups } from "@/lib/services";
import type { ServiceDetail as ServiceDetailContent } from "@/lib/service-details";
import "@/app/services/service-detail.css";

const services = serviceGroups.flatMap((group) => group.services);

export default function ServiceDetail({
  service,
}: {
  service: ServiceDetailContent;
}) {
  const relatedServices = service.relatedIds.flatMap((id) =>
    services.filter((item) => item.id === id),
