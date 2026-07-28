"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import { usePathname } from "next/navigation";
import { useBooking } from "../../context/BookingContext";

const Footer = () => {
  const pathname = usePathname();
  const { openBooking } = useBooking();

  const getFooterColor = () => {
    if (pathname?.includes("/services/digital/strategie-digitale"))
      return "bg-[#0b1d4e]";
    if (pathname?.includes("/services/digital/sites-web-ecommerce"))
      return "bg-[#4f3ef1]";
    if (pathname?.includes("/services/digital/seo-acquisition"))
      return "bg-[#08364e]";
    if (pathname?.includes("/services/digital/branding-identite"))
      return "bg-[#2e1065]";
    if (pathname?.includes("/services/digital/developpement-automatisation"))
      return "bg-[#091627]";
    if (pathname === "/services/digital") return "bg-[#0f172a]";
    return "bg-[#0D332B]";
  };

  /* Check if we are on a page that already has its own CTA or doesn't need this generic banner */
  const hideGlobalCTA =
    pathname?.startsWith("/services") ||
    pathname === "/contact" ||
    pathname === "/equipe" ||
    pathname === "/offres" ||
    pathname?.startsWith("/portal");

  return (
    <footer
      className={`${getFooterColor()} text-white pt-0 pb-10 transition-colors duration-500 footer-animated relative overflow-hidden`}
    >
      {/* CTA Banner - Hidden on pages that have their own targeted CTAs to avoid duplication */}
      {!hideGlobalCTA && (
        <div className="relative py-16 md:py-24 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B0FF5B] rounded-full blur-[150px] opacity-[0.06] pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-4 md:mb-6">
              Prêt à accélérer <br className="hidden sm:block" />
              votre <span className="text-[#B0FF5B]">croissance</span> ?
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Réservez un appel stratégique gratuit avec notre équipe. En 30
              minutes, nous identifions vos opportunités de croissance.
            </p>
            <button
              onClick={openBooking}
              className="group inline-flex items-center gap-3 bg-[#B0FF5B] text-[#0D332B] font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-[0_8px_30px_rgba(176,255,91,0.3)] transition-all duration-300 hover:-translate-y-0.5 text-sm md:text-base uppercase tracking-wide"
            >
              Planifier un appel stratégique
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      )}

      {/* Separator line */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative h-10 w-40 group">
              <Image
                src="/assets/whitelogo.svg"
                alt="Suzali Conseil"
                width={180}
                height={50}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Votre partenaire de croissance, alliant expertise commerciale et
              stratégie digitale pour des résultats concrets.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/suzali-conseil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 rounded-xl border border-white/10 hover:bg-[#B0FF5B] hover:text-[#0D332B] hover:border-[#B0FF5B] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B0FF5B] rounded-full" />
              Expertises
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li>
                <Link
                  href="/services/commercial"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Pôle Performance Commerciale
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Pôle Stratégie Digitale
                </Link>
              </li>
              <li>
                <Link
                  href="/services/generation-leads-b2b"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Génération de leads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital/seo-acquisition"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Référencement SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital/seo-acquisition"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Publicité en ligne (Ads)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Entreprise */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B0FF5B] rounded-full" />
              Agence
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li>
                <Link
                  href="/equipe"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/carriers"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Carrières
                </Link>
              </li>
              <li>
                <Link
                  href="/actualites"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B0FF5B] rounded-full" />
              Nous contacter
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="text-[#B0FF5B]/50 mt-0.5 group-hover:text-[#B0FF5B] transition-colors"
                />
                <span className="group-hover:text-white transition-colors">
                  10 RUE DE LA PAIX
                  <br />
                  75002 PARIS, France
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail
                  size={18}
                  className="text-[#B0FF5B]/50 group-hover:text-[#B0FF5B] transition-colors"
                />
                <a
                  href="mailto:contact@suzaliconseil.com"
                  className="hover:text-white transition-colors"
                >
                  contact@suzaliconseil.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone
                  size={18}
                  className="text-[#B0FF5B]/50 group-hover:text-[#B0FF5B] transition-colors"
                />
                <a
                  href="tel:+33757902479"
                  className="hover:text-white transition-colors"
                >
                  +33 7 57 90 24 79
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Suzali Conseil. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
