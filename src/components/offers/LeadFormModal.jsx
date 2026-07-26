"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle } from "lucide-react";

export default function LeadFormModal({ offer, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          offerId: offer?.id,
          offerName: offer?.name,
        }),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi.");
      }

      setIsSuccess(true);
      // Reset form usually, or just leave success message
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="p-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#0D332B] mb-2">
              Demande envoyée !
            </h3>
            <p className="text-gray-500 mb-8 max-w-sm">
              Nous avons bien reçu votre demande pour l&apos;offre{" "}
              <span className="font-semibold text-[#FF6A3D]">
                {offer?.name}
              </span>
              . Notre équipe vous contactera très prochainement.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#0D332B] text-white rounded-xl font-medium hover:bg-black transition-colors"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full max-h-[90vh]">
            {/* Header */}
            <div className="p-8 pb-0">
              <h2 className="text-2xl font-bold text-[#0D332B] mb-2">
                Choisir l&apos;offre{" "}
                <span className="text-[#FF6A3D]">{offer?.name}</span>
              </h2>
              <p className="text-gray-500 text-sm">
                Remplissez ce formulaire pour démarrer votre collaboration.
              </p>
            </div>

            {/* Form */}
            <div className="p-8 pt-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6A3D] focus:ring-2 focus:ring-[#FF6A3D]/20 outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6A3D] focus:ring-2 focus:ring-[#FF6A3D]/20 outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6A3D] focus:ring-2 focus:ring-[#FF6A3D]/20 outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Votre société"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6A3D] focus:ring-2 focus:ring-[#FF6A3D]/20 outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message (Optionnel)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Précisez votre besoin..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6A3D] focus:ring-2 focus:ring-[#FF6A3D]/20 outline-none transition-all placeholder:text-gray-300 resize-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#FF6A3D] hover:bg-[#E85A2D] text-white font-bold rounded-xl shadow-lg shadow-[#FF6A3D]/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Envoi en cours...
                    </>
                  ) : (
                    "Confirmer la demande"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
