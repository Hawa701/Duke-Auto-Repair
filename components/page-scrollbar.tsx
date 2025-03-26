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
