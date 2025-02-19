export type RevealPattern = "up" | "down" | "left" | "right" | "zoom" | "fade";

export function revealStart(pattern: RevealPattern) {
  // Horizontal travel stays within the smallest page gutter on phones.
  return {
    x: pattern === "left" ? -16 : pattern === "right" ? 16 : 0,
    y: pattern === "up" ? 22 : pattern === "down" ? -16 : 0,
    scale: pattern === "zoom" ? 0.96 : 1,
  };
}

export function itemRevealPattern(
  pattern: RevealPattern | "alternate",
  index: number,
): RevealPattern {
  return pattern === "alternate"
    ? index % 2 === 0
      ? "left"
      : "right"
    : pattern;
}
