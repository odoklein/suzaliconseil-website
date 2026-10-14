import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import MagneticButton from "../../ui/MagneticButton";
import {
  PageHero,
  ClosingCta,
  SectionHead,
  Reveal,
  LedgerList,
  FaqList,
} from "../../kit";
import CheckRows from "../commercial-b/CheckRows";
import { MethodSection } from "../../kit";
import { SITE_URL } from "../../../lib/seo";
import {
  GROWTH_STANDARD_OFFER,
  VENTE_RDV_OFFER,
  billingInSentence,
} from "../../../lib/transactional-services";
import { CASE_STUDIES } from "../../../lib/case-studies";

/*
 * Page dédiée à « prospection commerciale externalisée » : la requête la plus
 * vue du site (99 + 74 impressions sur 28 j au 03/10/2026, position ~47),
 * jusqu'ici servie par le gabarit générique TransactionalServicePage.
 *
 * En page 1, Google montre des guides « interne ou externe ? » : la page
 * répond donc aussi à cette intention de décision (définition, comparatif,
 * prix), en plus de l'intention d'achat.
 *
 * Les prix viennent du catalogue (/offres) et le cas client de
 * case-studies.js : aucun chiffre n'est introduit ici.
 */

const CASE = CASE_STUDIES.find((c) => c.id === "editeur-rh");

const COMPARISON = [
  [
    "Délai de démarrage",
    "Recrutement puis formation : plusieurs mois avant un rythme normal.",
    "Campagnes actives sous 7 jours après validation du ciblage et des messages.",
  ],
  [
    "Structure du coût",
    "Salaire chargé, outils, données et temps de management, que les résultats suivent ou non.",
    "Un forfait mensuel et une part variable due seulement pour les rendez-vous honorés.",
  ],
  [
    "Outils et données",
    "À choisir, payer et paramétrer : fichier, outil d'envoi, CRM.",
    "Inclus : fichier vérifié, outils d'envoi, suivi des échanges et intégration à votre CRM.",
  ],
  [
    "Encadrement",
    "Un manager forme, suit et motive les commerciaux.",
    "Un account manager dédié pilote l'équipe et vous rend compte chaque semaine.",
  ],
  [
    "Connaissance de l'offre",
    "Maximale : vos équipes vivent votre produit au quotidien.",
    "À transmettre : c'est l'objet du cadrage et des points de calibrage.",
  ],
];

const PREREQUISITES = [
  [
    "Une cible que vous savez nommer",
    "Des secteurs, des tailles d'entreprise et des fonctions précis. Plus la cible est floue, plus le coût par rendez-vous monte.",
  ],
  [
    "Quelqu'un pour reprendre les rendez-vous",
    "Un rendez-vous qualifié perd sa valeur s'il attend une semaine. Il faut un commercial ou un dirigeant disponible pour le mener.",
  ],
  [
    "Un panier qui justifie un contact direct",
    "Pour un produit à faible panier vendu à un marché de masse, le coût d'un appel ne se rentabilise pas. Nous vous le dirons pendant l'audit.",
  ],
];

const CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const BODY = "text-lg leading-relaxed text-[#4E605B]";
const INK_LINK =
  "font-semibold text-[#0D332B] underline decoration-[#B0FF5B] decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-[#0D332B]";

