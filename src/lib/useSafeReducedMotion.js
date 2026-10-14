"use client";

import { useSyncExternalStore } from "react";

/*
 * prefers-reduced-motion that is hydration-safe: the server and the hydrating
 * render both read "no preference", then React re-renders with the real value.
 * framer's useReducedMotion reads the media query during hydration, so markup
 * that branches on it mismatches the server HTML.
 */
const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

export default function useSafeReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
