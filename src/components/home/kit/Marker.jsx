"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

/* The lime highlight under a key word, swept in when the heading is read. */
export default function Marker({ children }) {
  const ref = useRef(null);
  const shown = useInView(ref, { once: true, amount: 1 });

  return (
    <span ref={ref} className="marker" data-shown={shown ? "" : undefined}>
      {children}
    </span>
  );
}
