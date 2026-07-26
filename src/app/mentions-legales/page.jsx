import React from "react";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Mentions légales | Suzali Conseil",
  description:
    "Consultez les mentions légales de Suzali Conseil : éditeur, hébergement, contact et propriété intellectuelle.",
  path: "/mentions-legales",
  robots: { index: false, follow: true },
});

const sections = [
  {
    title: "1. Éditeur du Site",
    content: (
      <>
        <p className="mb-4">
          Le présent site est édité par la société Suzali Conseil, Société par
          Actions Simplifiée Unipersonnelle (SASU) au capital social de 1 €.
        </p>
        <p className="mb-4">
          <strong>Siège social :</strong> 10 RUE DE LA PAIX, 75002 PARIS, France
        </p>
        <p className="mb-4">
          <strong>Immatriculation :</strong> RCS de Paris sous le numéro 992 281
          097
        </p>
        <p>
          <strong>Directeur de la publication :</strong> M. Hichem Hammouche, en
          sa qualité de Président.
        </p>
      </>
    ),
  },
  {
    title: "2. Hébergement du Site",
    content: (
      <>
        <p className="mb-4">
          L&apos;hébergement du site est assuré par :
        </p>
        <p className="text-[#0D332B]/90">
          Le site est déployé sur une infrastructure VPS privée administrée via
          Dokploy. Les coordonnées complètes de l’hébergeur doivent être
          renseignées ici par l’éditeur du site.
        </p>
      </>
    ),
  },
  {
    title: "3. Contact",
    content: (
      <>
        <p className="mb-4">
          Pour toute question ou demande d&apos;information concernant le site,
          ou toute notification d&apos;un contenu illicite, l&apos;utilisateur
          peut contacter l&apos;éditeur :
        </p>
        <ul className="list-none space-y-2">
          <li>
            <strong>Email :</strong>{" "}
            <a
              href="mailto:contact@suzaliconseil.com"
              className="text-[#1a4d43] font-medium underline hover:text-[#B0FF5B] transition-colors"
            >
              contact@suzaliconseil.com
            </a>
          </li>
          <li>
            <strong>Téléphone :</strong>{" "}
            <a
              href="tel:+33757902479"
              className="text-[#1a4d43] font-medium underline hover:text-[#B0FF5B] transition-colors"
            >
              +33 7 57 90 24 79
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Propriété Intellectuelle",
    content: (
      <>
        <p className="mb-4">
          L&apos;ensemble des éléments constituant le site (textes, graphismes,
          logiciels, photographies, logos, marques, etc.) est protégé par le Code
          de la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification ou adaptation
          totale ou partielle de ces éléments sans l&apos;autorisation écrite
          préalable de Suzali Conseil est strictement interdite et constituerait
          une contrefaçon sanctionnée par les articles L.335-2 et suivants du
          Code de la propriété intellectuelle.
        </p>
      </>
    ),
  },
  {
    title: "5. Protection des Données Personnelles",
    content: (
      <>
        <p className="mb-4">
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), Suzali Conseil s&apos;engage à protéger la vie privée de ses
          utilisateurs. Les informations collectées via les formulaires de
          contact sont destinées exclusivement à l&apos;usage de la société pour
          répondre à vos demandes de services.
        </p>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, de
          suppression et d&apos;opposition aux données personnelles vous
          concernant en écrivant à :{" "}
          <a
            href="mailto:contact@suzaliconseil.com"
            className="text-[#1a4d43] font-medium underline hover:text-[#B0FF5B] transition-colors"
          >
            contact@suzaliconseil.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "6. Limitation de Responsabilité",
    content: (
      <p>
        Suzali Conseil s&apos;efforce d&apos;assurer l&apos;exactitude des
        informations diffusées sur ce site. Toutefois, la société ne peut être
        tenue responsable des omissions, des inexactitudes ou des carences dans
        la mise à jour. L&apos;utilisateur utilise le site sous sa seule
        responsabilité.
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-dots" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="inline-block px-6 py-2 rounded-full bg-[#B0FF5B] text-[#0D332B] font-bold text-xs md:text-sm uppercase tracking-wider mb-6">
            Légal
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D332B] font-heading leading-tight mb-4">
            Mentions Légales
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique (LCEN), il est
            porté à la connaissance des utilisateurs du site Suzali Conseil les
            présentes mentions légales.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <article
                key={index}
                className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading font-bold text-xl text-[#0D332B] mb-4 border-b border-[#B0FF5B]/30 pb-2">
                  {section.title}
                </h2>
                <div className="text-[#0D332B]/90 leading-relaxed text-base">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
