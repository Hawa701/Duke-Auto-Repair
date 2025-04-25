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
      visibleItems.forEach((item, batchIndex) => {
        // Retain author styles and existing hover effects after the entrance finishes.
        const originalStyles = {
          transform: item.style.transform,
          opacity: item.style.opacity,
        };
        const restore = () => {
          const { transform, opacity } = originalStyles;
          if (transform) item.style.transform = transform;
          else item.style.removeProperty("transform");
          if (opacity) item.style.opacity = opacity;
          else item.style.removeProperty("opacity");
        };
        const start = revealStart(
          itemRevealPattern(pattern, items.indexOf(item)),
        );
        const animation = animate(
          item,
          {
            opacity: [0.65, 1],
            x: [start.x, 0],
            y: [start.y, 0],
            scale: [start.scale, 1],
          },
          {
            duration: 0.9,
            delay: 0.08 + batchIndex * interval,
            ease: [0.22, 0.61, 0.36, 1],
          },
        );
        const cleanup = () => {
          animation.stop();
          restore();
        };
        cleanups.add(cleanup);
        void animation.then(() => {
          if (active) {
            restore();
            cleanups.delete(cleanup);
          }
        });
      });
    });
    return () => {
      active = false;
      stopObserving();
      cleanups.forEach((cleanup) => cleanup());
      cleanups.clear();
    };
  }, [
    animate,
    reducedMotion,
    replayKey,
    itemsSelector,
    interval,
    pattern,
    scope,
  ]);

  return (
