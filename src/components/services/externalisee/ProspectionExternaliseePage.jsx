import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleCheck,
  Plus,
} from "lucide-react";
import Breadcrumbs from "../../ui/Breadcrumbs";
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

const sectionTitle =
  "font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl";

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
    <main className="overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Commercial", href: "/services/commercial" },
              { label: service.h1, href: service.path },
            ]}
          />
        </div>

        <div className="mx-auto mt-6 max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[28px] bg-[#0D332B] shadow-[0_28px_68px_-44px_rgba(13,51,43,0.7)] lg:grid-cols-[1.03fr_0.97fr]">
            <div className="flex min-h-[520px] flex-col justify-center px-6 py-14 text-white sm:px-10 md:px-14 lg:min-h-[590px] lg:px-16 lg:py-16">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B0FF5B]">
                {service.eyebrow}
              </p>
              <h1 className="mt-5 max-w-[12ch] font-heading text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
                {service.h1}
              </h1>
              <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/76 sm:text-lg">
                {service.introduction}
              </p>
              <p className="mt-6 inline-flex max-w-fit flex-wrap items-baseline gap-x-2 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white/80">
                <span>À partir de</span>
                <strong className="text-lg text-[#B0FF5B]">
                  {GROWTH_STANDARD_OFFER.price}
                </strong>
                <span>{GROWTH_STANDARD_OFFER.billing}</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B0FF5B] px-5 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#D2FF9A] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Demander un audit gratuit
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="#tarifs"
                  className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
              <Image
                src="/images/manager-prospection-externalisee.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D332B]/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0D332B]/28 lg:via-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Définition : la réponse courte, en tête de page */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:pt-28 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <h2 className={sectionTitle}>
            Qu&apos;est-ce que la prospection commerciale externalisée ?
          </h2>
          <div className="max-w-[68ch] space-y-5 text-base leading-7 text-[#52635F] sm:text-lg sm:leading-8">
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
          </div>
        </div>
      </section>

      {/* Pour qui + livrables */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:px-8">
        <div className="rounded-[24px] border border-[#0D332B]/12 bg-white p-7 shadow-[0_18px_48px_-40px_rgba(13,51,43,0.55)] sm:p-9">
          <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E3FFC4] text-[#0D332B]">
            <CircleCheck size={22} strokeWidth={1.7} aria-hidden="true" />
          </span>
          <p className="mt-7 text-sm font-bold text-[#3F7D33]">Pour qui ?</p>
          <h2 className="mt-3 max-w-[13ch] font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
            Un dispositif adapté à votre organisation
          </h2>
          <ul className="mt-8 space-y-5">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#52635F] sm:text-base">
                <CheckCircle2 className="mt-1 shrink-0 text-[#3F7D33]" size={19} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-[#DDECE4] p-7 sm:p-9 lg:p-11">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#B0FF5B]/45 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-bold text-[#3F7D33]">Livrables</p>
            <h2 className="mt-3 max-w-[13ch] font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
              Ce que votre équipe reçoit
            </h2>
            <ul className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#314640] sm:text-base">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#3F7D33]" size={19} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interne ou externalisé : l'intention « décider » */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-[#3F7D33]">Interne ou externalisé</p>
          <h2 className={`mt-3 max-w-3xl ${sectionTitle}`}>
            Prospecter en interne ou externaliser ?
          </h2>
          <p className="mt-5 max-w-[68ch] leading-7 text-[#52635F]">
            Les deux modèles fonctionnent. Ils ne coûtent pas la même chose, ne
            démarrent pas au même rythme et ne demandent pas le même
            investissement de votre part.
          </p>

          <div className="mt-10 overflow-x-auto rounded-[20px] border border-[#0D332B]/12">
            <table className="w-full min-w-[640px] border-collapse text-left text-[15px] leading-6">
              <thead className="bg-[#F6F7F4]">
                <tr>
                  <th scope="col" className="w-[22%] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#52635F]">Critère</th>
                  <th scope="col" className="w-[39%] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#52635F]">Équipe interne</th>
                  <th scope="col" className="w-[39%] bg-[#E3FFC4] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0D332B]">Prospection externalisée</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([criterion, inHouse, outsourced]) => (
                  <tr key={criterion} className="border-t border-[#0D332B]/10 align-top">
                    <th scope="row" className="px-5 py-4 font-bold text-[#0D332B]">{criterion}</th>
                    <td className="px-5 py-4 text-[#52635F]">{inHouse}</td>
                    <td className="bg-[#F4FFE9] px-5 py-4 text-[#314640]">{outsourced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-[68ch] leading-7 text-[#52635F]">
            <strong className="text-[#0D332B]">Quand garder la prospection en interne ?</strong>{" "}
            Quand chaque appel demande une expertise produit très pointue, ou
            quand la prospection est aussi un moyen de former vos futurs
            vendeurs. Beaucoup d&apos;entreprises font les deux : elles
            externalisent pour ouvrir un marché et valider le discours, puis
            recrutent une fois que ça marche.
          </p>
        </div>
      </section>

      {/* Tarifs, lus dans le catalogue */}
      <section id="tarifs" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <p className="text-sm font-bold text-[#3F7D33]">Tarifs</p>
        <h2 className={`mt-3 max-w-3xl ${sectionTitle}`}>
          Combien coûte la prospection externalisée chez Suzali ?
        </h2>
        <p className="mt-5 max-w-[68ch] leading-7 text-[#52635F]">
          Un forfait couvre l&apos;équipe, le ciblage, les outils et le
          pilotage. La part variable ne s&apos;applique qu&apos;aux rendez-vous
          validés selon vos critères et réellement honorés : si le prospect ne
          se présente pas, ce rendez-vous ne vous est pas facturé.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[24px] bg-[#0D332B] p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#B0FF5B]">
              {GROWTH_STANDARD_OFFER.name} · recommandé
            </p>
            <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-heading text-5xl font-extrabold tracking-tight">
                {GROWTH_STANDARD_OFFER.price}
              </span>
              <span className="text-white/75">{GROWTH_STANDARD_OFFER.billing}</span>
            </p>
            <p className="mt-4 max-w-[52ch] leading-7 text-white/75">
              La prospection externalisée complète : une équipe dédiée qui
              cible, contacte, qualifie et vous transmet des rendez-vous.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {GROWTH_STANDARD_OFFER.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[15px] leading-6 text-white/88">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#B0FF5B]" size={18} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-[24px] border border-[#0D332B]/12 bg-white p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3F7D33]">
              {VENTE_RDV_OFFER.name}
            </p>
            <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-heading text-4xl font-extrabold tracking-tight">
                {VENTE_RDV_OFFER.price}
              </span>
              <span className="text-[#52635F]">{VENTE_RDV_OFFER.billing}</span>
            </p>
            <p className="mt-4 leading-7 text-[#52635F]">
              Pour un besoin centré sur la prise de rendez-vous par téléphone.{" "}
              {VENTE_RDV_OFFER.features[0]}.
            </p>
            <Link
              href="/services/prise-rendez-vous-b2b"
              className="mt-5 font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4 transition-colors hover:text-[#1A6D48]"
            >
              Prise de rendez-vous B2B qualifiés
            </Link>
            <Link
              href="/offres"
              className="group mt-auto inline-flex min-h-12 items-center gap-2 pt-8 text-sm font-bold text-[#0D332B]"
            >
              Comparer toutes les offres
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-[#3F7D33]">Méthode</p>
          <h2 className={`mt-3 max-w-2xl ${sectionTitle}`}>
            Du cadrage au rendez-vous dans votre agenda
          </h2>

          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {service.process.map(([title, description], index) => (
              <li
                key={title}
                className="border-[#0D332B]/16 bg-[#F6F7F4] p-6 first:rounded-tl-[20px] last:rounded-br-[20px] md:p-7 lg:border-l lg:bg-transparent lg:first:rounded-none lg:last:rounded-none lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#E3FFC4] text-sm font-extrabold text-[#0D332B]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-[32ch] text-sm leading-6 text-[#52635F]">{description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-4xl leading-7 text-[#52635F]">
            L’accompagnement est assuré à distance dans toute la France, notamment
            pour des entreprises situées à Paris, Lyon, Bordeaux, Nantes et dans
            les autres bassins économiques, sans prétendre disposer de bureaux locaux.
          </p>
        </div>
      </section>

      {/* Cas client */}
      {CASE && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-8 rounded-[24px] border border-[#0D332B]/12 bg-white p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-12">
            <div>
              <p className="text-sm font-bold text-[#3F7D33]">Un exemple · {CASE.sector}</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl">
                {CASE.summary}
              </h2>
              <p className="mt-5 leading-7 text-[#52635F]">{CASE.contexte}</p>
              <Link
                href="/etudes-de-cas"
                className="mt-6 inline-flex font-semibold text-[#0D332B] underline decoration-[#85C947] decoration-2 underline-offset-4 transition-colors hover:text-[#1A6D48]"
              >
                Voir toutes les études de cas
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">Ce que nous avons mis en place</h3>
              <ul className="mt-5 space-y-4">
                {CASE.demarche.map((step) => (
                  <li key={step} className="flex gap-3 text-[15px] leading-7 text-[#314640] sm:text-base">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#3F7D33]" size={19} aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Conditions de réussite */}
      <section className="bg-[#EAF2EE] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={`max-w-3xl ${sectionTitle}`}>
            Ce qui fait réussir une prospection externalisée
          </h2>
          <p className="mt-5 max-w-[68ch] leading-7 text-[#52635F]">
            L&apos;externalisation n&apos;est pas la bonne réponse pour toutes les
            entreprises. Elle donne des résultats quand trois conditions sont
            réunies.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PREREQUISITES.map(([title, text]) => (
              <div key={title} className="rounded-[20px] bg-white p-6 sm:p-7">
                <h3 className="text-lg font-extrabold leading-snug">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#52635F]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className={sectionTitle}>Questions fréquentes</h2>
        </div>
        <div className="border-t border-[#0D332B]/16">
          {service.faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-[#0D332B]/14 py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-extrabold leading-snug marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]">
                <h3>{question}</h3>
                <Plus
                  size={20}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[66ch] pt-4 leading-7 text-[#52635F]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-[28px] bg-[#0D332B] px-7 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <h2 className="max-w-[22ch] font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
              Votre prospection peut-elle être externalisée ?
            </h2>
            <p className="mt-4 max-w-[56ch] leading-7 text-white/75">
              L&apos;audit est gratuit et sans engagement : nous regardons votre
              cible, votre offre et votre cycle de vente, puis nous vous disons
              si l&apos;externalisation a du sens et ce qu&apos;elle coûterait.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#B0FF5B] px-6 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#D2FF9A] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Demander un audit gratuit
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* Services associés */}
      <section className="bg-[#EAF2EE] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={sectionTitle}>Services associés</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {service.related.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-20 items-center justify-between gap-5 rounded-[18px] bg-white px-5 py-5 font-bold text-[#173D35] shadow-[0_14px_34px_-30px_rgba(13,51,43,0.58)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#E3FFC4] hover:shadow-[0_18px_34px_-28px_rgba(13,51,43,0.68)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
              >
                <span>{label}</span>
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
