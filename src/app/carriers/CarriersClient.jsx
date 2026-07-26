"use client";

import React, { useState, useRef, useCallback } from "react";
import Button from "../../components/ui/Button";
import AnimatedSection from "../../components/ui/AnimatedSection";
import { submitCareerApplication } from "./actions";
import {
  Briefcase,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Users,
  Target,
  Zap,
  FileText,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Upload,
  FileCheck,
  X,
} from "lucide-react";

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

/* ── Static data hoisted outside component (rendering-hoist-jsx) ── */
const WHY_JOIN_ITEMS = [
  {
    icon: Target,
    title: "Impact concret",
    desc: "Vous travaillez sur des missions stratégiques qui transforment directement la performance de nos clients.",
    bg: "bg-commercial-bg",
    color: "text-primary-dark",
  },
  {
    icon: Zap,
    title: "Apprentissage continu",
    desc: "Formation, veille et montée en compétence au cœur de notre culture pour rester à la pointe.",
    bg: "bg-digital-bg",
    color: "text-accent-blue",
  },
  {
    icon: Users,
    title: "Équipe bienveillante",
    desc: "Un environnement où l'entraide et la transparence permettent à chacun de progresser sereinement.",
    bg: "bg-accent-lime/20",
    color: "text-primary-dark",
  },
];

