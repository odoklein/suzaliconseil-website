"use client";

import { useState } from "react";

const MAX_ROWS = 8;

/**
 * FAQ d'un article : lignes question / réponse. Les champs répétés
 * faqQuestion / faqAnswer sont lus côté serveur par parseFaqFromForm().
 * Les lignes entièrement vides sont ignorées à l'enregistrement.
 * `initial` pré-remplit les lignes (édition d'un article existant).
 */
export default function FaqFields({ initial = [] }) {
  const start = initial.length > 0 ? initial : [{ question: "", answer: "" }];
  const [rows, setRows] = useState(start.map((item, id) => ({ id, ...item })));
  const [nextId, setNextId] = useState(start.length);

  const addRow = () => {
    if (rows.length >= MAX_ROWS) return;
    setRows([...rows, { id: nextId, question: "", answer: "" }]);
    setNextId(nextId + 1);
  };
  const removeRow = (id) => setRows(rows.filter((row) => row.id !== id));

  return (
    <fieldset className="space-y-3 rounded-xl border border-gray-200 p-4">
      <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
        FAQ (optionnel)
      </legend>
      <p className="text-xs text-gray-400">
        Affichée sous l&apos;article et transmise à Google (balisage FAQPage).
        Visez 4 à 5 questions, des réponses de 2 à 3 phrases, en texte brut.
      </p>
      {rows.map((row, index) => (
        <div
          key={row.id}
          className="space-y-2 rounded-lg bg-gray-50/70 p-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">
              Question {index + 1}
            </span>
            {rows.length > 1 && (
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                className="text-xs font-semibold text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            )}
          </div>
          <input
            type="text"
            name="faqQuestion"
            maxLength={200}
            defaultValue={row.question}
            aria-label={`Question ${index + 1}`}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0D332B]/20"
            placeholder="Comment Suzali Conseil mesure-t-elle les rendez-vous qualifiés ?"
          />
          <textarea
            name="faqAnswer"
            rows={3}
            maxLength={1200}
            defaultValue={row.answer}
            aria-label={`Réponse ${index + 1}`}
            className="w-full resize-y rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0D332B]/20"
            placeholder="Réponse courte et concrète."
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addRow}
        disabled={rows.length >= MAX_ROWS}
        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 disabled:opacity-40"
      >
        + Ajouter une question ({rows.length}/{MAX_ROWS})
      </button>
    </fieldset>
  );
}
