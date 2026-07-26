"use client";

import React from "react";
import DevHero from "./DevHero";
import DevSolutions from "./DevSolutions";
import DevMethodology from "./DevMethodology";
import DevCTA from "./DevCTA";

export default function DeveloppementAutoClient() {
  return (
    <div className="min-h-screen bg-white">
      <DevHero />
      <DevSolutions />
      <DevMethodology />
      <DevCTA />
    </div>
  );
}