export default function ProspectionExternaliseePage({ service }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Suzali Conseil",
    },
    areaServed: { "@type": "Country", name: "France" },
    serviceType: service.h1,
    offers: {
      "@type": "Offer",
      name: GROWTH_STANDARD_OFFER.name,
      price: GROWTH_STANDARD_OFFER.price.replace(/\D/g, ""),
      priceCurrency: "EUR",
      description: `${GROWTH_STANDARD_OFFER.price} ${billingInSentence(GROWTH_STANDARD_OFFER)}`,
      url: `${SITE_URL}/offres`,
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${service.path}#faq`,
    mainEntity: service.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* FAQPage émis ici (avec son @id) : FaqList est rendu avec jsonLd={false}. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title={service.h1}
        intro={service.introduction}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Commercial", href: "/services/commercial" },
          { label: service.h1, href: service.path },
        ]}
        meta={`À partir de ${GROWTH_STANDARD_OFFER.price} ${GROWTH_STANDARD_OFFER.billing}`}
        image="/images/manager-prospection-externalisee.webp"
        imagePosition="center 35%"
        actions={
          <>
            <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Demander un audit gratuit
            </MagneticButton>
            <MagneticButton href="#tarifs" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Voir les tarifs
            </MagneticButton>
          </>
        }
      />

      {/* Définition : la réponse courte, en tête de page */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
          <SectionHead
            size="md"
            className="lg:col-span-5"
            title="Qu'est-ce que la prospection commerciale externalisée ?"
          />
          <Reveal delay={120} className={`max-w-[62ch] space-y-6 lg:col-span-7 lg:pt-3 md:text-xl ${BODY}`}>
            <p>
              C&apos;est le fait de confier tout ou partie de votre prospection à
              une équipe extérieure plutôt qu&apos;à des commerciaux recrutés en
              interne. Cette équipe identifie les entreprises qui correspondent
              à votre cible, contacte les décideurs, qualifie leur besoin et
              transmet les opportunités à vos vendeurs, qui gardent la main sur
              la vente.
            </p>
            <p>
              Vous payez un service qui démarre en quelques jours, avec ses
              outils, ses données et sa méthode, au lieu d&apos;assumer un
              salaire, un temps de formation et le risque d&apos;un mauvais
              recrutement. En contrepartie, votre offre doit être transmise à
              l&apos;équipe : c&apos;est tout l&apos;enjeu du cadrage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pour qui */}
      <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className={`${CONTAINER} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <SectionHead
            size="md"
            className="lg:col-span-5"
            title="Un dispositif adapté à votre organisation"
          />
          <CheckRows items={service.suitableFor} className="lg:col-span-7 lg:mt-3" />
        </div>
      </section>

      {/* Livrables */}
      <section className="bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
        <div className={CONTAINER}>
          <SectionHead tone="ink" size="md" title="Ce que votre équipe reçoit" className="max-w-3xl" />
          <CheckRows tone="ink" columns={2} items={service.deliverables} className="mt-12 md:mt-16" />
        </div>
      </section>

      {/* Interne ou externalisé : l'intention « décider » */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className={CONTAINER}>
          <SectionHead
            className="max-w-4xl"
            title="Prospecter en interne ou externaliser ?"
            intro="Les deux modèles fonctionnent. Ils ne coûtent pas la même chose, ne démarrent pas au même rythme et ne demandent pas le même investissement de votre part."
          />

          {/* Below md the table becomes one hairline block per criterion, so the
              answer column is never scrolled off-screen. */}
          <dl className="mt-14 border-t border-[#0D332B]/14 md:hidden">
            {COMPARISON.map(([criterion, inHouse, outsourced]) => (
              <div key={criterion} className="border-b border-[#0D332B]/14 py-6">
                <dt className="font-heading text-lg font-semibold tracking-[-0.025em] text-[#0D332B]">{criterion}</dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-[#4E605B]">
                  <span className="block text-sm font-semibold text-[#0D332B]">Équipe interne</span>
                  {inHouse}
                </dd>
                <dd className="mt-3 rounded-[12px] bg-[#0D332B] p-4 text-[15px] leading-relaxed text-[#E4ECE8]">
                  <span className="block text-sm font-semibold text-[#F7FAF8]">Prospection externalisée</span>
                  {outsourced}
                </dd>
              </div>
            ))}
          </dl>

          <Reveal
            variant="focus"
            className="mt-14 hidden overflow-x-auto rounded-[22px] bg-[#FCFDFC] ring-1 ring-[#0D332B]/10 md:mt-16 md:block"
          >
            <table className="w-full min-w-[640px] border-collapse text-left text-[15px] leading-relaxed md:text-base">
              <thead>
                <tr>
                  <th scope="col" className="w-[22%] px-5 py-5 text-sm font-semibold text-[#4E605B] md:px-7">
                    Critère
                  </th>
                  <th scope="col" className="w-[39%] px-5 py-5 text-sm font-semibold text-[#4E605B] md:px-7">
                    Équipe interne
                  </th>
                  <th scope="col" className="w-[39%] bg-[#0D332B] px-5 py-5 text-sm font-semibold text-[#F7FAF8] md:px-7">
                    Prospection externalisée
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([criterion, inHouse, outsourced]) => (
                  <tr key={criterion} className="align-top">
                    <th
                      scope="row"
                      className="border-t border-[#0D332B]/10 px-5 py-5 font-semibold tracking-[-0.01em] text-[#0D332B] md:px-7"
                    >
                      {criterion}
                    </th>
                    <td className="border-t border-[#0D332B]/10 px-5 py-5 text-[#4E605B] md:px-7">{inHouse}</td>
                    <td className="border-t border-white/12 bg-[#0D332B] px-5 py-5 text-[#E4ECE8] md:px-7">
                      {outsourced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal as="p" delay={100} className={`mt-12 max-w-[62ch] ${BODY}`}>
            <strong className="font-semibold text-[#0D332B]">Quand garder la prospection en interne ?</strong>{" "}
            Quand chaque appel demande une expertise produit très pointue, ou
            quand la prospection est aussi un moyen de former vos futurs
            vendeurs. Beaucoup d&apos;entreprises font les deux : elles
            externalisent pour ouvrir un marché et valider le discours, puis
            recrutent une fois que ça marche.
          </Reveal>
        </div>
      </section>

      {/* Tarifs, lus dans le catalogue */}
      <section id="tarifs" className="scroll-mt-28 border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className={CONTAINER}>
          <SectionHead
            className="max-w-4xl"
            title="Combien coûte la prospection externalisée chez Suzali ?"
            intro="Un forfait couvre l'équipe, le ciblage, les outils et le pilotage. La part variable ne s'applique qu'aux rendez-vous validés selon vos critères et réellement honorés : si le prospect ne se présente pas, ce rendez-vous ne vous est pas facturé."
          />

          <Reveal
            variant="focus"
            className="mt-14 grid grid-cols-1 overflow-hidden rounded-[22px] bg-[#F6F7F4] ring-1 ring-[#0D332B]/10 md:mt-16 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <article className="flex flex-col bg-[#0D332B] p-8 text-[#F7FAF8] lg:p-12">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em]">
                  {GROWTH_STANDARD_OFFER.name}
                </h3>
                <span className="chip-status shrink-0" data-step="2">
                  Recommandé
                </span>
              </div>
              <p className="mt-8 font-heading text-[clamp(3rem,4.6vw,4.25rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums">
                {GROWTH_STANDARD_OFFER.price}
              </p>
              <p className="mt-3 font-mono text-[13px] text-[#B9CBC4]">{GROWTH_STANDARD_OFFER.billing}</p>
              <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-[#CFDDD7] md:text-base">
                La prospection externalisée complète : une équipe dédiée qui
                cible, contacte, qualifie et vous transmet des rendez-vous.
              </p>
              <ul className="mt-8 grid border-t border-white/12 pt-6 sm:grid-cols-2 sm:gap-x-8">
                {GROWTH_STANDARD_OFFER.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 py-2">
                    <Check size={16} strokeWidth={2.75} aria-hidden="true" className="mt-0.5 shrink-0 text-[#B0FF5B]" />
                    <span className="text-[15px] leading-snug text-[#E4ECE8]">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col p-8 text-[#0D332B] lg:p-12">
              <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em]">{VENTE_RDV_OFFER.name}</h3>
              <p className="mt-8 font-heading text-[clamp(2.6rem,3.8vw,3.5rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums">
                {VENTE_RDV_OFFER.price}
              </p>
              <p className="mt-3 font-mono text-[13px] text-[#4E605B]">{VENTE_RDV_OFFER.billing}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-[#4E605B] md:text-base">
                Pour un besoin centré sur la prise de rendez-vous par téléphone.{" "}
                {VENTE_RDV_OFFER.features[0]}.
              </p>
              <Link href="/services/prise-rendez-vous-b2b" className={`mt-6 self-start ${INK_LINK}`}>
                Prise de rendez-vous B2B qualifiés
              </Link>
              <div className="mt-auto pt-10">
                <MagneticButton href="/offres" variant="outline" className="w-full whitespace-nowrap sm:w-auto">
                  <span className="inline-flex items-center gap-2">
                    Comparer toutes les offres
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </MagneticButton>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <MethodSection
        ground="bg-[#F6F7F4]"
        className="border-t border-[#0D332B]/10 bg-[#F6F7F4]"
        title="Du cadrage au rendez-vous dans votre agenda"
        steps={service.process.map(([title, description]) => ({ title, description }))}
        footnote="L’accompagnement est assuré à distance dans toute la France, notamment pour des entreprises situées à Paris, Lyon, Bordeaux, Nantes et dans les autres bassins économiques, sans prétendre disposer de bureaux locaux."
      />

      {/* Cas client */}
      {CASE && (
        <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
          <div className={`${CONTAINER} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-6">
              <Reveal
                as="h2"
                variant="mask"
                className="max-w-[24ch] font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0D332B]"
              >
                {CASE.summary}
              </Reveal>
              <Reveal as="p" delay={160} className="mt-6 font-mono text-[0.8rem] text-[#4E605B]">
                Un exemple · {CASE.sector}
              </Reveal>
              <Reveal as="p" delay={200} className={`mt-6 max-w-[58ch] ${BODY}`}>
                {CASE.contexte}
              </Reveal>
              <Reveal delay={240} className="mt-8">
                <Link href="/etudes-de-cas" className={INK_LINK}>
                  Voir toutes les études de cas
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:pt-3">
              <h3 className="font-heading text-[1.3rem] font-semibold tracking-[-0.03em] md:text-[1.5rem]">
                Ce que nous avons mis en place
              </h3>
              <CheckRows items={CASE.demarche} className="mt-6" />
            </div>
          </div>
        </section>
      )}

      {/* Conditions de réussite */}
      <section className="bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
        <div className={`${CONTAINER} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <SectionHead
            tone="ink"
            size="md"
            className="lg:col-span-5"
            title="Ce qui fait réussir une prospection externalisée"
            intro="L'externalisation n'est pas la bonne réponse pour toutes les entreprises. Elle donne des résultats quand trois conditions sont réunies."
            introClassName="md:text-lg"
          />
          <LedgerList
            tone="ink"
            className="lg:col-span-7 lg:mt-3"
            items={PREREQUISITES.map(([title, description]) => ({ title, description }))}
          />
        </div>
      </section>

      <FaqList
        jsonLd={false}
        items={service.faqs.map(([question, answer]) => ({ question, answer }))}
      />

      {/* Services associés */}
      <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead size="md" title="Services associés" />
          <LedgerList
            className="mt-12 md:mt-16"
            items={service.related.map(([href, label]) => ({ href, title: label }))}
          />
        </div>
      </section>

      <ClosingCta
        title="Votre prospection peut-elle être externalisée ?"
        intro="L'audit est gratuit et sans engagement : nous regardons votre cible, votre offre et votre cycle de vente, puis nous vous disons si l'externalisation a du sens et ce qu'elle coûterait."
        primary={{ label: "Demander un audit gratuit", href: "/contact" }}
      />
    </main>
  );
}
