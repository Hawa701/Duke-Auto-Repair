"use client";

import { useEffect, type ComponentPropsWithoutRef } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import { observeReveals } from "@/lib/observe-reveals";
import {
  itemRevealPattern,
  revealStart,
  type RevealPattern,
} from "@/lib/reveal-patterns";
