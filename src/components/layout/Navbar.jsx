"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { useBooking } from "../../context/BookingContext";

export default function Navbar({ services }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    if (isServicesOpen) setIsServicesOpen(false);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "navbar-glass scrolled"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100/50"
      }`}
    >
      {/* Invisible Hover Trap for MegaMenu */}
      {isServicesOpen && (
        <div
          className="fixed inset-0 top-20 z-[-1]"
          onMouseEnter={() => setIsServicesOpen(false)}
        />
      )}

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/greenlogo.svg"
              alt="Suzali Conseil"
              width={180}
              height={50}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative h-20 flex items-center"
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`nav-link-premium flex items-center gap-1 text-[15px] uppercase tracking-wide font-heading
                  ${isServicesOpen ? "text-[var(--color-primary-main)]" : "text-[#0D332B] hover:text-[var(--color-primary-main)]"}`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              <MegaMenu
                services={services}
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
              />
            </div>

            <Link
              href="/offres"
              className="nav-link-premium text-[15px] text-[#0D332B] hover:text-[var(--color-primary-main)] uppercase tracking-wide font-heading"
            >
              Offres
            </Link>
            <Link
              href="/equipe"
              className="nav-link-premium text-[15px] text-[#0D332B] hover:text-[var(--color-primary-main)] uppercase tracking-wide font-heading"
            >
              Équipe
            </Link>
            <Link
              href="/carriers"
              className="nav-link-premium text-[15px] text-[#0D332B] hover:text-[var(--color-primary-main)] uppercase tracking-wide font-heading"
            >
              Carrières
            </Link>
            <Link
              href="/actualites"
              className="nav-link-premium text-[15px] text-[#0D332B] hover:text-[var(--color-primary-main)] uppercase tracking-wide font-heading"
            >
              Actualités
            </Link>
            <Link
              href="/contact"
              className="nav-link-premium text-[15px] text-[#0D332B] hover:text-[var(--color-primary-main)] uppercase tracking-wide font-heading"
            >
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={openBooking}
              className="hidden lg:inline-flex items-center gap-2 bg-[#0D332B] hover:bg-[#1A4D43] text-white hover:text-[var(--color-accent-lime)] px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group/cta overflow-hidden relative"
            >
              <span className="relative z-10">Planifier un appel</span>
              <ArrowRight
                size={16}
                className="relative z-10 group-hover/cta:translate-x-0.5 transition-transform"
              />
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
            </button>

            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#0D332B] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 transition-all duration-500 ${
          isMobileMenuOpen
            ? "h-[calc(100vh-80px)] opacity-100"
            : "h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="p-6 flex flex-col gap-6 overflow-y-auto h-full">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#0D332B] uppercase tracking-wide font-heading">
              Services
            </h4>
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary-dark/10">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="block font-medium text-sm text-gray-400 hover:text-primary-main transition-colors hover:translate-x-1 transform duration-200"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="flex flex-col gap-6">
            <Link
              href="/offres"
              className="text-lg font-bold text-[#0D332B] uppercase tracking-wide font-heading hover:text-primary-main transition-colors"
            >
              Offres
            </Link>
            <Link
              href="/equipe"
              className="text-lg font-bold text-[#0D332B] uppercase tracking-wide font-heading hover:text-primary-main transition-colors"
            >
              Équipe
            </Link>
            <Link
              href="/carriers"
              className="text-lg font-bold text-[#0D332B] uppercase tracking-wide font-heading hover:text-primary-main transition-colors"
            >
              Carrières
            </Link>
            <Link
              href="/actualites"
              className="text-lg font-bold text-[#0D332B] uppercase tracking-wide font-heading hover:text-primary-main transition-colors"
            >
              Actualités
            </Link>
            <Link
              href="/contact"
              className="text-lg font-bold text-[#0D332B] uppercase tracking-wide font-heading hover:text-primary-main transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openBooking();
            }}
            className="mt-4 flex items-center justify-center w-full bg-[#003F3A] text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:bg-[#0D332B]"
          >
            Planifier un appel
          </button>
        </div>
      </div>
    </header>
  );
}
