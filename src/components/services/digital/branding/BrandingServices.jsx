import { LedgerList, SectionHead } from "../../../kit";

const SERVICES = [
  {
    title: "Identité Visuelle & Logo",
    description:
      "Création de logotypes vectoriels uniques, pensés pour le digital et le print. Une signature visuelle qui ne ressemble à aucune autre.",
    meta: "Singularité",
  },
  {
    title: "Plateforme de Marque",
    description:
      "Définition de votre ADN : Mission, Vision, Valeurs, Tonalité. Le socle stratégique indispensable avant tout design.",
    meta: "Sens",
  },
  {
    title: "Charte Graphique Complète",
    description:
      "Règles d'utilisation, palettes couleurs, typographies, iconographie. Le manuel pour garantir la cohérence de votre marque partout.",
    meta: "Cohérence",
  },
  {
    title: "Design System UI",
    description:
      "Bibliothèque de composants atomiques pour vos produits digitaux (SaaS, App). Scalabilité et maintenabilité maximales.",
    meta: "Scalabilité",
  },
  {
    title: "Supports Marketing & Print",
    description:
      "Déclinaison de votre identité sur tous les supports : cartes de visite, brochures, kakémonos, présentations investisseurs.",
    meta: "Déclinaison",
  },
  {
    title: "Direction Artistique 360",
    description:
      "Supervision globale de votre image. Shootings photo, vidéos, motion design. Nous gardons le cap esthétique.",
    meta: "Vision",
  },
];

export default function BrandingServices() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-[#F6F7F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          size="md"
          className="max-w-4xl"
          title="Une marque forte vaut plus qu'un millier de mots"
          intro={
            <>
              Dans un monde saturé d&apos;images, l&apos;indifférence est le pire des dangers.{" "}
              <strong className="font-semibold text-[#0D332B]">
                Votre identité visuelle est votre premier levier de confiance.
              </strong>
            </>
          }
        />

        <LedgerList items={SERVICES} className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}
