"use client";

import MagneticButton from "../../../ui/MagneticButton";
import { PageHero } from "../../../kit";

const STACK = ["Next.js 14", "Python / Django", "OpenAI API", "AWS / Vercel", "n8n / Zapier"];

export default function DevHero() {
  return (
    <PageHero
      title="Développement Web & Automatisation IA Sur-Mesure"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital", href: "/services/digital" },
        {
          label: "Développement & automatisation",
          href: "/services/digital/developpement-automatisation",
        },
      ]}
      intro={
        <p>
          Transformez vos idées en actifs technologiques. De l&apos;application métier
          complexe à l&apos;automatisation de vos flux (RPA) par l&apos;Intelligence
          Artificielle.{" "}
          <strong>Code propre, scalable et sécurisé (&quot;Security by Design&quot;).</strong>
        </p>
      }
      meta={
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {STACK.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      }
      actions={
        <>
          <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto">
            Automatiser mes processus
          </MagneticButton>
          <MagneticButton href="#solutions-tech" variant="outline-light" className="w-full sm:w-auto">
            Voir nos réalisations
          </MagneticButton>
        </>
      }
    />
  );
}
