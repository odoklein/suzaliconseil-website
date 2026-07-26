"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const technologies = [
  { name: "Next.js", file: "nextjs.svg", width: 40 },
  { name: "React", file: "react.svg", width: 40 },
  { name: "Shopify", file: "shopify.svg", width: 120 }, // Wordmarks often wider
  { name: "WordPress", file: "wordpress.svg", width: 140 },
  { name: "Google Ads", file: "googleads.svg", width: 40 },
  { name: "Analytics", file: "analytics.svg", width: 40 },
  { name: "HubSpot", file: "hubspot.svg", width: 100 },
  { name: "Stripe", file: "stripe.svg", width: 80 },
  { name: "Figma", file: "figma.svg", width: 35 },
  { name: "Tailwind", file: "tailwind.svg", width: 50 },
];

const TechItem = ({ tech, getLogoUrl }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-sm font-bold text-slate-400">{tech.name}</span>
    );
  }

  return (
    <div className="h-12 flex items-center justify-center">
      <Image
        src={getLogoUrl(tech.file)}
        alt={`${tech.name} logo`}
        width={tech.width}
        height={32}
        className="h-8 w-auto object-contain max-w-[120px]"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export function DigitalTechStack() {
  const getLogoUrl = (filename) => {
    // AWS S3 path
    return `/logos/${filename}`;
  };

  return (
    <section className="py-12 border-y border-slate-100 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          Technologies & Partenaires
        </p>
      </div>

      <Marquee
        gradient={true}
        gradientColor="white"
        speed={40}
        pauseOnHover={true}
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="mx-12 flex items-center gap-3 transition-opacity cursor-pointer hover:scale-110 transition-transform duration-300"
            title={tech.name}
          >
            <TechItem tech={tech} getLogoUrl={getLogoUrl} />
          </div>
        ))}
        {/* Duplicate loop is handled by Marquee correctly if children are enough, 
            but adding explicit duplicate ensures smooth loop on wide screens */}
        {technologies.map((tech, index) => (
          <div
            key={`dup-${index}`}
            className="mx-12 flex items-center gap-3 transition-opacity cursor-pointer hover:scale-110 transition-transform duration-300"
            title={tech.name}
          >
            <TechItem tech={tech} getLogoUrl={getLogoUrl} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
