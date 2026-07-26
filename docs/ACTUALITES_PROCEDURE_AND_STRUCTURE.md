# Actualités – Procédure et structure

## Comment ça doit fonctionner

1. **Création des articles**
   - **Cron (Vercel)** : à la date/heure définie (ex. lundi, mercredi, vendredi à 8h UTC), Vercel appelle `GET /api/cron/generate-article` avec le secret.
   - **Manuel (admin)** : vous allez sur `/admin`, vous vous connectez, puis vous cliquez sur « Générer un article maintenant ».

2. **Génération du contenu (Gemini)**
   - L’API (cron ou action admin) appelle **Gemini** avec une liste de mots-clés B2B français (agences marketing, digital, prospection, leads, etc.).
   - Gemini renvoie un **article structuré** : titre, slug, extrait, contenu HTML, mots-clés.
   - Optionnel : génération d’une **image featured** (IA ou null si échec).
   - Tout est **enregistré en base** dans la table **`posts`** (avec `publishedAt` si « publication automatique » est activée).

3. **Affichage sur le site**
   - La page **Actualités** (`/actualites`) appelle **`GET /api/actualites`**.
   - Cette API **lit la table `posts`** en base et renvoie la liste en JSON.
   - Le front affiche la grille (Bento) à partir de cette liste.

4. **Sitemap**
   - Le **sitemap** (`/sitemap.xml`) est dynamique : il charge aussi les **posts** en base (uniquement ceux avec `publishedAt` non null) et ajoute une URL par article : `https://www.suzaliconseil.com/actualites/{slug}`.

---

## Ce qui a été créé (structure)

| Élément | Rôle |
|--------|------|
| **Table `posts`** (Neon/Postgres) | Stocke : id, title, slug, excerpt, content, cover_image_url, published_at, created_at, source (manual/auto). |
| **Table `content_generator_settings`** | Réglages : fréquence, ton, auto_publish, last_run_at. |
| **`/api/cron/generate-article`** | Appelé par le **cron Vercel** (ou manuellement avec le bon header). Génère 1 article via Gemini (+ image si dispo), l’insère en base. |
| **`/api/actualites`** | **GET** : lit tous les posts en base, les renvoie en JSON. C’est la source de données de la page Actualités. |
| **`/admin`** (dashboard) | Connexion avec `ADMIN_SECRET`. Permet de : générer un article à la demande, publier/dépublier, modifier les paramètres. |
| **Page `/actualites`** | Appelle `GET /api/actualites` au chargement, affiche la grille (Bento) des articles. |
| **Page `/actualites/[slug]`** | Affiche un article à partir du slug (données lues en base côté serveur). |
| **`vercel.json`** | Définit le cron : `0 8 * * 1,3,5` (lundi, mercredi, vendredi à 8h UTC). |
| **`src/lib/gemini.js`** | Génère le texte de l’article (mots-clés B2B français). |
| **`src/lib/featured-image.js`** | Tente de générer une image featured (Gemini image API), sinon null. |
| **Sitemap** (`src/app/sitemap.js`) | Inclut les URLs des articles **publiés** (`publishedAt` non null). |

---

## Pourquoi les blogs ne s’affichent pas

La page Actualités affiche les articles **uniquement** si l’API **`GET /api/actualites`** renvoie un tableau non vide. Donc soit :

1. **La table `posts` est vide**
   - Aucun article n’a encore été créé (ni par le cron, ni par l’admin).
   - **À faire** : aller sur `/admin` → « Générer un article maintenant » (et éventuellement « Publier » sur les brouillons).

2. **L’API renvoie une erreur (500)**
   - Problème de connexion à la base (`DATABASE_URL` dans `.env.local`).
   - Problème de schéma (table `posts` absente ou différente).
   - **À faire** : ouvrir `http://localhost:3000/api/actualites` dans le navigateur et regarder la réponse (liste JSON ou message d’erreur).

3. **L’API renvoie `[]`**
   - La base répond mais il n’y a **aucune ligne** dans `posts`.
   - **À faire** : créer au moins un article (admin ou cron), puis recharger `/actualites`.

Pour vérifier rapidement : **ouvrez `http://localhost:3000/api/actualites`**.  
- Si vous voyez `[]` → la base est vide, il faut générer des articles.  
- Si vous voyez une erreur → vérifier `DATABASE_URL` et que la table `posts` existe.  
- Si vous voyez un tableau d’objets → la page Actualités devrait les afficher (si le front appelle bien cette API).
