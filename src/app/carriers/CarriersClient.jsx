"use client";

import { useState, useRef, useCallback } from "react";
import { submitCareerApplication } from "./actions";
import {
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Linkedin,
  Upload,
  FileCheck,
  X,
} from "lucide-react";
import MagneticButton from "../../components/ui/MagneticButton";
import {
  PageHero,
  SectionHead,
  Reveal,
  Marker,
  LedgerList,
} from "../../components/kit";
import { getLenis } from "../../lib/smooth-scroll";

// Mock job listings (frontend only)
const MOCK_JOBS = [
  {
    id: "1",
    title: "Consultant(e) en stratégie commerciale",
    department: "Stratégie",
    type: "CDI",
    location: "Paris / Hybride",
    excerpt:
      "Accompagner nos clients dans la définition et le déploiement de leur stratégie commerciale B2B.",
  },
  {
    id: "2",
    title: "Business Developer",
    department: "Ventes & Croissance",
    type: "CDI",
    location: "Paris",
    excerpt:
      "Prospection, qualification de leads et génération d'opportunités pour nos clients.",
  },
  {
    id: "3",
    title: "Développeur(se) front-end / Full-stack",
    department: "Web & Créatif",
    type: "CDI",
    location: "Remote / Paris",
    excerpt:
      "Sites web performants, applications sur mesure. Stack React, Next.js, Node.",
  },
  {
    id: "4",
    title: "Chef(fe) de projet digital",
    department: "Web & Créatif",
    type: "CDI",
    location: "Paris",
    excerpt:
      "Piloter des projets digitaux de A à Z : sites, campagnes, outils internes.",
  },
];

const WHY_JOIN_ITEMS = [
  {
    title: "Impact concret",
    description:
      "Vous travaillez sur des missions stratégiques qui transforment directement la performance de nos clients.",
  },
  {
    title: "Apprentissage continu",
    description:
      "Formation, veille et montée en compétence au cœur de notre culture pour rester à la pointe.",
  },
  {
    title: "Équipe bienveillante",
    description:
      "Un environnement où l'entraide et la transparence permettent à chacun de progresser sereinement.",
  },
];

const PRACTICAL = [
  {
    label: "Processus de recrutement",
    text: "Candidature étudiée sous 5 jours ouvrés. Entretien puis proposition si le profil correspond.",
  },
  {
    label: "Postes ouverts",
    text: "Stratégie commerciale, business développement, marketing digital et conseil croissance.",
  },
];

const FIELD =
  "w-full rounded-[12px] border border-[#0D332B]/16 bg-[#F6F7F4] px-4 py-3.5 text-[15px] text-[#0D332B] outline-none transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-[#4E605B]/80 hover:border-[#0D332B]/30 focus:border-[#0D332B] focus:bg-white focus:ring-4 focus:ring-[#B0FF5B]/40";
const LABEL = "mb-2 flex items-center gap-2 text-sm font-semibold text-[#0D332B]";

