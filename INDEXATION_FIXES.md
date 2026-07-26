# Correction des Problèmes d'Indexation Identifiés

**Date** : 12 février 2026  
**Site** : suzaliconseil.com  
**Statut** : En cours de correction

---

## ✅ Corrections Déjà Implémentées

### 1. Sitemap Dynamique avec Articles de Blog

**Problème** : Le sitemap ne contenait que 7 URLs statiques, aucun article de blog.  
**Solution** : Sitemap dynamique qui récupère automatiquement tous les articles depuis la base de données.

**Fichier** : `src/app/sitemap.js`

✅ **Implémenté et déployé**

---

### 2. Canonical URLs sur Toutes les Pages

**Problème** : 72 pages en double sans URL canonique sélectionnée.  
**Solution** : Ajout de canonical URLs sur toutes les pages.

**Fichiers modifiés** :

- `src/app/layout.jsx` - Configuration globale
- `src/app/page.jsx` - Homepage
- `src/app/actualites/page.jsx` - Liste des articles
- `src/app/actualites/[slug]/page.jsx` - Articles individuels
- `src/app/services/commercial/page.jsx` - Service commercial
- `src/app/services/digital/page.jsx` - Service digital

✅ **Implémenté et déployé**

---

### 3. Gestion Correcte des 404 avec notFound()

**Problème** : 3 972 Soft 404 (pages retournant 200 au lieu de 404).  
**Solution** : Utilisation de `notFound()` de Next.js pour retourner un vrai code HTTP 404.

**Fichier** : `src/app/actualites/[slug]/page.jsx`

```javascript
import { notFound } from "next/navigation";

if (!post) {
  notFound(); // Retourne un vrai 404
}
```

✅ **Implémenté et déployé**

---

### 4. Robots.txt Optimisé

**Problème** : Pages du portail client indexées alors qu'elles nécessitent une authentification.  
**Solution** : Blocage de `/portal/` dans robots.txt.

**Fichier** : `src/app/robots.js`

```javascript
disallow: ["/api/", "/admin/", "/portal/"];
```

✅ **Implémenté et déployé**

---

### 5. Métadonnées Open Graph

**Problème** : Pas de métadonnées pour le partage sur les réseaux sociaux.  
**Solution** : Ajout d'Open Graph tags sur toutes les pages.

✅ **Implémenté et déployé**

---

## 🔧 Corrections à Implémenter

### 6. Redirections 301 pour les URLs Importantes

**Problème** : 93 642 pages en erreur 404, dont certaines ont probablement des backlinks.

**Solution** : Ajouter des redirections 301 pour les URLs les plus importantes.

#### Étape 1 : Identifier les URLs Prioritaires

**Dans Google Search Console** :

1. Allez dans **Indexation** → **Pages**
2. Cliquez sur **"Introuvable (404)"**
3. Exportez la liste des URLs
4. Croisez avec Google Analytics pour identifier celles avec du trafic référent

**Ou utilisez cette commande pour voir les URLs 404 les plus fréquentes** :

```bash
# Dans Google Analytics, exportez les URLs 404 avec le plus de visites
```

#### Étape 2 : Ajouter les Redirections

**Fichier** : `next.config.mjs`

Ajoutez les redirections dans la section `async redirects()` :

```javascript
async redirects() {
  return [
    // Redirections déjà existantes
    {
      source: "/blog/:slug*",
      destination: "/actualites/:slug*",
      permanent: true,
    },
    {
      source: "/wp-content/:path*",
      destination: "/assets/:path*",
      permanent: true,
    },

    // ========================================
    // AJOUTEZ VOS REDIRECTIONS ICI
    // ========================================

    // Exemple : Anciennes pages de catégories WordPress
    {
      source: "/category/:slug*",
      destination: "/actualites",
      permanent: true,
    },

    // Exemple : Anciennes pages d'auteur
    {
      source: "/author/:slug*",
      destination: "/equipe",
      permanent: true,
    },

    // Exemple : Anciennes pages de tags
    {
      source: "/tag/:slug*",
      destination: "/actualites",
      permanent: true,
    },

    // Exemple : Anciennes archives par date
    {
      source: "/:year(\\d{4})/:month(\\d{2})/:slug*",
      destination: "/actualites",
      permanent: true,
    },

    // Exemple : Anciennes pages de services renommées
    // {
    //   source: "/ancien-nom-service",
    //   destination: "/services/commercial",
    //   permanent: true,
    // },

    // Exemple : Articles de blog spécifiques avec backlinks
    // {
    //   source: "/blog/article-important-avec-backlinks",
    //   destination: "/actualites/nouvel-article-equivalent",
    //   permanent: true,
    // },
  ];
},
```

**⚠️ Important** :

- Ne redirigez que les URLs importantes (avec backlinks ou trafic)
- Laissez les autres en 404 (Google les oubliera progressivement)
- Trop de redirections peut ralentir le site

---

### 7. Vérification et Correction des Erreurs 5xx

**Problème** : 36 pages retournent des erreurs serveur.

#### Étape 1 : Identifier les Pages Problématiques

**Dans Google Search Console** :

1. Allez dans **Indexation** → **Pages**
2. Cliquez sur **"Erreur serveur (5xx)"**
3. Notez les URLs concernées

#### Étape 2 : Vérifier les Logs Vercel

1. Allez sur votre dashboard Vercel
2. Sélectionnez votre projet
3. Cliquez sur **Logs**
4. Filtrez par "Error" ou "5xx"
5. Identifiez les erreurs récurrentes

#### Étape 3 : Corriger les Erreurs

**Causes communes et solutions** :

**A. Timeout de base de données**

