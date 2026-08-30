export const easeOut = "power3.out";
export const easeStrong = "cubic-bezier(0.23, 1, 0.32, 1)";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
