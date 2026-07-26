# Rapport final : Actualités & génération automatique

Ce document décrit comment fonctionnent la **page Actualités** (blog) et le **job automatique** (cron) qui génère les articles, afin que vous puissiez tout comprendre d’un coup.

---

## 1. Vue d’ensemble

| Élément | Rôle |
|--------|------|
| **Page liste** | `/actualites` — affiche tous les articles en grille (Bento). Données chargées côté serveur (SSR) puis affichées tout de suite. |
| **Page article** | `/actualites/[slug]` — affiche un article complet (titre, image, contenu HTML). Rendu serveur. |
| **Cron job** | Vercel appelle `/api/cron/generate-article` à dates fixes (ex. lundi, mercredi, vendredi 8h UTC). Génère 1 article (texte + image) et l’enregistre en base. |
| **Admin** | `/admin` — liste des articles, publication/dépublication, réglages (ton, fréquence, auto-publish), et bouton « Générer un article maintenant » (même logique que le cron). |
| **Base de données** | Neon PostgreSQL. Tables : `posts` (articles), `content_generator_settings` (réglages du générateur). |

---

## 2. Comment fonctionne le job (cron)

### 2.1 Déclenchement

- **Où** : `vercel.json` définit un cron :
  - **Path** : `/api/cron/generate-article`
  - **Schedule** : `0 8 * * 1,3,5` → tous les **lundi, mercredi et vendredi à 8h00 UTC** (9h ou 10h selon heure française).

- **Sécurité** : la route vérifie l’en-tête :
  - `Authorization: Bearer <CRON_SECRET>`
  - Si `CRON_SECRET` n’est pas défini ou ne correspond pas → **401 Unauthorized**.

### 2.2 Étapes à chaque exécution

1. **Lecture des réglages**  
   - Table `content_generator_settings` (une seule ligne).  
   - Si aucune ligne : création avec valeurs par défaut (fréquence 3, ton expert, auto-publish true).  
   - Utilisation : `tone` (expert / accessible / professional), `autoPublish` (true/false).

2. **Génération du texte (Gemini)**  
   - `src/lib/gemini.js` → `generateArticle({ tone })`.  
   - Choisit un **mot-clé B2B** au hasard dans une liste fixe (SEO : prospection, leads, téléprospection, etc.).  
   - Appel à l’API Gemini (modèle par défaut : `gemini-2.5-flash`, configurable via `GEMINI_MODEL`).  
   - Retour : `title`, `excerpt`, `content` (HTML), `slug`, `metaKeywords`.

3. **Génération de l’image de couverture (optionnelle)**  
   - `src/lib/featured-image.js` → `generateFeaturedImage(title, slug, excerpt)`.  
   - Utilise l’API Gemini (image) pour une image 1200×630, style pro B2B, sans texte.  
   - Si succès : upload S3 → URL stockée. Si échec : `coverImageUrl` reste `null` (l’article s’affiche quand même avec un fond dégradé).

4. **Enregistrement en base**  
   - Insertion dans `posts` : titre, slug, excerpt, content, `cover_image_url`, `published_at` (date si auto-publish, sinon `null`), `source: "auto"`.  
   - Mise à jour de `content_generator_settings` : `last_run_at` et `updated_at`.

5. **Réponse**  
   - JSON : `{ ok: true, postId, slug, published, title }`.

### 2.3 Variables d’environnement nécessaires (cron + génération)

- `DATABASE_URL` — Neon PostgreSQL.  
- `CRON_SECRET` — secret partagé avec Vercel Cron.  
- `GEMINI_API_KEY` — clé API Google (texte + image).  
- Optionnel : `GEMINI_MODEL`, `GEMINI_IMAGE_MODEL` (voir docs).  
- Pour l’image : variables S3 (bucket, credentials) pour l’upload.

---

## 3. Comment fonctionne la page Actualités

### 3.1 Page liste : `/actualites`

- **Composant serveur** : `src/app/actualites/page.jsx`  
  - Appel à `getPosts()` (voir ci-dessous).  
  - Passe les posts au composant client : `<ActualitesView posts={posts} />`.

- **Source des données** : `src/lib/actualites.js` → `getPosts()`.  
  - Connexion directe à Neon (SQL) :  
    `SELECT id, title, excerpt, slug, cover_image_url, published_at, created_at FROM posts ORDER BY COALESCE(published_at, created_at) DESC`.  
  - Retourne un tableau d’objets avec les champs en camelCase (`coverImageUrl`, `publishedAt`, `createdAt`).

- **Composant client** : `ActualitesView.jsx`  
  - Reçoit `posts` en props (SSR) → affichage immédiat, pas de loading.  
  - Si aucun post en props (cas rare), fait un `fetch("/api/actualites")` côté client et gère loading/erreur.  
  - Affiche une grille type Bento : première carte plus grande, les autres plus petites.  
  - Chaque carte : lien vers `/actualites/[slug]`, image de couverture (ou dégradé si pas d’image), titre, date, extrait (pour la grande carte).  
  - **Important** : le conteneur de la carte a une hauteur définie (`min-h-[160px]`, `h-full`) pour que l’image Next.js avec `fill` ait un parent avec hauteur (évite le bug “height 0”).

