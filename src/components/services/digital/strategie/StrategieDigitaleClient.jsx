"use client";

import React from "react";
import StrategieHero from "./StrategieHero";
import StrategieChallenges from "./StrategieChallenges";
import StrategieMethodology from "./StrategieMethodology";
import StrategieCTA from "./StrategieCTA";

export default function StrategieDigitaleClient() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <StrategieHero />
      <StrategieChallenges />
      <StrategieMethodology />
      <StrategieCTA />
    </div>
  );
}
