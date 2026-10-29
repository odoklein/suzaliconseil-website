# SEO_REPORT : contrôle final (29/10/2026)

Périmètre : ce qui est **en ligne sur `main`** (PR #3 à #9). C4 (nettoyage des promesses, fusion de l'article Paris) est **en ligne depuis le 29/10/2026** (PR #11), avec l'accord du propriétaire après captures.

## 1. Ce qui est en ligne

| Chantier | Résultat |
|---|---|
| B1 audit, B2 slugs stables + 301 (code), B3 canonical + politique d'URL, B4 sitemap, B5 robots, B6 vraies 404 + noindex | En ligne et vérifiés en production |
| B7 balises on-page, B8 JSON-LD (rendu serveur) | En ligne |
| T2 générateur d'articles recentré (1 article par semaine, aucun chiffre non sourcé) | En ligne, **génération en pause** tant que la table des essais n'est pas créée (voir §5) |
| C1 contenu long sur 14 pages services (1 268 à 2 150 mots, FAQ balisée) | En ligne |
| C2 deux nouvelles pages : marketing B2B externalisé, génération de leads Paris | En ligne |
| C3 chaque article relié à sa page service | En ligne |

## 2. Contrôles de production (29/10/2026)

- **Sitemap** : 39 URL (26 pages + 13 articles), toutes en 200, `lastmod` réels, aucune URL redirigée ou en 404.
- **Chaque page du sitemap** : `lang="fr"`, un seul H1, canonical auto-référente, JSON-LD valide, titre et description uniques. **Deux exceptions**, des articles dont la méta description est trop courte (à rallonger dans l'admin, 130 à 160 caractères) : « agence de génération de leads B2B : comment bien choisir » (117) et « agence outbound vs inbound » (105).
- **Prix** : tout prix du JSON-LD est écrit en clair sur sa page (une seule page porte des offres, la prospection externalisée).
- **robots.txt** : autorise tout sauf admin, API, portail, espaces privés ; lien vers le sitemap ; `/api/og` reste explorable.
- **404** : vraie 404 (pas de soft 404) pour une URL ou un article inconnu, `noindex`, pas de canonical ; admin et portail en `noindex`.
- **Redirections** : les 10 redirections fixes de `main` répondent en redirection permanente (308) vers leur destination en un seul saut, et la destination répond 200.
- **Maillage** : 39 pages atteignables depuis l'accueil, profondeur maximale de 3 clics, aucune page orpheline, aucune ancre du type « cliquez ici » / « en savoir plus ». Le moins lié : l'article « le fichier de prospection B2B » (2 liens entrants).
- **Images** (135) : toutes ont un attribut `alt`, 10 sont décoratives (alt vide) ; 76 en chargement différé ; les images prioritaires du premier écran sont marquées `fetchpriority="high"` ; le rendu est converti par Next.js (WebP/AVIF) même quand la source est un PNG.
- **Lighthouse mobile (mesure seule, rien modifié)** : accueil performance 65, SEO 100, accessibilité 96, bonnes pratiques 100 ; page génération de leads performance 72, SEO 100, accessibilité 93, bonnes pratiques 100. Le premier affichage est bon (FCP 1,9 s) ; le LCP simulé est de 5,6 à 6,0 s, avec le titre H1 comme élément LCP et un long délai de rendu (travail du fil principal 3,0 s, 57 Kio de JavaScript inutilisé). Piste d'amélioration pour plus tard : réduire le JavaScript du premier écran.

## 3. Liste « TODO SUZALI » dans le code

- `src/lib/structured-data.js` : horaires d'ouverture à fournir (non publiés) ; auteur nominatif des articles si souhaité.

## 4. Ce qui reste à faire (tâches du plan)

- **B9** (FAQ sur les articles manuels) : code prêt, test navigateur en attente de la base de test (voir §5). Débloque T3.
- **B10** (limite du titre SEO de l'admin 42 → 60 caractères) : attend l'accord du propriétaire.
- **B11** : contrôles ci-dessus conformes ; l'optimisation du JavaScript du premier écran reste à décider.
- **B13** : brouillons à relire avant toute publication (page « marketing B2B externalisé » créée en C2 ; l'article « outbound vs inbound » à reprendre).
- **T1** (fusions), **T3** (4 articles du plan contenu), **T4** (liens listés par l'équipe) : attendent les décisions et documents de l'équipe.

## 5. Actions manuelles (équipe / personne ayant accès à l'hébergement)

1. Remplacer les clés de production par de nouvelles valeurs, **le secret du cron en premier**, puis redéployer.
2. Créer la table des essais de génération (`docs/article-attempts-table.sql`), puis lancer une vérification à sec (`?dryRun=1`) avant de réactiver la génération hebdomadaire.
3. Fournir l'adresse de la branche de test de la base pour tester B9 et la migration des slugs ; la migration des slugs en production demande un accord séparé.
4. Search Console : renvoyer le sitemap et demander l'indexation des 16 pages enrichies ou créées (C1, C2).
5. Admin : rallonger les deux méta descriptions citées au §2.
6. Compléter les coordonnées de l'hébergeur dans les mentions légales (champ encore à renseigner sur `/mentions-legales`).
7. Fournir 2 à 3 cas clients citables (secteur, problème, résultat) avec l'accord du client.

## 6. En attente de décision du propriétaire

- **C4** (branche locale `seo/C4-claims-cleanup`) : retire les promesses non confirmées, fusionne l'article « Boostez vos ventes B2B… Paris » dans la page Paris (redirection permanente de ses anciennes URL, retiré du sitemap), reformule les pages branding, données et IA. Captures dans `seo-reports/captures/C4/` (dossier local).
- Questions métier ouvertes : voir `seo-reports/QUESTIONS-METIER.md` (dossier local).

## 7. Règles suivies

Aucun chiffre, résultat client, logo ni témoignage inventé ; aucune critique de concurrent ; aucune modification de la base de production, des variables d'environnement ou de l'hébergement ; aucune suppression de page ou d'article (redirection uniquement) ; tout changement visible attend l'accord du propriétaire après captures.
