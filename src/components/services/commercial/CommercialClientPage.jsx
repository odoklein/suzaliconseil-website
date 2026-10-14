"use client";

import { ClosingCta } from "../../kit";
import { CommercialHero } from "./CommercialHero";
import { CommercialProcess } from "./CommercialProcess";
import { CommercialServicesList } from "./CommercialServicesList";

export function CommercialClientPage() {
  return (
    <main className="w-full overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <CommercialHero />
      <CommercialServicesList />
      <CommercialProcess />

      <ClosingCta
        title="Prêt à faire décoller vos ventes ?"
        intro="Parlons de vos objectifs et construisons ensemble votre stratégie de croissance."
        primary={{ label: "Parler à un expert", href: "/contact" }}
      />
    </main>
  );
}
