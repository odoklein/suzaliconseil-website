"use client";

import React from "react";
import SeoHero from "./SeoHero";
import SeoChannels from "./SeoChannels";
import SeoResults from "./SeoResults";
import SeoCTA from "./SeoCTA";

export default function SeoAcquisitionClient() {
  return (
    <div className="min-h-screen bg-white">
      <SeoHero />
      <SeoChannels />
      <SeoResults />
      <SeoCTA />
    </div>
  );
}
