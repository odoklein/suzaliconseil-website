"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

/*
 * Reveal - marks an element as shown the first time it enters the viewport.
 * The motion itself lives in CSS ([data-reveal] in globals.css) so content is
 * visible without JS and reduced motion is honoured in one place.
 *
 * variant: "fade" (rise + fade), "mask" (headline wipe), "focus" (blur in)
 */
export default function Reveal({
  as: Tag = "div",
  variant = "fade",
  delay = 0,
  amount = "some",
  className = "",
  style,
  children,
  ...props
}) {
  const ref = useRef(null);
  const shown = useInView(ref, { once: true, amount, margin: "0px 0px -8% 0px" });

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown ? "" : undefined}
      className={className}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...props}
    >
      {variant === "mask" ? <span className="reveal-mask">{children}</span> : children}
    </Tag>
  );
}
