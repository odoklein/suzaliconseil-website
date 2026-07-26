"use client";

import React from "react";
import BrandingHero from "./BrandingHero";
import BrandingServices from "./BrandingServices";
import BrandingPhilosophy from "./BrandingPhilosophy";
import BrandingCTA from "./BrandingCTA";

export default function BrandingClient() {
  return (
    <div className="min-h-screen bg-white">
      <BrandingHero />
      <BrandingServices />
      <BrandingPhilosophy />
      <BrandingCTA />
    </div>
  );
}
