"use client";

import { business } from "@/lib/business";

import Icon from "./icon";
import GoogleRating from "./google-rating";
import SiteNavigation from "./site-navigation";

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
