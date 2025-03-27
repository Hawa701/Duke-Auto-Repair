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
    return () => {
      delete root.dataset.overlayScrollbar;
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      pointerId: event.pointerId,
      y: event.clientY,
      scrollTop: window.scrollY,
    };
    setDragging(true);
  };
  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    const root = document.documentElement;
    const current = scrollbarGeometry(
      root.clientHeight,
      root.scrollHeight,
      window.scrollY,
      Math.max(0, root.clientHeight - 12),
    );
    window.scrollTo({
      top: scrollAfterDrag(
        drag.current.scrollTop,
        event.clientY - drag.current.y,
        current.range,
        current.travel,
      ),
      behavior: "instant",
    });
  };
  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
    drag.current = null;
    setDragging(false);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const root = document.documentElement;
    const destinations: Record<string, number> = {
