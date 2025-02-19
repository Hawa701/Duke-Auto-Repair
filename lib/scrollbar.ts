export function scrollbarGeometry(
  viewportHeight: number,
  contentHeight: number,
  scrollTop: number,
  trackHeight = viewportHeight,
) {
  const range = Math.max(0, contentHeight - viewportHeight);
  const height = Math.min(
    trackHeight,
    Math.max(44, (viewportHeight / Math.max(1, contentHeight)) * trackHeight),
  );
  const travel = Math.max(0, trackHeight - height);
  const progress = range ? Math.min(1, Math.max(0, scrollTop / range)) : 0;
  return { range, height, travel, offset: progress * travel, progress };
