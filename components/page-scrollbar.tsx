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
