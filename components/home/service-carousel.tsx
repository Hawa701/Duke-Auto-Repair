"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "../icon";

type Card = {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  href: string;
};

export default function ServiceCarousel({ cards }: { cards: Card[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const start = element.scrollLeft < 4;
      const end =
        element.scrollLeft + element.clientWidth >= element.scrollWidth - 4;
      setEdges((previous) =>
        previous.start === start && previous.end === end
          ? previous
          : { start, end },
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    element.addEventListener("scroll", schedule, { passive: true });
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      element.removeEventListener("scroll", schedule);
    };
  }, []);

  function move(direction: -1 | 1) {
    const element = track.current;
    const first = element?.firstElementChild;
    if (!element || !first) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 16;
    element.scrollBy({
      left: direction * (first.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our services"
    >
      <ul
        className="track"
        id="home-service-track"
        ref={track}
        tabIndex={0}
        aria-label="Browse services; use the arrow buttons or swipe"
      >
        {cards.map((card) => (
          <li className="service-slide" key={card.id}>
            <Link className="card" href={card.href}>
              <span
                className="ph"
                role="img"
                aria-label={card.title + " at Duke Auto"}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundPosition: card.imagePosition,
                }}
              />
              <span className="b">
                <b>{card.title}</b>
                <span>{card.description}</span>
                <em>
                  Learn more
                  <Icon name="arrow" />
                </em>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nx prev"
        onClick={() => move(-1)}
        disabled={edges.start}
        aria-label="Previous services"
        aria-controls="home-service-track"
      >
        <Icon name="back" />
      </button>
      <button
        type="button"
        className="nx next"
        onClick={() => move(1)}
        disabled={edges.end}
        aria-label="More services"
        aria-controls="home-service-track"
      >
        <Icon name="arrow" />
      </button>
    </div>
  );
}
