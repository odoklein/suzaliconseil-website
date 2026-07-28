"use client";

import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Briefcase, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F6F7F4] px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0D332B]/5 text-[#0D332B]">
          <span className="text-4xl font-extrabold">404</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0D332B] mb-6">
          Oups ! Page introuvable.
        </h1>
        
        <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          Il semble que l&apos;URL soit incorrecte ou que la page ait été déplacée.
          Ne vous inquiétez pas, voici quelques liens utiles pour retrouver votre chemin :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Link 
            href="/"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF6A3D] transition-all group"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6A3D]/10 text-gray-500 group-hover:text-[#FF6A3D] transition-colors">
              <Home size={24} />
            </div>
            <span className="font-bold text-[#0D332B]">Accueil</span>
          </Link>
          
          <Link 
            href="/services"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF6A3D] transition-all group"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6A3D]/10 text-gray-500 group-hover:text-[#FF6A3D] transition-colors">
              <Briefcase size={24} />
            </div>
            <span className="font-bold text-[#0D332B]">Services</span>
          </Link>

          <Link 
            href="/actualites"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF6A3D] transition-all group"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6A3D]/10 text-gray-500 group-hover:text-[#FF6A3D] transition-colors">
              <BookOpen size={24} />
            </div>
            <span className="font-bold text-[#0D332B]">Actualités</span>
          </Link>

          <Link 
            href="/contact"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF6A3D] transition-all group"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6A3D]/10 text-gray-500 group-hover:text-[#FF6A3D] transition-colors">
              <Mail size={24} />
            </div>
            <span className="font-bold text-[#0D332B]">Contact</span>
          </Link>
        </div>

        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-[#FF6A3D] font-bold hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} />
          Retour à la page précédente
        </button>
      </div>
    </div>
  );
}
