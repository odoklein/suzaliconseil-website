"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import { usePathname } from "next/navigation";
import ClosingCta from "../kit/ClosingCta";

const Footer = () => {
  const pathname = usePathname();

  /* Pages that end on their own ClosingCta (tailored copy) skip the default one. */
  const hideGlobalCTA =
    pathname?.startsWith("/services") ||
    pathname === "/contact" ||
    pathname === "/equipe" ||
    pathname === "/offres" ||
    pathname === "/etudes-de-cas" ||
    pathname === "/carriers" ||
    pathname?.startsWith("/portal");

  return (
    <>
    {!hideGlobalCTA && <ClosingCta />}
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0D332B] pb-10 pt-20 text-[#F7FAF8]">
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
            <p className="text-[#B9CBC4] text-sm leading-relaxed max-w-xs">
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
            <p className="mb-6 font-heading text-base font-semibold tracking-[-0.02em] text-[#F7FAF8]">
              Expertises
            </p>
            <ul className="space-y-4 text-[#B9CBC4] text-sm">
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
            <p className="mb-6 font-heading text-base font-semibold tracking-[-0.02em] text-[#F7FAF8]">
              Agence
            </p>
            <ul className="space-y-4 text-[#B9CBC4] text-sm">
              <li>
                <Link
                  href="/etudes-de-cas"
                  className="hover:text-white hover:translate-x-1 transform inline-block transition-all duration-200"
                >
                  Études de cas
                </Link>
              </li>
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
            <p className="mb-6 font-heading text-base font-semibold tracking-[-0.02em] text-[#F7FAF8]">
              Nous contacter
            </p>
            <ul className="space-y-4 text-[#B9CBC4] text-sm">
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#B9CBC4]/80">
          <p>
            © {new Date().getFullYear()} Suzali Conseil. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
