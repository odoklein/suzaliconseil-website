"use client";

import { useState } from "react";
import { login } from "../../app/portal/login/actions";

export default function PortalLoginForm() {
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);
    const result = await login(formData);
    if (result?.error) setError(result.error);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-sm">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-white/80 mb-2">
          Identifiant client
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          required
          placeholder="ex: mon-entreprise"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#b0ff5b]/50 focus:border-[#b0ff5b]"
        />
      </div>
      <div>
        <label htmlFor="token" className="block text-sm font-medium text-white/80 mb-2">
          Code d&apos;accès
        </label>
        <input
          type="password"
          id="token"
          name="token"
          required
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#b0ff5b]/50 focus:border-[#b0ff5b]"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 rounded-xl font-bold bg-[#b0ff5b] text-[#0d332b] hover:bg-[#a0eb50] transition-colors"
      >
        Se connecter
      </button>
    </form>
  );
}
