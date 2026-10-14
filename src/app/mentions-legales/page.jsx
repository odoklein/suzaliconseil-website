import { createPageMetadata } from "../../lib/seo";
import { PageHero } from "../../components/kit";

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
              className="font-medium text-[#0D332B] underline decoration-[#B0FF5B] decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-[#0D332B]"
            >
              contact@suzaliconseil.com
            </a>
          </li>
          <li>
            <strong>Téléphone :</strong>{" "}
            <a
              href="tel:+33757902479"
              className="font-medium text-[#0D332B] underline decoration-[#B0FF5B] decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-[#0D332B]"
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
            className="font-medium text-[#0D332B] underline decoration-[#B0FF5B] decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-[#0D332B]"
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
    <div className="w-full bg-[#F6F7F4]">
      <PageHero
        title="Mentions Légales"
        intro="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), il est porté à la connaissance des utilisateurs du site Suzali Conseil les présentes mentions légales."
        className="lg:[&_.hero-stage>div:last-child]:min-h-[420px]"
      />

      {/* A plain reading body: sections on hairlines, title left, text right. */}
      <section className="w-full px-4 pb-24 pt-14 sm:px-6 md:pb-32 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl border-t border-[#0D332B]/14">
          {sections.map((section) => (
            <article
              key={section.title}
              className="grid gap-4 border-b border-[#0D332B]/14 py-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-12 md:py-14"
            >
              <h2 className="font-heading text-[1.3rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B] md:text-[1.6rem]">
                {section.title}
              </h2>
              <div className="max-w-[62ch] text-base leading-relaxed text-[#0D332B]/90 md:text-[17px] [&_strong]:font-semibold [&_strong]:text-[#0D332B]">
                {section.content}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
