# Plan d'Automatisation de la Génération d'Articles (Cron Job)

Ce document détaille le fonctionnement du système de génération automatique d'articles d'actualité mis en place pour le projet Suzali Migration.

## 1. Vue d'Ensemble

L'objectif est d'automatiser la création de contenu SEO expert pour le blog (Actualités) sans intervention humaine, en utilisant l'intelligence artificielle générative de Google (Gemini).

## 2. Planification (Schedules)

Le job est configuré via Vercel Cron.

- **Chemin :** `/api/cron/generate-article`
- **Fréquence :** `0 8 * * 1,3,5` (Lundi, Mercredi et Vendredi à 08h00 UTC).

## 3. Flux de Travail Technique

### A. Éveil du Cron (API Endpoint)

Le point d'entrée est `src/app/api/cron/generate-article/route.js`.

1. **Sécurité :** Vérification du header `Authorization: Bearer <CRON_SECRET>`.
2. **Paramètres :** Récupération des réglages depuis la table `contentGeneratorSettings` (Ton de voix, auto-publication).

### B. Génération du Contenu (Gemini Pro)

Appel à la fonction `generateArticle` dans `src/lib/gemini.js`.

1. **Sélection de Mots-clés :** Un mot-clé SEO est choisi aléatoirement dans une liste prédéfinie de thématiques B2B (Prospection, Lead Gen, Digital).
2. **Prompt Expert :** Un prompt complexe instruit Gemini de se comporter comme un rédacteur SEO expert pour Suzali Conseil.
3. **Format :** Gemini répond en format JSON structuré contenant :
   - `title` : Titre optimisé (60 char max).
   - `excerpt` : Meta-description SEO.
   - `content` : Corps de l'article en HTML valide (H2, paragraphes, listes).
   - `metaKeywords` : Tags SEO.
   - `topic` : Catégorie automatique ('digital' ou 'commercial').

### C. Génération de l'Image (Gemini Image Modalities)

Appel à la fonction `generateFeaturedImage` dans `src/lib/featured-image.js`.

1. **Prompt Visuel :** Basé sur le titre et l'extrait de l'article.
2. **Style :** Photographie éditoriale haut de gamme, cinématique, sans texte.
3. **Modèle :** Utilisation de `gemini-2.0-flash-exp` (ou modèle d'image disponible via l'API Google).
4. **Post-traitement :**
   - Redimensionnement auto à **1200x630px** (via `sharp`).
   - Upload sur **S3 (AWS/Cloudflare R2)**.
   - Retour de l'URL publique.

### D. Enregistrement en Base de Données

1. **Insertion :** L'article est créé dans la table `posts`.
2. **Statut :** Si `autoPublish` est activé dans les réglages, l'article est immédiatement visible sur le site.
3. **Historique :** Mise à jour de `lastRunAt` dans les réglages du générateur.

## 4. Configuration Environnement

Le système repose sur les variables d'environnement suivantes :

- `GEMINI_API_KEY` : Clé API Google AI Studio.
- `CRON_SECRET` : Clé de sécurité pour autoriser l'appel Vercel Cron.
- `AWS_S3_BUCKET` / `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` : Pour l'hébergement des images.
- `GEMINI_MODEL` : Définit le modèle de texte (ex: `gemini-2.5-flash`).
- `GEMINI_IMAGE_MODEL` : Définit le(s) modèle(s) gérant l'image.

## 5. Maintenance

Pour modifier le comportement du générateur :

- **Mots-clés :** Éditer la constante `B2B_KEYWORDS` dans `src/lib/gemini.js`.
- **Style Visuel :** Modifier le prompt dans `src/lib/featured-image.js`.
- **Fréquence :** Modifier le fichier `vercel.json` à la racine du projet.
