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
          (entry) =>
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.01 &&
            pending.has(entry.target as HTMLElement),
        )
        .map((entry) => entry.target as HTMLElement);

      if (!visibleItems.length) return;
      visibleItems.forEach((item) => {
        pending.delete(item);
        observer.unobserve(item);
      });