```javascript
// Ajoutez un timeout et un fallback
try {
  const data = await db.select().from(table);
} catch (error) {
  console.error("DB Error:", error);
  return { notFound: true }; // Ou une page d'erreur gracieuse
}
```

**B. Requêtes trop lentes**

```javascript
// Ajoutez un cache ou optimisez la requête
export const revalidate = 3600; // Cache de 1 heure
```

**C. Erreurs dans les composants**

```javascript
// Ajoutez des try/catch dans les composants serveur
export default async function Page() {
  try {
    const data = await fetchData();
    return <Component data={data} />;
  } catch (error) {
    console.error("Page Error:", error);
    return <ErrorPage />;
  }
}
```

---

### 8. Création d'une Page 404 Personnalisée

**Problème** : Les 404 actuels utilisent la page par défaut de Next.js.

**Solution** : Créer une page 404 personnalisée avec des liens utiles.

**Fichier** : `src/app/not-found.jsx` (à créer)

```javascript
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary-dark mb-4">
          404
        </h1>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Page introuvable
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-primary-main text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/actualites"
            className="px-8 py-4 bg-white text-primary-main border-2 border-primary-main rounded-full font-semibold hover:bg-primary-main hover:text-white transition-colors"
          >
            Voir les actualités
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 mb-4">Pages populaires :</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/services/commercial"
              className="text-sm text-primary-main hover:underline"
            >
              Service Commercial
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/services/digital"
              className="text-sm text-primary-main hover:underline"
            >
              Expertise Digitale
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact"
              className="text-sm text-primary-main hover:underline"
            >
              Contact
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/equipe"
              className="text-sm text-primary-main hover:underline"
            >
              Notre Équipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Avantages** :

- ✅ Meilleure expérience utilisateur
- ✅ Réduit le taux de rebond
- ✅ Guide les visiteurs vers du contenu pertinent
- ✅ Renforce l'image de marque

---

### 9. Ajout de Structured Data (Schema.org)

**Problème** : Pas de données structurées pour aider Google à comprendre le contenu.

**Solution** : Ajouter des JSON-LD schemas sur les pages clés.

#### A. Schema Organization (Homepage)

**Fichier** : `src/app/page.jsx`

Ajoutez dans le composant :

```javascript
export default async function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Suzali Conseil",
    url: "https://www.suzaliconseil.com",
    logo: "https://www.suzaliconseil.com/logo.png",
    description:
      "Cabinet de conseil en stratégie, management commercial et transformation digitale",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    sameAs: [
      // Ajoutez vos réseaux sociaux ici
      // "https://www.linkedin.com/company/suzali-conseil",
      // "https://twitter.com/suzaliconseil"
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Reste du contenu */}
    </>
  );
}
```

#### B. Schema Article (Articles de blog)

**Fichier** : `src/app/actualites/[slug]/page.jsx`

Ajoutez dans le composant :

```javascript
export default async function ActualiteDetailPage({ params }) {
  const { slug } = await params;
  const [post] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || "",
    image: post.coverImageUrl || "",
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt || post.publishedAt || post.createdAt,
    author: {
      "@type": "Organization",
      name: "Suzali Conseil",
    },
    publisher: {
      "@type": "Organization",
      name: "Suzali Conseil",
      logo: {
        "@type": "ImageObject",
        url: "https://www.suzaliconseil.com/logo.png",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Reste du contenu */}
    </div>
  );
}
```

---

## 📋 Checklist de Déploiement

### Avant le Déploiement

- [ ] Identifier les URLs 404 prioritaires (avec backlinks)
- [ ] Préparer la liste des redirections 301
- [ ] Vérifier les logs Vercel pour les erreurs 5xx
- [ ] Tester la page 404 personnalisée localement

### Modifications à Faire

- [ ] Ajouter les redirections 301 dans `next.config.mjs`
- [ ] Créer `src/app/not-found.jsx`
- [ ] Ajouter les schemas JSON-LD sur homepage et articles
- [ ] Corriger les erreurs 5xx identifiées

### Après le Déploiement

- [ ] Vérifier que les redirections fonctionnent
- [ ] Tester la page 404 en production
- [ ] Valider les schemas avec [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Surveiller les logs Vercel pour les nouvelles erreurs

---

## 🚀 Commandes de Déploiement

Une fois les modifications faites :

```bash
# Vérifier les changements
git status

# Ajouter tous les fichiers modifiés
git add .

# Commit avec un message descriptif
git commit -m "fix: corrections indexation - redirections 301, page 404, structured data"

# Pousser vers GitHub (Vercel déploiera automatiquement)
git push origin master
```

---

## 📊 Résultats Attendus

### Semaine 1 (Après déploiement)

- ✅ Redirections 301 actives
- ✅ Page 404 personnalisée fonctionnelle
- ✅ Structured data détectée par Google
- 📉 Soft 404 en diminution (-10 à -20%)

### Semaine 2-4

- 📉 Erreurs 404 en diminution (-5 à -10%)
- 📉 Erreurs 5xx réduites à 0-5
- ✅ Rich snippets dans les résultats Google (si éligible)

### Mois 2-3

- 📉 Pages non indexées < 100 000
- 📈 Pages indexées stables ou en légère augmentation
- 📈 CTR amélioré grâce aux rich snippets

---

## 📞 Support

**Documentation de référence** :

- `INDEXATION_ANALYSIS.md` - Analyse détaillée des problèmes
- `GOOGLE_SEARCH_CONSOLE_GUIDE.md` - Guide GSC complet
- `SEO_IMPROVEMENTS_SUMMARY.md` - Résumé des améliorations

**Prochaine révision** : 19 février 2026

---

**Dernière mise à jour** : 12 février 2026
