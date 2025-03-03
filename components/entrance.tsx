"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useEffect, useState } from "react";
import { revealStart, type RevealPattern } from "@/lib/reveal-patterns";

type EntranceProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "transition"
> & {
  delay?: number;
