"use client";

import Image from "next/image";
import { useState } from "react";

/*
 * CoverImage - an article visual inside a fixed-aspect frame whose ground is
 * ink-2, so a failed load never shows a broken icon or overflowing alt text.
 * On error it swaps to `fallbackSrc` when given; otherwise it leaves the plain
 * ink-2 frame, or removes the frame entirely when `hideOnError` is set.
 */
export default function CoverImage({
  src,
  fallbackSrc,
  alt = "",
  sizes = "100vw",
  priority = false,
  hideOnError = false,
  className = "",
  imageClassName = "object-cover",
}) {
  const [current, setCurrent] = useState(src || fallbackSrc || null);
  const [failed, setFailed] = useState(!current);

  const handleError = () => {
    if (fallbackSrc && current !== fallbackSrc) {
      setCurrent(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  if (failed && hideOnError) return null;

  return (
    <div className={`relative overflow-hidden bg-[#1A4D43] ${className}`}>
      {!failed && current && (
        <Image
          key={current}
          src={current}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onError={handleError}
          className={`text-transparent ${imageClassName}`}
        />
      )}
    </div>
  );
}
