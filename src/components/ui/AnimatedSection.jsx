"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const MotionLink = motion.create(Link);

/**
 * AnimatedSection - Wraps children in a scroll-triggered animation container.
 * Uses IntersectionObserver for performance.
 *
 * @param {string} animation - CSS class applied on reveal (default: "animate-reveal-up")
 * @param {number} delay - ms delay before animation triggers
 * @param {number} threshold - visibility threshold (0-1)
 * @param {string} className - additional class names
 * @param {boolean} once - if true, only animates once (default: true)
 */
export default function AnimatedSection({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
  once = true,
  as: Tag = "div",
  style,
  ...props
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isVisible = useInView(ref, {
    once,
    amount: threshold,
    margin: "0px 0px -48px 0px",
  });
  const motionProps = {
    ref,
    initial: false,
    animate:
      isVisible
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : reduceMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : undefined,
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      delay: reduceMotion ? 0 : Math.min(delay, 240) / 1000,
      ease: [0.22, 1, 0.36, 1],
    },
    className: `${className} ${isVisible || reduceMotion ? "" : "reveal-init"}`,
    style,
    ...props,
  };

  if (Tag === Link) {
    return <MotionLink {...motionProps}>{children}</MotionLink>;
  }

  if (Tag === "article") {
    return <motion.article {...motionProps}>{children}</motion.article>;
  }

  return (
    <motion.div
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
