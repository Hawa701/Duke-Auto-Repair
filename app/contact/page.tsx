import { business } from "@/lib/business";
import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import BookingCta from "@/components/home/booking-cta";
import Icon from "@/components/icon";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${business.name} in ${business.city} for vehicle care questions, quotes, and service appointments. Call ${business.phoneDisplay} or visit ${business.shortAddress}.`,
};

const faqs = [
  {
    question: "What types of vehicles do you service?",
    answer:
      "We work on everyday cars, SUVs and light trucks. If you're not sure about your vehicle, call the front desk with the make and model and we'll let you know.",
  },
  {
