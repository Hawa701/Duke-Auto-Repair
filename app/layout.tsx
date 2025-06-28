import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleReviewsProvider from "@/components/google-reviews-provider";
import PageScrollbar from "@/components/page-scrollbar";
import { barlow, barlowCondensed } from "./fonts";
import "./globals.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: {
    default: "Duke Auto Repair",
    template: "%s | Duke Auto Repair",
  },
  description:
    "Expert auto care, complimentary digital inspections, and concierge vehicle pick-up and drop-off at Duke Auto Repair & Service.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
