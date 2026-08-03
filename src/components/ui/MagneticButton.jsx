"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const MotionLink = motion.create(Link);

/**
 * MagneticButton - A button that subtly follows the cursor when hovered,
 * creating a magnetic/gravitational pull effect. Premium interaction design.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.08,
  ...props
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 24, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.45 });

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(Math.max(-4, Math.min(4, (e.clientX - centerX) * strength)));
    y.set(Math.max(-3, Math.min(3, (e.clientY - centerY) * strength)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "magnetic-btn-primary",
    "outline-light": "magnetic-btn-outline-light",
    outline: "magnetic-btn-outline",
    lime: "magnetic-btn-lime",
  };

  const combinedClasses = `magnetic-btn ${variants[variant] || variants.primary} ${className}`;

  const style = reduceMotion ? undefined : { x: springX, y: springY };

  if (href) {
    return (
      <MotionLink
        ref={ref}
        href={href}
        className={combinedClasses}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <span className="magnetic-btn-text">{children}</span>
        <span className="magnetic-btn-shine" />
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={combinedClasses}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="magnetic-btn-text">{children}</span>
      <span className="magnetic-btn-shine" />
    </motion.button>
  );
}
