import type { CSSProperties } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Entrance from "./entrance";
import "./page-header.css";

type PageHeaderProps = {
  title: string;
  breadcrumb?: string;
  description: string;
  image: string;
  imagePosition?: string;
  breadcrumbs?: { href: string; label: string }[];
  hasLift?: boolean;
};

export default function PageHeader({
  title,
  breadcrumb = title,
  description,
  image,
