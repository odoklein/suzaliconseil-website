"use client";

import React from "react";
import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  ...props
}) {
  // Base styles shared by all buttons
  const baseStyles =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

  // Variant-specific styles
  const variants = {
    primary:
      "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#C8FF8D] shadow-[0_12px_30px_-18px_rgba(13,51,43,0.72)]",
    outline:
      "border border-[#0D332B]/25 text-[#0D332B] hover:border-[#0D332B]/50 hover:bg-white",
    "outline-light":
      "border border-white/25 text-[#F7FAF8] hover:border-white/50 hover:bg-white/10",
    default: "bg-[#0D332B] text-[#F7FAF8] hover:bg-[#1A4D43]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.default} ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
