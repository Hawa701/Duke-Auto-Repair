// Observe individual cards so offscreen rows never consume their entrance early.
export function observeReveals(
  items: HTMLElement[],
  reveal: (visibleItems: HTMLElement[]) => void,
) {
  if (typeof IntersectionObserver === "undefined") return () => {};

  const pending = new Set(items);
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleItems = entries
        .filter(
