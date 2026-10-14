"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import useSafeReducedMotion from "../../lib/useSafeReducedMotion";

/*
 * MethodRail - the homepage method (components/home/Method.jsx) as a reusable
 * list: a hairline rail that fills lime as you read, each step's node lighting
 * once the reading line (mid-screen) reaches it. Step order matters here, so
 * the numbers stay.
 *
 * steps: [{ title, description }]
 * ground: the chapter's bg class, so unreached markers sit opaque on it.
 */
function Step({ index, step, ground }) {
  const ref = useRef(null);
  const reached = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });

  return (
    <li ref={ref} className="relative pb-12 pl-16 last:pb-0 md:pb-14 md:pl-24">
      <span
        className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-semibold transition-colors duration-500 md:left-2 ${
          reached
            ? "bg-[#B0FF5B] text-[#0D332B]"
            : `${ground} text-[#4E605B] ring-1 ring-[#0D332B]/15`
        }`}
      >
        {index + 1}
      </span>
      <h3
        className={`font-heading text-[clamp(1.45rem,2.3vw,2.1rem)] font-semibold leading-[1.05] tracking-[-0.04em] transition-colors duration-500 ${
          reached ? "text-[#0D332B]" : "text-[#0D332B]/55"
        }`}
      >
        {step.title}
      </h3>
      <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-[#4E605B] md:text-lg">
        {step.description}
      </p>
    </li>
  );
}

export default function MethodRail({ steps, ground = "bg-[#F6F7F4]", className = "" }) {
  const listRef = useRef(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 50%", "end 50%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <div className={`relative ${className}`}>
      {/* Rail: the hairline is the plan, the lime fill is how far you've read. */}
      <span
        className="absolute bottom-[calc(100%-1.4rem)] left-[1.375rem] top-0 w-px bg-[#0D332B]/15 md:left-[1.875rem]"
        aria-hidden="true"
      />
      <motion.span
        className="absolute bottom-0 left-[1.375rem] top-0 w-[3px] -translate-x-px origin-top rounded-full bg-[#B0FF5B] md:left-[1.875rem]"
        style={reduceMotion ? { scaleY: 1 } : { scaleY: progress }}
        aria-hidden="true"
      />
      <ol ref={listRef} className="relative">
        {steps.map((step, i) => (
          <Step key={step.title} index={i} step={step} ground={ground} />
        ))}
      </ol>
    </div>
  );
}
