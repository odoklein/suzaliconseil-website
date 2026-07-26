# Actualités : Cron + Admin (moteur de contenu SEO)

## Vue d’ensemble

- **Cron Vercel** : appelle `/api/cron/generate-article` selon le planning (ex. lundi / mercredi / vendredi à 8h UTC).
- **Gemini** : génère un article optimisé SEO (titre, extrait, contenu HTML) à partir d’un mot-clé B2B tiré au sort.
- **Image** : image featured 1200×630 (SVG → PNG) avec le titre, uploadée sur S3.
- **Admin** : dashboard `/admin` pour paramètres, liste des articles, publication/dépublishing, génération manuelle.

## Variables d’environnement

En local (`.env.local`) et sur **Vercel** (Settings → Environment Variables) :

| Variable         | Description |
|------------------|-------------|
| `GEMINI_API_KEY` | Clé API Google AI (Gemini) pour la génération de texte. |
| `CRON_SECRET`    | Secret partagé pour sécuriser l’appel au cron. **À définir sur Vercel** (ex. valeur aléatoire longue). Vercel envoie `Authorization: Bearer <CRON_SECRET>`. |
| `ADMIN_SECRET`   | Mot de passe de connexion au dashboard `/admin`. |
| `DATABASE_URL`   | Connexion Neon (déjà utilisée). |
| `AWS_*` / `S3_*` | Déjà utilisés pour l’upload des images. |

## Vercel : configurer le Cron

1. Déployer le projet sur Vercel (le fichier `vercel.json` avec `crons` est pris en compte).
2. Ajouter la variable **`CRON_SECRET`** (même valeur que celle utilisée dans ton `.env.local` pour tester, ou une nouvelle pour la prod).
3. Planning actuel dans `vercel.json` : **`0 8 * * 1,3,5`** = 8h UTC le lundi, mercredi et vendredi (environ 3 articles/semaine).

Pour modifier la fréquence : éditer `vercel.json` → `crons[0].schedule` (syntaxe cron en UTC).

## Admin

- **URL** : `https://ton-domaine.com/admin`
- **Connexion** : mot de passe = valeur de `ADMIN_SECRET`.
- **Actions** : modifier fréquence/ton/auto-publication, générer un article à la demande, publier/dépublier des articles.

Les pages `/admin` et `/admin/login` sont en `noindex, nofollow` et bloquées dans `robots.txt`.

## Migration base de données

Si la colonne `posts.source` et la table `content_generator_settings` n’existent pas encore :

```bash
node scripts/run-migration-0004.mjs
```

## Test manuel du cron (sans Vercel)

```bash
curl -X POST "http://localhost:3000/api/cron/generate-article" \
  -H "Authorization: Bearer VOTRE_CRON_SECRET"
```

Réponse attendue : `{"ok":true,"postId":"...","slug":"...","published":true,"title":"..."}`.
