"use client";

import React from "react";
import SitesWebHero from "./SitesWebHero";
import SitesWebChallenges from "./SitesWebChallenges";
import SitesWebProcess from "./SitesWebProcess";
import SitesWebCTA from "./SitesWebCTA";

export default function SitesWebClient({ children }) {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <SitesWebHero />
      <SitesWebChallenges />
      <SitesWebProcess />
      {/* Partie éditoriale longue (voir ServiceLongForm) */}
      {children}

      <SitesWebCTA />
    </div>
  );
}
