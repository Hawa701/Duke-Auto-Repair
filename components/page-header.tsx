import type { CSSProperties } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Entrance from "./entrance";
import "./page-header.css";

type PageHeaderProps = {
  title: string;
  breadcrumb?: string;
  description: string;
