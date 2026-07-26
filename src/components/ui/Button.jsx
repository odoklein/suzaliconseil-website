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
    "inline-flex items-center justify-center px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg uppercase tracking-wide min-w-[200px]";

  // Variant-specific styles
  const variants = {
    primary:
      "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#a0eb50] hover:scale-105 transform shadow-lg hover:shadow-xl font-bold",
    outline:
      "border-2 border-[#1A4D43] text-[#1A4D43] hover:bg-[#1A4D43] hover:text-[#B0FF5B] font-bold",
    "outline-light":
      "border-2 border-white/20 text-white hover:bg-white hover:text-[#0D332B] font-bold backdrop-blur-sm",
    default: "bg-primary text-white hover:bg-primary/90",
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
