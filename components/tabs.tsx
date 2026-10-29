"use client";

import { useRef, useState, type ReactNode } from "react";

/** Accessible tabs. Every panel is rendered (and crawlable); inactive ones are hidden. */
export default function Tabs({
  id,
  label,
  tabs,
}: {
  id: string;
  label: string;
  tabs: { id: string; label: string; content: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label={label}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              refs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${tab.id}`}
            aria-selected={active === index}
            aria-controls={`${id}-panel-${tab.id}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") select(index + 1);
              else if (event.key === "ArrowLeft") select(index - 1);
              else if (event.key === "Home") select(0);
              else if (event.key === "End") select(tabs.length - 1);
              else return;
              event.preventDefault();
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${id}-panel-${tab.id}`}
          aria-labelledby={`${id}-tab-${tab.id}`}
          hidden={active !== index}
          tabIndex={0}
          className="tab-panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
