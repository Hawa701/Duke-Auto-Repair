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
    question: "Do I need an appointment for service?",
    answer: `Call our front desk at ${business.phoneDisplay} to arrange a visit or check availability. We'll find a time that suits you.`,
  },
  {
    question: "How long does a standard oil change take?",
    answer:
      "Most oil changes are done the same day, often while you wait in our lounge. Call the front desk and we'll give you a time for your car.",
  },
  {
    question: "What is a digital vehicle health inspection?",
    answer:
      "It comes free with every visit. We check things like tire wear, brake life and fluids, then show you what's good, what needs attention, and what can wait. The decision is always yours.",
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHeader
        title="Contact Us"
        breadcrumb="Contact us"
