"use client";

import React from "react";
import StrategieHero from "./StrategieHero";
import StrategieChallenges from "./StrategieChallenges";
import StrategieMethodology from "./StrategieMethodology";
import StrategieCTA from "./StrategieCTA";

export default function StrategieDigitaleClient() {
  return (
    <div className="min-h-screen bg-white">
      <StrategieHero />
      <StrategieChallenges />
      <StrategieMethodology />
      <StrategieCTA />
    </div>
  );
}
