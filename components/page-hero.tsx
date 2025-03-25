import { business } from "@/lib/business";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Icon from "./icon";
import SiteNavigation from "./site-navigation";
import "./page-hero.css";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  imagePlacement?: "full" | "right";
  imageSize?: string;
  imageMask?: string;
  links?: { href: string; label: string }[];
  sectionNavigation?: ReactNode;
};

export default function PageHero({
  title,
  description,
  image,
  imagePosition = "center",
  imagePlacement = "full",
  imageSize,
  imageMask,
  links = [],
  sectionNavigation,
}: PageHeroProps) {
  return (
