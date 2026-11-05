/**
 * FAQ d'un article saisie à la main dans l'admin.
 *
 * Le formulaire envoie des champs répétés `faqQuestion` / `faqAnswer` (même
 * ordre). Ce qui est stocké dans posts.faq a la même forme que pour les
 * articles générés : [{ question, answer }]. La page article affiche ce tableau
 * ET en tire le JSON-LD FAQPage, donc le texte visible et le balisage ne
 * peuvent pas diverger.
 *
 * Texte brut uniquement : la réponse est rendue comme du texte et envoyée telle
 * quelle à Google, donc on retire toute balise HTML collée depuis un Google Doc.
 */

export const MAX_FAQ_ITEMS = 8;
export const MAX_FAQ_QUESTION = 200;
export const MAX_FAQ_ANSWER = 1200;

function toPlainText(value) {
  return String(value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * @param {FormData} formData
 * @returns {{ faq: Array<{question: string, answer: string}> | null, error?: string }}
 *   faq vaut null s'il n'y a aucune question (colonne laissée vide).
 */
export function parseFaqFromForm(formData) {
  const questions = formData.getAll("faqQuestion");
  const answers = formData.getAll("faqAnswer");
  const rows = Math.max(questions.length, answers.length);
  const faq = [];

  for (let i = 0; i < rows; i += 1) {
    const question = toPlainText(questions[i]);
    const answer = toPlainText(answers[i]);
    if (!question && !answer) continue;

    const label = `FAQ, ligne ${i + 1}`;
    if (!question || !answer) {
      return { faq: null, error: `${label} : la question et la réponse doivent être remplies toutes les deux.` };
    }
    if (question.length > MAX_FAQ_QUESTION) {
      return { faq: null, error: `${label} : la question dépasse ${MAX_FAQ_QUESTION} caractères.` };
    }
    if (answer.length > MAX_FAQ_ANSWER) {
      return { faq: null, error: `${label} : la réponse dépasse ${MAX_FAQ_ANSWER} caractères.` };
    }
    faq.push({ question, answer });
  }

  if (faq.length > MAX_FAQ_ITEMS) {
    return { faq: null, error: `FAQ : ${MAX_FAQ_ITEMS} questions au maximum.` };
  }
  return { faq: faq.length > 0 ? faq : null };
}