export default function CarriersClient() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [applicationPosition, setApplicationPosition] = useState("");
  const formSectionRef = useRef(null);
  const cvInputRef = useRef(null);

  const scrollToForm = useCallback(() => {
    const target = formSectionRef.current;
    if (!target) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { offset: -88 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    const formData = new FormData(event.target);
    const result = await submitCareerApplication(formData);

    if (result.success) {
      setFeedback({ type: "success", message: result.message });
      event.target.reset();
      setCvFile(null);
      setApplicationPosition("");
    } else {
      setFeedback({ type: "error", message: result.error });
    }
    setLoading(false);
  }, []);

  const clearCv = () => {
    setCvFile(null);
    if (cvInputRef.current) cvInputRef.current.value = "";
  };

  const form = (
    <div className="rounded-[22px] bg-[#FCFDFC] p-6 text-[#0D332B] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.6)] sm:p-8 md:p-10">
      <h2 className="font-heading text-[1.7rem] font-semibold leading-tight tracking-[-0.035em] md:text-[2rem]">
        Postuler
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4E605B]">
        Remplissez le formulaire ci-dessous. Joignez votre CV ou indiquez le
        lien LinkedIn pour accélérer le traitement.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
        encType="multipart/form-data"
      >
        {feedback && (
          <div
            role={feedback.type === "error" ? "alert" : "status"}
            className={`flex items-start gap-3 rounded-[12px] p-4 text-sm font-medium ${
              feedback.type === "success"
                ? "bg-[#E3FFC4] text-[#0D332B]"
                : "bg-[#FDECEA] text-[#8A1C12]"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle size={18} className="mt-0.5 shrink-0" />
            ) : (
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
            )}
            <p>{feedback.message}</p>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={LABEL}>
              Nom complet *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder="Votre nom"
              autoComplete="name"
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="email" className={LABEL}>
              Email professionnel *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="exemple@entreprise.com"
              autoComplete="email"
              className={FIELD}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className={LABEL}>
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+33 6 00 00 00 00"
              autoComplete="tel"
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="position" className={LABEL}>
              Poste visé *
            </label>
            <input
              type="text"
              id="position"
              name="position"
              required
              value={applicationPosition}
              onChange={(e) => setApplicationPosition(e.target.value)}
              placeholder="Ex. Consultant commercial, Business Developer"
              className={FIELD}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cv" className={LABEL}>
            <Upload size={15} aria-hidden="true" /> CV (PDF ou Word) *
          </label>
          <div className="relative rounded-[12px] focus-within:ring-4 focus-within:ring-[#B0FF5B]/40">
            <input
              ref={cvInputRef}
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
              className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            />
            <div className="flex min-h-[56px] items-center gap-3 rounded-[12px] border border-dashed border-[#0D332B]/24 bg-[#F6F7F4] px-4 py-3.5 transition-colors duration-300 hover:border-[#0D332B]/40">
              {cvFile ? (
                <>
                  <FileCheck size={19} aria-hidden="true" className="shrink-0 text-[#0D332B]" />
                  <span className="flex-1 truncate text-sm font-medium text-[#0D332B]">
                    {cvFile.name}
                  </span>
                  <button
                    type="button"
                    onClick={clearCv}
                    className="relative z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#4E605B] transition-colors hover:bg-[#0D332B]/8 hover:text-[#0D332B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B]"
                    aria-label="Retirer le fichier"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </>
              ) : (
                <>
                  <Upload size={19} aria-hidden="true" className="shrink-0 text-[#4E605B]" />
                  <span className="text-sm text-[#4E605B]">
                    Cliquez pour joindre votre CV (PDF ou Word, max. 5 Mo)
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="linkedInUrl" className={LABEL}>
            <Linkedin size={15} aria-hidden="true" /> Profil LinkedIn
          </label>
          <input
            type="url"
            id="linkedInUrl"
            name="linkedInUrl"
            placeholder="https://linkedin.com/in/votre-profil"
            className={FIELD}
          />
        </div>

        <div>
          <label htmlFor="message" className={LABEL}>
            Message / Motivation
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Présentez-vous en quelques lignes et indiquez pourquoi vous souhaitez nous rejoindre..."
            rows={5}
            className={`${FIELD} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0D332B] px-7 py-3 text-sm font-semibold tracking-[-0.01em] text-[#F7FAF8] transition-colors duration-300 hover:bg-[#1A4D43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 md:w-auto"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
              Envoi...
            </>
          ) : (
            <>
              Envoyer ma candidature
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );

  return (
    <div className="w-full bg-[#F6F7F4] text-[#0D332B]">
      <PageHero
        title="Rejoignez notre équipe"
        intro="Nous recrutons des profils passionnés par la croissance B2B, la stratégie commerciale et le digital. Vous avez l'envie de construire avec nous ?"
        actions={
          <MagneticButton
            onClick={scrollToForm}
            variant="primary"
            className="w-full whitespace-nowrap sm:w-auto"
          >
            Postuler
          </MagneticButton>
        }
      />

      {/* Open positions: one ledger row per offer. */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title="Nos offres d'emploi"
            intro="Découvrez les postes à pourvoir et postulez en un clic. Nous étudions chaque candidature sous 5 jours ouvrés."
          />

          <ul className="mt-14 border-t border-[#0D332B]/14 md:mt-20">
            {MOCK_JOBS.map((job, idx) => (
              <Reveal as="li" key={job.id} delay={Math.min(idx, 5) * 60}>
                <button
                  type="button"
                  onClick={() => {
                    setApplicationPosition(job.title);
                    scrollToForm();
                  }}
                  className="ledger-row group grid w-full grid-cols-1 gap-3 border-b border-[#0D332B]/14 px-1 py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-10 md:px-3 md:py-8"
                >
                  <span className="min-w-0">
                    <span className="block font-heading text-[1.3rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B] md:text-[1.6rem]">
                      {job.title}
                    </span>
                    <span className="mt-2 block font-mono text-[0.75rem] tracking-normal text-[#4E605B]/90">
                      {job.department} · {job.type} · {job.location} · Temps plein
                    </span>
                  </span>
                  <span className="block max-w-[52ch] text-[15px] leading-relaxed text-[#4E605B] md:text-base">
                    {job.excerpt}
                  </span>
                  <span className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0D332B] md:mt-0">
                    Postuler
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why join: values as hairline rows. */}
      <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            className="max-w-4xl"
            title={
              <>
                Une équipe, des valeurs, des <Marker>résultats</Marker>
              </>
            }
            intro="Nous croyons que la croissance durable passe par des équipes alignées sur une même vision et des méthodes éprouvées."
          />
          <LedgerList items={WHY_JOIN_ITEMS} className="mt-14 md:mt-20" />
        </div>
      </section>

      {/* Application: practical notes on the ink, the form on a paper panel. */}
      <section
        id="candidature"
        ref={formSectionRef}
        className="scroll-mt-24 bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="min-w-0 lg:col-span-5">
            <Reveal
              as="p"
              variant="focus"
              className="max-w-[24ch] font-heading text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-[#F7FAF8]"
            >
              Rejoignez une équipe qui mise sur l&apos;expertise, la
              bienveillance et les résultats concrets.
            </Reveal>

            <ul className="mt-12 border-t border-white/12">
              {PRACTICAL.map(({ label, text }, i) => (
                <Reveal as="li" key={label} delay={120 + i * 60} className="border-b border-white/12 px-1 py-6">
                  <p className="text-[15px] font-semibold text-[#F7FAF8]">{label}</p>
                  <p className="mt-1.5 max-w-[46ch] text-[15px] leading-relaxed text-[#B9CBC4]">{text}</p>
                </Reveal>
              ))}
              <Reveal as="li" delay={240}>
                <a
                  href="mailto:contact@suzaliconseil.com"
                  className="ledger-row on-ink flex flex-col items-start gap-1.5 border-b border-white/12 px-1 py-6 outline-none sm:flex-row sm:items-center sm:justify-between sm:gap-6 focus-visible:ring-2 focus-visible:ring-[#B0FF5B]"
                >
                  <span className="min-w-0">
                    <span className="block text-[15px] font-semibold text-[#F7FAF8]">Contact</span>
                    <span className="block text-sm text-[#B9CBC4]">Une question sur nos offres ?</span>
                  </span>
                  <span className="flex min-w-0 items-center gap-2 text-[15px] font-medium text-[#F7FAF8] sm:text-right">
                    <span>contact@suzaliconseil.com</span>
                    <ArrowUpRight size={15} aria-hidden="true" className="shrink-0 text-[#B0FF5B]" />
                  </span>
                </a>
              </Reveal>
            </ul>
          </div>

          <Reveal variant="focus" delay={120} className="min-w-0 lg:col-span-7">
            {form}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
