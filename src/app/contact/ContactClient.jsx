"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Button from "../../components/ui/Button";
import AnimatedSection from "../../components/ui/AnimatedSection";
import { submitContact } from "./actions";
import {
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Send,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  /* rerender-functional-setstate: useCallback for stable handler ref */
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    const formData = new FormData(event.target);
    const result = await submitContact(formData);

    if (result.success) {
      setFeedback({ type: "success", message: result.message });
      event.target.reset();
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
      <section className="w-full bg-[#F6F7F4] p-3 sm:p-4 lg:p-5">
        <div className="relative mx-auto min-h-[520px] max-w-[1600px] overflow-hidden rounded-[14px] border border-[#0D332B]/10 bg-[#0D332B] shadow-[0_28px_80px_-48px_rgba(13,51,43,0.78)] md:min-h-[600px]">
          <Image
            src="/images/hero-office.webp"
            alt="Les bureaux de Suzali Conseil baignés de lumière"
            fill
            priority
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="object-cover object-[62%_center] sm:object-center"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,34,29,0.94)_0%,rgba(7,34,29,0.8)_34%,rgba(7,34,29,0.28)_68%,rgba(7,34,29,0.08)_100%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(7,34,29,0.24)_0%,transparent_46%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-7xl items-center px-6 py-16 sm:px-8 md:min-h-[600px] md:px-12 lg:px-14">
            <AnimatedSection className="min-w-0 w-full max-w-[680px] text-left">
              <h1 className="font-heading text-[2.4rem] font-bold leading-[1.04] tracking-[-0.045em] text-[#F7FAF8] sm:text-5xl lg:text-[4rem]">
                Parlons de votre projet
              </h1>

              <p className="mt-6 max-w-[590px] text-base font-medium leading-relaxed text-[#E4ECE8] sm:text-lg lg:text-xl">
                Une question stratégique, un besoin d&apos;accompagnement ou une
                opportunité commerciale ? Notre équipe vous répond rapidement.
              </p>
            </AnimatedSection>
          </div>

          <div
            className="pointer-events-none absolute inset-[1px] rounded-[13px] border border-white/12"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 2. MAIN CONTENT (Overlapping Card Layout)                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative z-20 -mt-24 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* LEFT COLUMN: Contact Information Cards */}
            <div className="lg:col-span-4 space-y-6">
              {/* Info Card 1: Email */}
              <AnimatedSection delay={100}>
                <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-gray-100/50 border border-white/50 backdrop-blur-sm flex items-start gap-4 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-commercial-bg flex items-center justify-center shrink-0 text-primary-dark group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-lg">
                      Email
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Notre canal privilégié
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

              {/* Info Card 2: WhatsApp */}
              <AnimatedSection delay={200}>
                <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-gray-100/50 border border-white/50 backdrop-blur-sm flex items-start gap-4 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-lg">
                      WhatsApp
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Réponse rapide</p>
                    <a
                      href="https://wa.me/33643638110"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-main font-semibold hover:text-accent-blue transition-colors"
                    >
                      +33 6 43 63 81 10
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Info Card 3: Phone */}
              <AnimatedSection delay={300}>
                <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-gray-100/50 border border-white/50 backdrop-blur-sm flex items-start gap-4 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-accent-blue group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-lg">
                      Téléphone
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Du lundi au vendredi
                    </p>
                    <a
                      href="tel:+33757902479"
                      className="text-primary-main font-semibold hover:text-accent-blue transition-colors"
                    >
                      +33 7 57 90 24 79
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Info Card 4: Address */}
              <AnimatedSection delay={400}>
                <div className="bg-white p-6 rounded-[24px] shadow-xl shadow-gray-100/50 border border-white/50 backdrop-blur-sm flex items-start gap-4 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-digital-bg flex items-center justify-center shrink-0 text-accent-blue group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-lg">
                      Adresse
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Siège social</p>
                    <span className="text-primary-main font-medium">
                      10 Rue de la Paix, 75002 Paris
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Decorative Brand Card */}
              <AnimatedSection delay={500}>
                <div className="bg-primary-dark p-8 rounded-[24px] shadow-lg text-white relative overflow-hidden hidden lg:block h-[260px] group">
                  {/* Abstract shapes */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent-lime blur-[60px] opacity-20 transform translate-x-10 -translate-y-10 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-main blur-[40px] opacity-10 -translate-x-5 translate-y-5" />

                  <h3 className="font-heading font-bold text-2xl mb-4 relative z-10">
                    Suzali Conseil
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-8 relative z-10">
                    Nous transformons vos ambitions en résultats concrets grâce
                    à une stratégie sur-mesure.
                  </p>

                  <div className="absolute bottom-6 right-6 opacity-20 rotate-[-15deg] group-hover:opacity-30 group-hover:rotate-[-10deg] transition-all duration-500">
                    <Send size={80} strokeWidth={1} />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <AnimatedSection delay={200} className="lg:col-span-8">
              <div className="bg-white rounded-[24px] shadow-2xl shadow-primary-dark/5 p-8 md:p-10 border border-white relative overflow-hidden group">
                {/* Decorative top border gradient */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-main via-accent-lime to-primary-dark" />

                {/* Corner glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-lime/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="mb-8 relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-gray-500">
                    Remplissez les détails ci-dessous et nous prendrons contact
                    avec vous rapidement.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  {feedback && (
                    <div
                      className={`p-4 rounded-xl flex items-start gap-3 border animate-fadeInDown ${
                        feedback.type === "success"
                          ? "bg-green-50 text-green-800 border-green-100"
                          : "bg-red-50 text-red-800 border-red-100"
                      }`}
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
                        Nom complet
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
                        Email professionnel
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

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-primary-dark ml-1"
                    >
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-main focus:ring-2 focus:ring-primary-main/10 outline-none transition-all placeholder:text-gray-400 text-primary-dark hover:border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-primary-dark ml-1"
                    >
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Détaillez votre demande..."
                      rows={6}
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
                          Envoyer le message <ArrowRight size={18} />
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
    </div>
  );
}
