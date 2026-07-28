"use client";

import { useEffect, useRef, useState } from "react";

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
  animation = "animate-reveal-up",
  delay = 0,
  threshold = 0.15,
  className = "",
  once = true,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`${className} ${isVisible ? animation : "reveal-init"}`}
      style={{
        transitionDelay: `${delay}ms`,
        transition:
          "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