- **API utilisée par le client (fallback)** : `GET /api/actualites`  
  - Utilise la même fonction `getPosts()` et renvoie le tableau JSON.  
  - Options : `?debug=1` → `{ count, message, list }` ; `?raw=1` → `{ source: "raw_sql", count, list }`.

En résumé : **la liste est rendue côté serveur (SSR)** : le HTML contient déjà les articles au premier chargement (bon pour le référencement et l’UX).

### 3.2 Page article : `/actualites/[slug]`

- **Composant serveur** : `src/app/actualites/[slug]/page.jsx`.  
  - Récupère le `slug` depuis l’URL.  
  - Charge l’article via Drizzle : `db.select().from(posts).where(eq(posts.slug, slug))`.  
  - Si aucun article → `notFound()`.  
  - Sinon : rendu du titre, date, image de couverture (si présente), extrait, contenu HTML (prose).  
  - Métadonnées (SEO) : `generateMetadata` avec titre, description, Open Graph, canonical.

- **Affichage** :  
  - Lien « ← Actualités » en haut.  
  - Bannière : image full-bleed 1200×630 ou bandeau minimal si pas d’image.  
  - Contenu dans une carte blanche (prose stylée).  
  - Lien « Retour aux actualités » en bas.

Les articles avec `published_at` à `null` (brouillons) sont tout de même accessibles si on connaît le slug (utile pour l’admin).

### 3.3 Sitemap & SEO

- **Sitemap** : `src/app/sitemap.js`.  
  - Routes statiques (accueil, services, actualités, contact, etc.).  
  - Articles **publiés uniquement** : `posts` où `published_at IS NOT NULL`.  
  - Chaque article → `https://www.suzaliconseil.com/actualites/{slug}`.  
  - Les brouillons ne sont pas dans le sitemap.

- **Navigation** : le lien « Actualités » est présent dans la navbar et le footer.

---

## 4. Schéma des flux

### Cron (génération automatique)

```
Vercel Cron (0 8 * * 1,3,5)
    → GET /api/cron/generate-article
    → Vérif CRON_SECRET
    → Lecture content_generator_settings (ton, autoPublish)
    → generateArticle({ tone })  [Gemini texte]
    → generateFeaturedImage(...)  [Gemini image → S3]
    → INSERT posts (Drizzle)
    → UPDATE content_generator_settings (last_run_at)
    → Réponse JSON
```

### Page Actualités (liste)

```
Utilisateur ouvre /actualites
    → Server: getPosts() [Neon SQL]
    → Server: render ActualitesView avec posts
    → Client: affiche la grille (pas de fetch si posts fournis)
```

### Page article

```
Utilisateur ouvre /actualites/[slug]
    → Server: db.select posts WHERE slug = ...
    → Server: render titre, image, contenu
    → HTML envoyé au navigateur
```

---

## 5. Fichiers importants (référence rapide)

| Fichier | Rôle |
|---------|------|
| `vercel.json` | Cron : path + schedule. |
| `src/app/api/cron/generate-article/route.js` | Handler du cron : auth, réglages, Gemini, S3, DB. |
| `src/lib/gemini.js` | Génération du texte de l’article (mot-clé B2B + Gemini). |
| `src/lib/featured-image.js` | Génération image 1200×630 + upload S3. |
| `src/lib/actualites.js` | `getPosts()` — lecture des posts depuis Neon (serveur). |
| `src/app/api/actualites/route.js` | GET /api/actualites — expose les posts en JSON (utilise getPosts). |
| `src/app/actualites/page.jsx` | Page liste : SSR, appelle getPosts(), passe à ActualitesView. |
| `src/app/actualites/ActualitesView.jsx` | Grille des articles (client), reçoit posts en props ou fetch. |
| `src/app/actualites/[slug]/page.jsx` | Page détail d’un article (SSR). |
| `src/app/sitemap.js` | Sitemap avec URLs des articles publiés. |
| `src/db/schema.js` | Tables `posts`, `content_generator_settings`. |
| `src/app/admin/(dashboard)/*` | Dashboard admin : liste, publish/unpublish, réglages, « Générer un article ». |

---

## 6. Résumé en une phrase

- **Job (cron)** : Vercel appelle l’API cron à dates fixes ; l’API génère un article (Gemini texte + image optionnelle), enregistre dans `posts` et met à jour les réglages ; la sécurité repose sur `CRON_SECRET`.  
- **Page Actualités** : La liste est rendue en SSR grâce à `getPosts()` ; la page article est aussi en SSR ; l’API `/api/actualites` sert au fallback client et au debug ; le sitemap n’inclut que les articles publiés.

Vous avez ainsi une vue complète du fonctionnement du job et de la page Actualités.