export default function CarriersClient() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [applicationPosition, setApplicationPosition] = useState("");
  const formSectionRef = useRef(null);
  const cvInputRef = useRef(null);

  /* rerender-functional-setstate: use useCallback for stable handler ref */
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

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* ----------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                                    */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative w-full pt-32 pb-48 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-dots opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-main rounded-full blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute top-[10%] left-[5%] text-white/5 animate-subtle-float pointer-events-none">
          <Briefcase size={180} strokeWidth={1} />
        </div>
        <div
          className="absolute bottom-[20%] right-[8%] text-white/5 animate-subtle-float pointer-events-none"
          style={{ animationDelay: "1s" }}
        >
          <Users size={160} strokeWidth={1} />
        </div>

        {/* Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="orbit-ring w-[500px] h-[500px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/10 text-accent-lime text-sm font-medium mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              Carrières
            </span>

            <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Rejoignez notre <span className="text-accent-lime">équipe</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
              Nous recrutons des profils passionnés par la croissance B2B, la
              stratégie commerciale et le digital. Vous avez l&apos;envie de
              construire avec nous ?
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 2. OPEN POSITIONS                                                  */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative z-10 py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-main/10 text-primary-main text-sm font-medium mb-4">
              Postes ouverts
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-dark mb-3">
              Nos offres d&apos;emploi
            </h2>
            <p className="text-gray-500 mb-12 max-w-2xl">
              Découvrez les postes à pourvoir et postulez en un clic. Nous
              étudions chaque candidature sous 5 jours ouvrés.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {MOCK_JOBS.map((job, idx) => (
              <AnimatedSection key={job.id} delay={idx * 100}>
                <div className="group bg-[#FAFAFA] border border-gray-100 rounded-[24px] p-6 md:p-8 hover:border-primary-main/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-main/5 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <span className="px-3 py-1 rounded-full bg-primary-main/10 text-primary-main text-xs font-semibold">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-primary-dark mb-2 group-hover:text-primary-main transition-colors relative z-10">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 relative z-10">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      Temps plein
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                    {job.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setApplicationPosition(job.title);
                      formSectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="inline-flex items-center gap-2 text-primary-main font-semibold hover:text-primary-dark transition-colors relative z-10 group/btn"
                  >
                    Postuler{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-main to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 3. APPLICATION FORM                                                */}
      {/* ----------------------------------------------------------------- */}
      <section ref={formSectionRef} className="relative z-20 -mt-8 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* LEFT: Why join / Process cards */}
            <div className="lg:col-span-4 space-y-6">
              <AnimatedSection delay={100}>
                <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-gray-100/50 border border-white/50 backdrop-blur-sm flex items-start gap-4 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-commercial-bg flex items-center justify-center shrink-0 text-primary-dark group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-lg">
                      Processus de recrutement
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Candidature étudiée sous 5 jours ouvrés. Entretien puis
                      proposition si le profil correspond.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-gray-100/50 border border-white/50 backdrop-blur-sm flex items-start gap-4 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-digital-bg flex items-center justify-center shrink-0 text-accent-blue group-hover:scale-110 transition-transform">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-lg">
                      Postes ouverts
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Stratégie commerciale, business développement, marketing
                      digital et conseil croissance.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-gray-100/50 border border-white/50 backdrop-blur-sm flex items-start gap-4 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 text-[#25D366] group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-lg">
                      Contact
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Une question sur nos offres ?
                    </p>
                    <a
                      href="mailto:contact@suzaliconseil.com"
                      className="text-primary-main font-semibold hover:text-accent-blue transition-colors break-all"
                    >
                      contact@suzaliconseil.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="bg-primary-dark p-8 rounded-[24px] shadow-lg text-white relative overflow-hidden hidden lg:block h-[280px] group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent-lime blur-[60px] opacity-20 transform translate-x-10 -translate-y-10 group-hover:opacity-30 transition-opacity duration-500" />
                  <h3 className="font-heading font-bold text-2xl mb-4 relative z-10">
                    Suzali Conseil
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-8 relative z-10">
                    Rejoignez une équipe qui mise sur l&apos;expertise, la
                    bienveillance et les résultats concrets.
                  </p>
                  <div className="absolute bottom-6 right-6 opacity-20 rotate-[-15deg] group-hover:opacity-30 group-hover:rotate-[-10deg] transition-all duration-500">
                    <Users size={80} strokeWidth={1} />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT: Application form */}
            <AnimatedSection delay={200} className="lg:col-span-8">
              <div className="bg-white rounded-[24px] shadow-2xl shadow-primary-dark/5 p-8 md:p-10 border border-white relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-main via-accent-lime to-primary-dark" />

                {/* Corner glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-lime/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="mb-8 relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
                    Postuler
                  </h2>
                  <p className="text-gray-500">
                    Remplissez le formulaire ci-dessous. Joignez votre CV ou
                    indiquez le lien LinkedIn pour accélérer le traitement.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                  encType="multipart/form-data"
                >
                  {feedback && (
                    <div
                      className={`p-4 rounded-xl flex items-start gap-3 border ${
                        feedback.type === "success"
                          ? "bg-green-50 text-green-800 border-green-100"
                          : "bg-red-50 text-red-800 border-red-100"
                      } animate-fadeInDown`}
                    >
                      {feedback.type === "success" ? (
                        <CheckCircle size={20} className="shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle size={20} className="shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm font-medium">{feedback.message}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="text-sm font-semibold text-primary-dark ml-1"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Votre nom"
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-main focus:ring-2 focus:ring-primary-main/10 outline-none transition-all placeholder:text-gray-400 text-primary-dark hover:border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-primary-dark ml-1"
                      >
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="exemple@entreprise.com"
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-main focus:ring-2 focus:ring-primary-main/10 outline-none transition-all placeholder:text-gray-400 text-primary-dark hover:border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-primary-dark ml-1"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+33 6 00 00 00 00"
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-main focus:ring-2 focus:ring-primary-main/10 outline-none transition-all placeholder:text-gray-400 text-primary-dark hover:border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="position"
                        className="text-sm font-semibold text-primary-dark ml-1"
                      >
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
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-main focus:ring-2 focus:ring-primary-main/10 outline-none transition-all placeholder:text-gray-400 text-primary-dark hover:border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="cv"
                      className="text-sm font-semibold text-primary-dark ml-1 flex items-center gap-2"
                    >
                      <Upload size={16} /> CV (PDF ou Word) *
                    </label>
                    <div className="relative">
                      <input
                        ref={cvInputRef}
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        required
                        onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 border-dashed flex items-center gap-3 min-h-[56px] hover:border-gray-300 transition-colors">
                        {cvFile ? (
                          <>
                            <FileCheck
                              size={20}
                              className="text-primary-main shrink-0"
                            />
                            <span className="text-primary-dark text-sm font-medium truncate flex-1">
                              {cvFile.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setCvFile(null);
                                if (cvInputRef.current)
                                  cvInputRef.current.value = "";
                              }}
                              className="p-1 rounded-lg hover:bg-gray-200 text-gray-500"
                              aria-label="Retirer le fichier"
                            >
                              <X size={18} />
                            </button>
                          </>
                        ) : (
                          <>
                            <Upload
                              size={20}
                              className="text-gray-400 shrink-0"
                            />
                            <span className="text-gray-500 text-sm">
                              Cliquez pour joindre votre CV (PDF ou Word, max. 5
                              Mo)
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="linkedInUrl"
                      className="text-sm font-semibold text-primary-dark ml-1 flex items-center gap-2"
                    >
                      <Linkedin size={16} /> Profil LinkedIn
                    </label>
                    <input
                      type="url"
                      id="linkedInUrl"
                      name="linkedInUrl"
                      placeholder="https://linkedin.com/in/votre-profil"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-main focus:ring-2 focus:ring-primary-main/10 outline-none transition-all placeholder:text-gray-400 text-primary-dark hover:border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-primary-dark ml-1"
                    >
                      Message / Motivation
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Présentez-vous en quelques lignes et indiquez pourquoi vous souhaitez nous rejoindre..."
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-main focus:ring-2 focus:ring-primary-main/10 outline-none transition-all placeholder:text-gray-400 resize-none text-primary-dark hover:border-gray-300"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi...
                        </>
                      ) : (
                        <>
                          Envoyer ma candidature <ArrowRight size={18} />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 4. WHY JOIN US                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative py-24 px-4 bg-white border-t border-gray-100 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-main/10 text-primary-main text-sm font-medium mb-6">
              Pourquoi nous rejoindre
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-dark mb-4">
              Une équipe, des valeurs, des{" "}
              <span className="text-gradient-premium">résultats</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-16">
              Nous croyons que la croissance durable passe par des équipes
              alignées sur une même vision et des méthodes éprouvées.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* rendering-hoist-jsx: uses WHY_JOIN_ITEMS hoisted outside component */}
            {WHY_JOIN_ITEMS.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 150}>
                <div className="p-8 rounded-[24px] bg-[#FAFAFA] border border-gray-100 hover:border-primary-main/20 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-main/5 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6 ${item.color} group-hover:scale-110 transition-transform relative z-10`}
                  >
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-bold text-primary-dark text-lg mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
