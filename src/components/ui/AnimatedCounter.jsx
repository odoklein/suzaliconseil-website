"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

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
  const reduceMotion = useReducedMotion();

  // Parse numeric value from string like "+320%", "-60%", "35", etc.
  const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ""));
  const isNegative = value.includes("-");
  const target = Number.isFinite(numericValue) ? Math.abs(numericValue) : 0;

  const count = useMotionValue(target);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isVisible = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isVisible || reduceMotion) {
      count.set(target);
      return;
    }

    count.set(0);
    const controls = animate(count, target, {
      duration: Math.min(duration, 650) / 1000,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, duration, isVisible, reduceMotion, target]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {isNegative ? "- " : ""}
      {rounded}
      {suffix}
    </motion.span>
  );
}
