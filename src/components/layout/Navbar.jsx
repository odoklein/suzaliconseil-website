"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { useBooking } from "../../context/BookingContext";

/* One source of truth: the desktop bar and the mobile panel read the same list,
   so a new route can never appear in one and not the other. */
const NAV_LINKS = [
  { href: "/offres", label: "Offres" },
  { href: "/etudes-de-cas", label: "Études de cas" },
  { href: "/equipe", label: "Équipe" },
  { href: "/carriers", label: "Carrières" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

const MEGA_MENU_ID = "nav-services-panel";
const MOBILE_PANEL_ID = "nav-mobile-panel";

/* Hovering out of the trigger toward the panel crosses a few dead pixels;
   closing on a delay lets the pointer make the trip. */
const HOVER_INTENT_MS = 140;

export default function Navbar({ services }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  const servicesTriggerRef = useRef(null);
  const servicesWrapRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const closeTimer = useRef(null);

  const isCurrent = (href) =>
    pathname === href || pathname?.startsWith(`${href}/`);
  const isServicesSection = pathname?.startsWith("/services");

  const openServices = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  }, []);

  const closeServices = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsServicesOpen(false);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(
      () => setIsServicesOpen(false),
      HOVER_INTENT_MS,
    );
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Escape closes the open surface and hands focus back to its trigger.
  useEffect(() => {
    if (!isServicesOpen && !isMobileMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (isServicesOpen) {
        closeServices();
        servicesTriggerRef.current?.focus();
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isServicesOpen, isMobileMenuOpen, closeServices]);

  // Pointer down outside the services group closes it — replaces the
  // full-viewport invisible div that used to swallow clicks on the page.
  useEffect(() => {
    if (!isServicesOpen) return;

    const onPointerDown = (event) => {
      if (!servicesWrapRef.current?.contains(event.target)) closeServices();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isServicesOpen, closeServices]);

  // The mega menu grows from the trigger, not from the middle of the screen.
  useEffect(() => {
    if (!isServicesOpen) return;
    const rect = servicesTriggerRef.current?.getBoundingClientRect();
    if (rect) {
      document.documentElement.style.setProperty(
        "--dropdown-origin-x",
        `${Math.round(rect.left + rect.width / 2)}px`,
      );
    }
  }, [isServicesOpen]);

  // Lock the page behind the mobile panel so scrolling past its end doesn't
  // chain to the document underneath.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMobileMenuOpen]);

  // Tabbing past the last link in the panel closes it.
  const handleServicesBlur = (event) => {
    if (!servicesWrapRef.current?.contains(event.relatedTarget)) {
      closeServices();
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>

      <header
        className={`navbar-shell fixed z-40 w-full ${
          isServicesOpen || isMobileMenuOpen ? "is-open" : ""
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Suzali Conseil, accueil"
              onClick={() => {
                closeServices();
                setIsMobileMenuOpen(false);
              }}
              className="nav-focus flex items-center gap-2 group"
            >
              <Image
                src="/assets/greenlogo.svg"
                alt="Suzali Conseil"
                width={160}
                height={50}
                priority
                className="h-10 w-auto transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-[1.025]"
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Navigation principale"
              className="hidden items-center gap-6 lg:flex xl:gap-7"
            >
              <div
                ref={servicesWrapRef}
                className="relative flex h-[72px] items-center"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
                onBlur={handleServicesBlur}
              >
                <button
                  ref={servicesTriggerRef}
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-controls={MEGA_MENU_ID}
                  aria-current={isServicesSection ? "page" : undefined}
                  data-open={isServicesOpen}
                  onClick={() =>
                    isServicesOpen ? closeServices() : openServices()
                  }
                  className={`nav-link-premium nav-focus flex items-center gap-1.5 text-[14px] font-semibold tracking-[-0.01em] ${
                    isServicesOpen
                      ? "text-[var(--color-primary-main)]"
                      : "text-[var(--color-primary-dark)] hover:text-[var(--color-primary-main)]"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-[var(--dropdown-open-dur)] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <MegaMenu
                  id={MEGA_MENU_ID}
                  services={services}
                  isOpen={isServicesOpen}
                  onClose={closeServices}
                />
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="nav-link-premium nav-focus text-[14px] font-semibold tracking-[-0.01em] text-[var(--color-primary-dark)] hover:text-[var(--color-primary-main)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA & mobile toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openBooking}
                className="nav-cta nav-focus group/cta relative hidden items-center gap-2 overflow-hidden rounded-full bg-[#B0FF5B] px-5 py-2.5 text-sm font-bold tracking-[-0.01em] text-[#0D332B] shadow-[0_10px_24px_-15px_rgba(13,51,43,0.62)] transition-[background-color,transform,box-shadow] duration-[var(--dropdown-open-dur)] ease-[var(--dropdown-ease)] hover:-translate-y-0.5 hover:bg-[#C8FF8D] hover:shadow-[0_14px_30px_-16px_rgba(13,51,43,0.7)] active:translate-y-px lg:inline-flex"
              >
                <span className="relative z-10">Planifier un appel</span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="relative z-10 transition-transform duration-[var(--dropdown-open-dur)] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-1"
                />
                <span className="nav-cta-sweep" aria-hidden="true" />
              </button>

              <button
                ref={mobileToggleRef}
                type="button"
                aria-label={
                  isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls={MOBILE_PANEL_ID}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className={`nav-focus inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-primary-dark)] transition-colors lg:hidden ${
                  isMobileMenuOpen
                    ? "bg-[#B0FF5B]"
                    : "hover:bg-[#B0FF5B]/55"
                }`}
              >
                <span
                  className="t-icon-swap"
                  data-state={isMobileMenuOpen ? "b" : "a"}
                >
                  <Menu className="t-icon" data-icon="a" size={24} />
                  <X className="t-icon" data-icon="b" size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id={MOBILE_PANEL_ID}
          className={`nav-mobile-panel t-stagger absolute left-0 top-full w-full overflow-hidden border-t border-[var(--color-primary-dark)]/8 bg-[#FCFDFC]/97 backdrop-blur-xl lg:hidden ${
            isMobileMenuOpen ? "is-open is-shown" : ""
          }`}
          style={{ height: "calc(100dvh - var(--nav-h))" }}
        >
          <nav
            aria-label="Navigation mobile"
            className="flex h-full flex-col gap-6 overflow-y-auto overscroll-contain p-6 pb-10"
          >
            <div className="t-stagger-line" style={{ "--i": 0 }}>
              <h2 className="mb-3 text-sm font-bold tracking-[-0.01em] text-[var(--color-primary-dark)]">
                Nos services
              </h2>
              <ul className="flex flex-col pl-4 border-l border-[var(--color-primary-dark)]/15">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={
                        isCurrent(`/services/${service.slug}`)
                          ? "page"
                          : undefined
                      }
                      className="nav-focus flex min-h-11 items-center py-1 text-[15px] font-medium tracking-[-0.01em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary-main)] aria-[current=page]:font-semibold aria-[current=page]:text-[var(--color-primary-dark)]"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-[var(--color-primary-dark)]/10" />

            <ul className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <li
                  key={link.href}
                  className="t-stagger-line"
                  style={{ "--i": index + 1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className="nav-focus flex min-h-14 items-center text-lg font-bold tracking-[-0.02em] text-[var(--color-primary-dark)] transition-colors hover:text-[var(--color-primary-main)] aria-[current=page]:text-[var(--color-primary-main)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBooking();
              }}
              className="nav-focus t-stagger-line mt-auto flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#B0FF5B] font-bold text-[#0D332B] shadow-[0_12px_30px_-16px_rgba(13,51,43,0.62)] transition-transform active:scale-[0.99]"
              style={{ "--i": NAV_LINKS.length + 1 }}
            >
              Planifier un appel
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
