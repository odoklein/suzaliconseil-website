/**
 * URL de spam laissées par un ancien piratage du site WordPress.
 *
 * Google les a encore en mémoire (rapport « Introuvable (404) » de la Search
 * Console, relevé le 05/11/2026 : 118 URL). Elles n'ont jamais été des pages
 * Suzali : on répond 410 (« supprimée définitivement ») au lieu de 404, ce qui
 * pousse Google à les oublier plus vite. Aucune redirection : rediriger du spam
 * vers une vraie page transmettrait ce spam à la page.
 *
 * Deux formes seulement, volontairement étroites :
 *  1. /get…/<3 lettres><chiffres><4 lettres>items(.htm) : pages de spam générées ;
 *  2. un seul segment à la racine contenant un mot du jeu d'argent
 *     (casino, slot, bingo…). Aucune page du site n'est à la racine avec ces mots ;
 *     les articles sont sous /actualites/ et les services sous /services/.
 */

const GENERATED_ITEMS = /^\/get(?:i|id|idm)?\d*\/[a-z]{3}\d+[a-z]{4}items(?:\.htm)?\/?$/;

const GAMBLING_WORDS =
  /casino|slot|bingo|rummy|gambl|blackjack|roulette|poker|pontoon|jackpot|free-spins|spribe|evolution-gaming|card-spade-heart-diamond-club/;

const ROOT_SEGMENT = /^\/([^/]+)\/?$/;

/** true si le chemin (sans domaine ni paramètres) est une URL de spam connue. */
export function isSpamPath(pathname) {
  if (typeof pathname !== "string") return false;
  const path = pathname.toLowerCase();
  if (GENERATED_ITEMS.test(path)) return true;
  const root = ROOT_SEGMENT.exec(path);
  return Boolean(root && GAMBLING_WORDS.test(root[1]));
}
