"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useEffect, useState } from "react";
import { revealStart, type RevealPattern } from "@/lib/reveal-patterns";

type EntranceProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "transition"
> & {
  delay?: number;
  inView?: boolean;
  pattern?: RevealPattern;
  waitForFonts?: boolean;
};

export default function Entrance({
  children,
  className = "",
  delay = 0,
  inView = false,
  pattern = "up",
  waitForFonts = false,
