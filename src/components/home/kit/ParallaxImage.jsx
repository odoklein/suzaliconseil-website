"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* An image that drifts a little slower than the page inside its frame. */
export default function ParallaxImage({ src, alt, sizes, className = "", imgClassName = "", range = 7 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-[-8%]" style={reduceMotion ? undefined : { y }}>
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${imgClassName}`} />
      </motion.div>
    </div>
  );
}
