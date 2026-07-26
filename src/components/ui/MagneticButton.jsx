"use client";

import { useRef, useState } from "react";
import Link from "next/link";

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
  strength = 0.3,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "magnetic-btn-primary",
    "outline-light": "magnetic-btn-outline-light",
    outline: "magnetic-btn-outline",
    lime: "magnetic-btn-lime",
  };

  const combinedClasses = `magnetic-btn ${variants[variant] || variants.primary} ${className}`;

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition:
      position.x === 0
        ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
        : "transform 0.15s ease-out",
  };

  if (href) {
    return (
      <Link
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
      </Link>
    );
  }

  return (
    <button
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
    </button>
  );
}
