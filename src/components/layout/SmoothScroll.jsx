"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { registerLenis } from "../../lib/smooth-scroll";

/*
 * Lenis smooth scrolling for the public site. Skipped entirely when the visitor
 * asks for reduced motion: native scrolling is the accessible default there.
 * Anchor links keep the fixed navbar offset that `scroll-padding-top` used to
 * provide (Lenis scrolls programmatically, so CSS padding no longer applies).
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      anchors: { offset: -88 },
      autoRaf: true,
    });
    registerLenis(lenis);

    return () => {
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
