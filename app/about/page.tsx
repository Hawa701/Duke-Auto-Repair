import Stagger from "@/components/stagger";
import type { Metadata } from "next";
import { business } from "@/lib/business";
import PageHeader from "@/components/page-header";
import HomeAwards from "@/components/home/awards";
import BookingCta from "@/components/home/booking-cta";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${business.name}, your locally owned repair shop in ${business.city}, built on honest, transparent service centered around you.`,
};

const stats = [
  {
    value: "10",
    suffix: "+",
    label: "Years of experience",
    detail: `Serving ${business.city} drivers`,
  },
