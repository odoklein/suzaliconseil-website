import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import Reveal from "./kit/Reveal";
import SectionHead from "./kit/SectionHead";

// Public Google Business Profile. Rating and count are shown as-is so the
// selected quotes below never stand in for the full picture.
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?cid=15371480359553245640";
const GOOGLE_RATING = "4,2";
const GOOGLE_REVIEW_COUNT = 5;

// Verbatim client reviews from that profile (only obvious typos fixed).
// Never add reviews written by team members here.
const googleReviews = [
  {
    author: "Raphael D.",
    date: "avril 2024",
    quote:
      "Je suis très satisfait des prestations, je recommande vivement ! Suzali Conseil a répondu aux besoins de notre entreprise pour la génération de leads, le SEO et également pour la mise en relation vente à l'international.",
  },
  {
    author: "Maxim B.",
    date: "septembre 2023",
    quote: "Ils ont transformé notre présence en ligne. Hautement recommandé !",
  },
  {
    author: "Badro G.",
    date: "décembre 2023",
    quote: "Merci à l'équipe de développement commercial.",
  },
];

const caseStudies = [
  {
    company: "Investissement Locatif",
    service: "Vente d'Appartements Luxe",
    stat: "+250%",
    description: "de rendez-vous qualifiés générés en 3 mois",
    bgImage: "/images/investissementlocatif.png",
    href: "/services/prise-rendez-vous-b2b",
  },
  {
    company: "Velis Conseil",
    service: "Prospection B2B Réseaux Ultra-ciblés",
    stat: "35 RDV",
    description: "générés à partir de 1000 prospects ciblés",
    bgImage: "/images/velis.png",
    href: "/services/prospection-commerciale-externalisee",
  },
  {
    company: "ZUP&CO",
    service: "Automatisation SAS pour l'engagement étudiant",
    stat: "92%",
    description:
      "taux d'ouverture des communications et une gestion des sessions entièrement simplifiée.",
    bgImage: "/images/zupdeco.png",
    href: "/services/digital/developpement-automatisation",
  },
];

const Stars = ({ tone = "ink" }) => (
  <div className="flex gap-0.5" aria-label="5 étoiles sur 5" role="img">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={tone === "ink" ? "fill-[#0D332B] text-[#0D332B]" : "fill-[#B0FF5B] text-[#B0FF5B]"}
        aria-hidden="true"
      />
    ))}
  </div>
);

/* Case files stack as you scroll: each one pins, the next slides over it. */
function CaseFile({ study, idx }) {
  return (
    <li className="sticky" style={{ top: `calc(6.5rem + ${idx * 1.25}rem)` }}>
      <Link
        href={study.href}
        className="group grid overflow-hidden rounded-[22px] bg-[#0D332B] text-[#F7FAF8] shadow-[0_-24px_60px_-40px_rgba(7,34,29,0.55)] outline-none focus-visible:ring-2 focus-visible:ring-[#B0FF5B] md:min-h-[460px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"
      >
        <div className="flex flex-col justify-between gap-10 p-8 md:p-11">
          <div>
            <div className="flex items-start justify-between gap-6">
              <span className="font-heading text-2xl font-semibold tracking-[-0.035em] md:text-3xl">
                {study.company}
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-[#B0FF5B] group-hover:text-[#0D332B]">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-[#B9CBC4]">{study.service}</p>
          </div>
          <div>
            <p className="font-heading text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#F7FAF8]">
              {study.stat}
            </p>
            <p className="mt-4 max-w-[36ch] text-lg leading-snug text-[#E4ECE8]">{study.description}</p>
          </div>
        </div>
        <div className="relative min-h-[240px] overflow-hidden md:min-h-0">
          <Image
            src={study.bgImage}
            alt={study.company}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
      </Link>
    </li>
  );
}

const ClientsTrust = () => {
  const [lead, ...rest] = googleReviews;

  return (
    <section className="bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          className="max-w-3xl"
          title={
            <>
              Ils nous font confiance
            </>
          }
          intro="Des entreprises ambitieuses qui ont transformé leur croissance avec Suzali Conseil."
        />

        <ul className="mt-14 flex flex-col gap-6 md:mt-20">
          {caseStudies.map((study, idx) => (
            <CaseFile key={study.company} study={study} idx={idx} />
          ))}
        </ul>

        {/* Google reviews */}
        <div className="mt-24 md:mt-32">
          <Reveal className="flex flex-col gap-4 border-b border-[#0D332B]/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[#0D332B] md:text-4xl">
              Ce que disent nos clients
            </h3>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#4E605B] transition-colors hover:text-[#0D332B]"
            >
              <span className="font-semibold text-[#0D332B]">{GOOGLE_RATING}/5</span>
              sur Google · {GOOGLE_REVIEW_COUNT} avis
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-12">
            <Reveal as="figure" className="flex flex-col justify-between gap-10 py-10 lg:col-span-7 lg:border-r lg:border-[#0D332B]/12 lg:pr-12">
              <div className="space-y-6">
                <Stars />
                <blockquote className="font-heading text-[clamp(1.5rem,2.4vw,2.15rem)] font-medium leading-[1.25] tracking-[-0.03em] text-[#0D332B]">
                  « {lead.quote} »
                </blockquote>
              </div>
              <Byline review={lead} />
            </Reveal>

            <div className="lg:col-span-5">
              {rest.map((review, idx) => (
                <Reveal
                  as="figure"
                  key={review.author}
                  delay={(idx + 1) * 90}
                  className="flex flex-col gap-6 border-b border-[#0D332B]/12 py-10 last:border-b-0"
                >
                  <Stars />
                  <blockquote className="text-xl leading-snug tracking-[-0.02em] text-[#0D332B]">
                    « {review.quote} »
                  </blockquote>
                  <Byline review={review} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Byline({ review }) {
  return (
    <figcaption className="flex items-center gap-3">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D332B] text-sm font-semibold text-[#B0FF5B]"
        aria-hidden="true"
      >
        {review.author.charAt(0)}
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold text-[#0D332B]">{review.author}</span>
        <span className="text-xs text-[#4E605B]">Avis Google · {review.date}</span>
      </span>
    </figcaption>
  );
}

export default ClientsTrust;
