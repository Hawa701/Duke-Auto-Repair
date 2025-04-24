"use client";

import { useEffect, type ComponentPropsWithoutRef } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import { observeReveals } from "@/lib/observe-reveals";
import {
  itemRevealPattern,
  revealStart,
  type RevealPattern,
} from "@/lib/reveal-patterns";

type StaggerProps = ComponentPropsWithoutRef<"div"> & {
  replayKey?: string;
  itemsSelector?: string;
  interval?: number;
  pattern?: RevealPattern | "alternate";
};

export default function Stagger({
  children,
  className = "",
  replayKey,
  itemsSelector = ":scope > *",
  interval = 0.1,
  pattern = "up",
  ...props
}: StaggerProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !scope.current) return;
    const items = Array.from(
      scope.current.querySelectorAll<HTMLElement>(itemsSelector),
    );
    if (!items.length) return;

    let active = true;
    const cleanups = new Set<() => void>();
    const stopObserving = observeReveals(items, (visibleItems) => {
