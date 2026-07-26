"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function AnimatedGrid({ children, className }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection key={index} delay={index * 100}>
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}
