export const normalizePercent = (percent: number): number =>
  isNaN(percent) ? 0 : Math.min(100, Math.max(0, percent));
