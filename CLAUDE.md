# CLAUDE.md — SEO de suzaliconseil.com

> Ce fichier se place **à la racine du repo** `github.com/odoklein/suzaliconseil-website`.
> Claude Code le lit automatiquement à chaque session.
> Pour démarrer, il suffit de dire : **« Continue le SEO »**.

---

## 1. Mission

Faire entrer suzaliconseil.com dans le **top 5 de Google.fr** sur nos recherches cibles
(agence outbound, prospection commerciale externalisée, agence génération de leads B2B,
marketing B2B externalisé…).

Point de départ (Search Console, juillet → octobre 2026) : 68 clics, position moyenne 40,9,
~72 % des clics sur la marque, 41 pages indexées pour 215 non indexées, slugs d'articles
avec suffixe aléatoire (`...-guide-complet-2024-mug26uk3`), et 3 pages Suzali qui se
cannibalisent sur « prospection commerciale externalisée ».

Documents de référence :
- **Plan technique détaillé** : `SEO_PLAN_CLAUDE_CODE.md` (phases 1 à 8, mots-clés, gabarits de pages).
- **Plan contenu de l'équipe marketing** : https://claude.ai/artifact/YVRtB12Cen8LGvRj5KLjvd
  (section « Côté technique — Pour Odo »). Les tâches d'Odo y sont reprises en §4.

---

## 2. Règle d'or : local d'abord, en ligne seulement après mon accord

Tu travailles **seul** sur les tâches, mais **rien ne part en production sans mon « OK en ligne »**.

### Cycle obligatoire pour CHAQUE tâche

1. **Synchroniser** : `git checkout main && git pull`.
2. **Brancher** : `git checkout -b seo/<id-de-la-tâche>` (ex. `seo/B2-sitemap`, `seo/T2-ai-writer`).
3. **Coder** la tâche. Petits commits clairs, en anglais (ex. `seo: add self-referencing canonical`).
4. **Vérifier en local** :
   - `npm run build` (ou la commande du projet) doit passer sans erreur ;
   - lancer le serveur local (`npm run dev` / `npm start`) ;
   - contrôler le **HTML rendu côté serveur** avec `curl -s http://localhost:<port>/<page>` :
     `<title>`, meta description, canonical, `<h1>`, JSON-LD, statut HTTP, redirections (`curl -I`) ;
   - lancer les tests et le lint s'ils existent.
5. **Me faire un rapport** (format §7) puis **t'arrêter** et poser la question :
   **« Je peux mettre en ligne ? »**
6. **Seulement si je réponds « OK en ligne »** (ou « go », « valide », « tu peux pousser ») :
   `git push -u origin seo/<id>`, ouvrir une Pull Request vers `main` avec `gh pr create`,
   puis la merger (`gh pr merge --squash`) — le merge sur `main` déclenche le déploiement.
   Après déploiement, revérifier l'URL de production avec `curl -I` et le noter dans `SEO_CHANGELOG.md`.
7. Si je demande des corrections : rester sur la même branche, corriger, revenir à l'étape 4.

### Interdits absolus

- ❌ Jamais de `git push` sur `main`, jamais de merge, jamais de déploiement sans mon accord explicite **pour cette tâche**.
  Un accord pour une tâche ne vaut pas pour la suivante.
- ❌ Jamais de `git push --force`, de suppression de branche distante, ni de réécriture d'historique.
- ❌ Jamais de modification de la base de données de production, des variables d'environnement
  ou des réglages d'hébergement (Vercel / autre) sans me demander.
- ❌ Jamais de suppression d'article ou de page : on fusionne + redirection 301, après validation.
- ❌ Ne rien inventer : chiffres clients, témoignages, logos, prix, certifications, avis.
  Si une donnée réelle manque → `<!-- TODO SUZALI : ... -->` et la lister dans le rapport.
- ❌ Ne jamais écrire de critique ou d'info invérifiable sur un concurrent (publicité comparative).

---

## 3. Démarrage de chaque session (routine)

1. Lire ce fichier, `SEO_CHANGELOG.md` et l'état des cases du §4 et §5.
2. `git status` + `git branch` : s'il reste une branche `seo/*` non mergée, me le dire en premier
   (« la tâche X attend toujours ton OK »).
3. Me demander s'il y a du nouveau dans le plan contenu
   (une décision de fusion, un Google Doc d'article prêt, un statut « Envoyé à Odo »).
   Si tu as accès à l'outil Artifact / ArtifactData, lis directement la collection `taches`
   de l'artifact https://claude.ai/artifact/YVRtB12Cen8LGvRj5KLjvd (lecture seule, ne modifie pas les statuts de l'équipe).
4. Choisir la prochaine tâche avec l'ordre de priorité du §6, l'annoncer en une phrase, puis appliquer le cycle du §2.

