"use client";

import React from "react";
import SitesWebHero from "./SitesWebHero";
import SitesWebChallenges from "./SitesWebChallenges";
import SitesWebProcess from "./SitesWebProcess";
import SitesWebCTA from "./SitesWebCTA";

export default function SitesWebClient() {
  return (
    <div className="min-h-screen bg-white">
      <SitesWebHero />
      <SitesWebChallenges />
      <SitesWebProcess />
      <SitesWebCTA />
    </div>
  );
}
