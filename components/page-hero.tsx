import { business } from "@/lib/business";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Icon from "./icon";
import SiteNavigation from "./site-navigation";
import "./page-hero.css";

type PageHeroProps = {
  title: string;
  description: string;
