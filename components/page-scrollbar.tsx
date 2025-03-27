"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { scrollbarGeometry, scrollAfterDrag } from "@/lib/scrollbar";

type Geometry = ReturnType<typeof scrollbarGeometry>;

export default function PageScrollbar() {
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{
    pointerId: number;
    y: number;
    scrollTop: number;
  } | null>(null);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const root = document.documentElement;
    let frame = 0;
    const measure = () => {
      frame = 0;
      setGeometry(
        scrollbarGeometry(
          root.clientHeight,
          root.scrollHeight,
          window.scrollY,
          Math.max(0, root.clientHeight - 12),
        ),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    // Keep the native scrollbar until this enhancement has mounted. Without
    // JavaScript visitors retain a fully functional native scrollbar.
    root.dataset.overlayScrollbar = "true";
    measure();
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    observer.observe(root);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