Une seule tâche à la fois **par branche**. Tu peux préparer plusieurs branches en parallèle
(ex. une tâche Odo bloquée en attente d'un Google Doc pendant que tu avances une tâche autonome),
mais chacune a son propre rapport et son propre OK.

---

## 4. Piste A — Tâches d'Odo (plan contenu), menées en parallèle

Ces tâches viennent de la section « Côté technique » du plan contenu. Elles dépendent du travail
de l'équipe marketing : **dès qu'une est débloquée, elle passe avant la piste B.**

- [ ] **T1 — Fusions et redirections (cannibalisation)** · id plan : `t-cannib`
  - Déclencheur : l'équipe a rempli les relevés Search Console (tâche `s1-cannib`) et m'a envoyé ses notes.
  - Toi : me proposer, pour chaque recherche (« prospection commerciale externalisée »,
    « génération de leads b2b », « agence outbound »), **quelle page garder** (plus d'impressions +
    meilleure position) et quelles pages fusionner. **Attendre ma décision.**
  - Puis : fusionner le contenu utile dans la page gardée, 301 des anciennes URL, mise à jour
    des liens internes et du sitemap.
  - Pistes probables : « Pourquoi externaliser… » → fusionné dans l'article « vrai coût » ;
    « Boostez vos ventes B2B… » à arbitrer face à `/services/generation-leads-b2b`.

- [ ] **T2 — Réorienter l'outil d'articles automatiques** · id plan : `t-moteur` · ✅ autonome
  - Fichier : `src/lib/ai-writer.js`.
  - Retirer du pool tous les mots-clés déjà couverts par une page service ou par les 4 articles
    du plan contenu (prix d'agence, interne vs externe, comparatif d'agences, forfait vs paiement
    au rendez-vous — dont « combien coûte la génération de leads b2b »).
  - Le recentrer sur des questions pratiques (« comment… », « exemple de… », « modèle de… »)
    qui ne concurrencent aucune page service.
  - Cadence : 1 article par semaine maximum.
  - Vérifier aussi que les articles générés n'ont plus de suffixe aléatoire dans le slug (voir B2).

- [ ] **T3 — Publier les 4 articles du plan contenu avec leur FAQ** · id plan : `t-publier`
  - Déclencheur : un article passe au statut « Envoyé à Odo » avec le lien de son Google Doc.
  - Prérequis autonome à faire **avant** : tâche B9 (FAQ sur les articles manuels).
  - Toi : convertir le Doc en article (texte **tel quel**, ne pas réécrire les chiffres),
    FAQ + JSON-LD `FAQPage`, poser les liens du brief, vérifier titre < 60 car., description 130–160 car.
  - Articles attendus :
    1. « Combien coûte une agence de prospection B2B ? Prix et modèles »
    2. « Internaliser ou externaliser sa prospection : le vrai coût »
    3. « Agences de prospection B2B en France : le comparatif »
    4. « Forfait ou paiement au rendez-vous : quel modèle choisir ? »
  - Après publication : me donner l'URL pour que l'équipe passe le statut à « Publié »
    et demande l'indexation dans Search Console.

- [ ] **T4 — Ajouter les liens internes listés par l'équipe** (tâche `s3-maillage`)
  - Déclencheur : l'équipe a noté « ancien article → nouvel article → phrase ».

### Règles de coordination avec l'équipe marketing

- L'équipe modifie elle-même les **titres SEO de 4 anciens articles** dans l'admin (tâche `s1-titres`).
  Ne pas écraser ces titres par du code ou un seed.
- L'admin limite le titre SEO à **42 caractères**, alors que la cible est 50–60. Proposer (tâche B10)
  de relever cette limite, sans le faire sans mon OK.
- Ne pas toucher aux pages et articles visés par T1 tant que la décision de fusion n'est pas prise.

---

## 5. Piste B — Tâches que tu peux faire seul (backlog autonome)

Tu peux les enchaîner sans attendre de données de l'équipe. Le détail de chaque point est
dans `SEO_PLAN_CLAUDE_CODE.md`. Cocher la case ici quand la tâche est **en ligne**.

- [x] **B1 — Audit du repo** (lecture seule) → `SEO_AUDIT.md` : framework, mode de rendu, hébergement,
  commande de build, **comment se fait le déploiement**, routes, origine du suffixe `-mug26uk3`,
  sources d'URL en double ou infinies (paramètres, pagination, slash final, www, majuscules…).
  *Pas de mise en ligne : juste me présenter l'audit.*
- [x] **B2 — Slugs stables** pour `/actualites/` (sans suffixe aléatoire ni année) + **301** de chaque ancienne URL. *(Code en ligne le 22/10/2026 ; la migration des slugs des articles existants reste à faire, sur OK séparé.)*
  Me montrer la table complète des redirections avant le OK.
- [ ] **B3 — Canonical absolue auto-référente** sur toutes les pages + une seule politique de slash final
  + 301 pour www / http / slash.
- [ ] **B4 — `sitemap.xml` automatique** (uniquement pages canoniques, 200, indexables, avec `lastmod`).
- [ ] **B5 — `robots.txt`** : tout autoriser sauf admin / API / preview, avec lien vers le sitemap.
- [ ] **B6 — Vraies 404** (statut HTTP 404) + `noindex,follow` sur recherche interne, filtres vides, paramètres.
- [x] **B7 — Balises on-page** : `<html lang="fr">`, title unique, meta description unique, un seul H1,
  Open Graph / Twitter, fil d'Ariane visible.
- [x] **B8 — JSON-LD** : `Organization` + `ProfessionalService` (accueil), `Service` + `BreadcrumbList`
  (+ `FAQPage` si FAQ visible) sur les pages services, `BlogPosting` + `BreadcrumbList` sur les articles.
  Données réelles uniquement, sinon TODO SUZALI.
- [ ] **B9 — FAQ sur les articles manuels** : ajouter à l'admin la possibilité de saisir une FAQ
  (questions / réponses) sur un article manuel, rendue en HTML + JSON-LD `FAQPage`. Débloque T3.
- [ ] **B10 — Limite du titre SEO dans l'admin** : passer de 42 à 60 caractères, avec compteur. (OK requis)
- [ ] **B11 — Images et performance** : `alt` en français, WebP/AVIF, `width`/`height`, lazy-load sauf hero,
  `fetchpriority="high"` sur l'image LCP, `font-display: swap`, JS non critique différé.
  Mesurer Lighthouse mobile avant / après.
- [ ] **B12 — Maillage interne et navigation** : menu « Services », footer, aucune page orpheline,
  tout à 3 clics max de l'accueil, ancres descriptives (pas de « cliquez ici »).
- [ ] **B13 — Quick wins** (phase 5 du plan) : `marketing b2b externalisé` (pos. 10,7),
  article unique « Inbound vs outbound » (pos. 19–27). Texte en brouillon → **me le montrer avant**.
- [ ] **B14 — Contrôle final** → `SEO_REPORT.md` (liens cassés, statuts, titres uniques, JSON-LD valide,
  table des 301 testée, liste des TODO SUZALI, actions manuelles pour l'équipe).

Les pages services (phase 4) et les articles de blog (phase 7) demandent des textes : tu peux
préparer des **brouillons**, mais ils restent en local tant que je ne les ai pas relus.

---

## 6. Ordre de priorité

1. Une tâche **déjà validée** qui attend d'être mise en ligne.
2. Une tâche **piste A débloquée** (T1 → T3 → T4).
3. Les tâches qui débloquent l'équipe : **B9** (FAQ articles) puis **T2** (ai-writer).
4. L'indexation : **B1 → B2 → B3 → B4 → B5 → B6** (c'est le plus gros frein actuel).
5. Le reste de la piste B dans l'ordre.

Si tu es bloqué (donnée manquante, décision à prendre), note-le dans le rapport,
laisse la branche en l'état et passe à la tâche suivante.

---

## 7. Format du rapport avant chaque « Je peux mettre en ligne ? »

```
Tâche : B4 — sitemap.xml automatique        Branche : seo/B4-sitemap
Ce qui change : (3 à 5 lignes, en français simple)
Fichiers touchés : ...
Vérifié en local : build OK · curl /sitemap.xml → 200, 37 URL · aucune URL en 301/404 dedans
Redirections ajoutées : (tableau ancienne URL → nouvelle URL, ou « aucune »)
Risques : ...
TODO SUZALI / à faire par l'équipe : ...
→ Je peux mettre en ligne ?
```

Après chaque mise en ligne, ajouter une entrée dans **`SEO_CHANGELOG.md`** :
date, tâche, PR, fichiers, URL vérifiées en production, actions manuelles restantes
(ex. « soumettre le sitemap dans Search Console », « demander l'indexation de /… »).

---

## 8. Conventions

- Tout le contenu **visible sur le site est en français**, ton B2B professionnel. Code et commits en anglais.
- Une recherche = une seule page Suzali (pas de cannibalisation).
- Pas d'année dans un titre sauf engagement de mise à jour annuelle.
- Titres, meta, canonical et JSON-LD doivent être dans le **HTML rendu par le serveur**, pas seulement injectés en JavaScript.
- Ne jamais casser une URL indexée ou qui reçoit des clics : toujours une 301.
- Ne jamais committer de secrets (`.env`, clés API).
