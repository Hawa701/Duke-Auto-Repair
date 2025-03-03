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
  ...props
}: EntranceProps) {
  const reducedMotion = useReducedMotion();
  const [fontsReady, setFontsReady] = useState(!waitForFonts);
  useEffect(() => {
    if (!waitForFonts) return;
    let active = true;
    const ready = () => {
      if (active) setFontsReady(true);
    };
    void document.fonts.ready.then(ready, ready);
    return () => {
      active = false;
    };
  }, [waitForFonts]);
  const visible = { opacity: 1, x: 0, y: 0, scale: 1 };
  return (
    <motion.div
      {...props}
      className={`entrance ${className}`}
      data-wait-for-fonts={waitForFonts || undefined}
      initial={{ opacity: waitForFonts ? 0 : 0.6, ...revealStart(pattern) }}
      animate={inView || !fontsReady ? undefined : visible}
      whileInView={inView && fontsReady ? visible : undefined}
      viewport={{ once: true, amount: "some", margin: "0px 0px -80px 0px" }}
      transition={{
        duration: reducedMotion ? 0 : 0.9,
        delay: reducedMotion ? 0 : delay + (inView ? 0.08 : 0),
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
