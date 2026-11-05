"use client";

import { useActionState } from "react";
import { updatePostContent } from "../../actions";
import FaqFields from "../../FaqFields";

export default function EditArticleForm({ postId, excerpt, content, faq }) {
  const [state, formAction, pending] = useActionState(updatePostContent, null);

  return (
    <form action={formAction} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <input type="hidden" name="postId" value={postId} />

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
          Extrait (optionnel)
        </label>
        <input
          type="text"
          name="excerpt"
          defaultValue={excerpt}
          className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0D332B]/20"
          placeholder="Meta description / accroche"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
          Contenu (HTML) *
        </label>
        <textarea
          name="content"
          required
          rows={22}
          defaultValue={content}
          className="w-full resize-y rounded-xl border border-gray-200 px-3.5 py-2.5 font-mono text-sm outline-none focus:ring-2 focus:ring-[#0D332B]/20"
        />
      </div>

      <FaqFields initial={faq} />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-[#0D332B] px-5 py-2.5 text-sm font-bold text-white disabled:opacity-50"
        >
          {pending ? "Enregistrement…" : "Enregistrer le texte et la FAQ"}
        </button>
        {state?.ok && (
          <p role="status" className="text-sm font-semibold text-emerald-700">
            Article mis à jour. La page en ligne est rafraîchie.
          </p>
        )}
        {state && !state.ok && (
          <p role="alert" className="text-sm font-semibold text-red-600">
            {state.error}
          </p>
        )}
      </div>
    </form>
  );
}
