"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCounter - Animates a number from 0 to target value when visible.
 * Supports prefix/suffix (e.g., "+", "%", "k").
 */
export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
}) {
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);

  // Parse numeric value from string like "+320%", "-60%", "35", etc.
  const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ""));
  const isNegative = value.includes("-");
  const target = Number.isFinite(numericValue) ? Math.abs(numericValue) : 0;

  // SSR and first paint: show real number so crawlers and no-JS users see correct stats
  const [count, setCount] = useState(target);

  useEffect(() => {
    hasAnimatedRef.current = false;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          requestAnimationFrame((startTime) => {
            setCount(0);
            const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
            };
            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isNegative ? "- " : ""}
      {count}
      {suffix}
    </span>
  );
}
