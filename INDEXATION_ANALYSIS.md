# Analyse des Problèmes d'Indexation - suzaliconseil.com

**Date de l'analyse** : 12 février 2026  
**Source** : Google Search Console  
**Propriété** : suzaliconseil.com

---

## 📊 Vue d'Ensemble

### Statistiques Globales

| Métrique                 | Valeur     | Statut                             |
| ------------------------ | ---------- | ---------------------------------- |
| **Pages indexées**       | 979        | ✅ Bon                             |
| **Pages non indexées**   | 113 000    | ⚠️ À surveiller                    |
| **Ratio d'indexation**   | 0.86%      | ⚠️ Faible (normal après migration) |
| **Dernière mise à jour** | 07/02/2026 | -                                  |

---

## 🔍 Analyse Détaillée des Pages Non Indexées

### 1. Introuvable (404) - 93 642 pages ❌

**Gravité** : 🔴 Critique  
**Tendance** : Stable  
**Impact SEO** : Moyen (perte de "link juice" si backlinks)

#### Description

Pages qui retournent une erreur HTTP 404 (Not Found). Google a tenté d'accéder à ces URLs mais elles n'existent plus.

#### Causes Probables

- **Migration WordPress → Next.js** : Anciennes URLs de l'ancien site
- **Structure d'URL modifiée** : `/blog/` → `/actualites/`
- **Pages supprimées** : Contenu obsolète ou fusionné
- **URLs générées automatiquement** : Archives, pagination, taxonomies WordPress

#### Exemples Typiques

```
/blog/ancien-article-2023/
/category/actualites/page/2/
/author/admin/
/tag/conseil/
/wp-content/uploads/2023/...
```

#### Impact

- ❌ Mauvaise expérience utilisateur si liens externes pointent vers ces pages
- ❌ Perte d'autorité SEO si ces pages avaient des backlinks
- ✅ Pas d'impact direct sur les pages actuelles

#### Solutions Implémentées

✅ **Redirections 301 dans `next.config.mjs`** :

```javascript
{
  source: "/blog/:slug*",
  destination: "/actualites/:slug*",
  permanent: true,
}
```

#### Actions Recommandées

1. **Identifier les URLs avec backlinks** :
   - Utilisez Ahrefs, SEMrush ou Google Analytics
   - Priorisez les URLs avec du trafic référent

2. **Ajouter des redirections 301** pour les URLs importantes :

```javascript
// Dans next.config.mjs
{
  source: "/ancienne-url-importante",
  destination: "/nouvelle-url",
  permanent: true,
}
```

3. **Laisser les autres en 404** :
   - Google finira par les oublier (2-3 mois)
   - Pas besoin de rediriger toutes les URLs

---

### 2. Soft 404 - 3 972 pages ⚠️

**Gravité** : 🟡 Modérée  
**Tendance** : À surveiller  
**Impact SEO** : Moyen (confusion pour Google)

#### Description

Pages qui retournent un code HTTP 200 (OK) mais affichent un contenu "page introuvable" ou similaire.

#### Problème

Google s'attend à un code 404 mais reçoit un 200, ce qui crée de la confusion :

- Google ne sait pas si la page existe vraiment
- Gaspillage du "crawl budget"
- Risque de contenu dupliqué

#### Causes Probables

- **Pages dynamiques Next.js** qui ne retournent pas le bon code HTTP
- **Gestion d'erreur incorrecte** dans les composants
- **Anciennes URLs WordPress** qui affichent la page d'accueil au lieu d'un 404

#### Solution Implémentée

✅ **Utilisation de `notFound()` dans Next.js** :

```javascript
// src/app/actualites/[slug]/page.jsx
import { notFound } from "next/navigation";

if (!post) {
  notFound(); // Retourne un vrai 404
}
```

#### Actions Recommandées

1. **Vérifier les pages concernées** dans GSC
2. **S'assurer que toutes les pages dynamiques utilisent `notFound()`**
3. **Tester manuellement** quelques URLs pour confirmer le code HTTP 404

---

### 3. Page avec redirection - 7 980 pages ✅

**Gravité** : 🟢 Aucune (comportement normal)  
**Tendance** : Stable  
**Impact SEO** : Positif (préserve l'autorité)

#### Description

Pages qui redirigent (301 ou 302) vers une autre URL. Google suit la redirection et indexe la page de destination.

#### Pourquoi c'est normal

- ✅ Redirections 301 intentionnelles (`/blog/` → `/actualites/`)
- ✅ Anciennes URLs WordPress redirigées vers les nouvelles
- ✅ Préservation de l'autorité SEO (link juice)

#### Aucune action requise

Ces pages sont correctement gérées. Google indexera les URLs de destination.

---

### 4. Autre page avec balise canonique correcte - 2 282 pages ✅

**Gravité** : 🟢 Aucune (comportement normal)  
**Tendance** : Stable  
**Impact SEO** : Positif (évite le contenu dupliqué)

#### Description

Pages qui ont une balise `<link rel="canonical">` pointant vers une autre URL. Google indexe l'URL canonique au lieu de celle-ci.

#### Pourquoi c'est normal

- ✅ Évite le contenu dupliqué (ex: pagination, paramètres d'URL)
- ✅ Consolide l'autorité SEO sur une seule URL
- ✅ Bonne pratique SEO

#### Exemple

```html
<!-- Page : /actualites?page=2 -->
<link rel="canonical" href="https://www.suzaliconseil.com/actualites" />
```

#### Solutions Implémentées

✅ **Canonical URLs sur toutes les pages** :

```javascript
// src/app/page.jsx
export const metadata = {
  alternates: {
    canonical: "/",
  },
};
```

#### Aucune action requise

Ces pages sont correctement gérées.

---

### 5. Page en double sans URL canonique sélectionnée - 72 pages ⚠️

**Gravité** : 🟡 Modérée  
**Tendance** : En diminution (après nos modifications)  
**Impact SEO** : Moyen (dilution de l'autorité)

#### Description

Google a détecté plusieurs versions de la même page mais ne sait pas laquelle indexer car aucune canonical n'est définie.

#### Causes Probables

- **Paramètres d'URL** : `?utm_source=...`, `?ref=...`
- **Trailing slash** : `/contact` vs `/contact/`
- **www vs non-www** : Résolu au niveau DNS/Vercel
- **http vs https** : Résolu au niveau Vercel

#### Solution Implémentée

✅ **Canonical URLs sur toutes les pages** (voir section 4)

#### Actions Recommandées

1. **Vérifier dans GSC** quelles sont les URLs concernées
2. **Ajouter des canonical URLs** si manquantes
3. **Surveiller** : Le nombre devrait diminuer après le déploiement

---

### 6. Erreur serveur (5xx) - 36 pages ⚠️

**Gravité** : 🟡 Modérée  
**Tendance** : À surveiller  
**Impact SEO** : Moyen si récurrent

#### Description

Pages qui retournent une erreur serveur (500, 502, 503, etc.) lors du crawl de Google.

#### Causes Probables

- **Timeout de base de données** : Requêtes trop lentes
- **Erreur de build** : Pages dynamiques qui crashent
- **Limite de ressources** : Dépassement de mémoire ou CPU sur Vercel
- **Erreurs temporaires** : Redémarrage du serveur

#### Actions Recommandées

1. **Vérifier les logs Vercel** pour identifier les erreurs
2. **Tester les URLs concernées** manuellement
3. **Optimiser les requêtes DB** si nécessaire
4. **Ajouter des try/catch** pour gérer les erreurs gracieusement

---

### 7. Exclue par la balise 'noindex' - 9 pages ✅

**Gravité** : 🟢 Aucune (intentionnel)  
**Tendance** : Stable  
**Impact SEO** : Aucun (voulu)

#### Description

Pages avec `<meta name="robots" content="noindex">` que vous avez volontairement exclues de l'indexation.

#### Exemples Typiques

- Pages de test
- Pages de remerciement après formulaire
- Pages privées ou en construction

#### Aucune action requise

Ces pages sont intentionnellement exclues.

---

### 8. Explorée, actuellement non indexée - 90 751 pages 📊

**Gravité** : 🟡 Modérée (normal après migration)  
**Tendance** : En diminution progressive  
**Impact SEO** : Faible (décision de Google)

#### Description

Google a visité ces pages mais a décidé de ne pas les indexer pour diverses raisons :

- Contenu de faible qualité
- Contenu dupliqué
- Faible autorité de la page
- Trop de pages similaires

#### Pourquoi c'est normal

Après une migration WordPress → Next.js :

- Google a en mémoire des milliers d'anciennes URLs
- Beaucoup sont des archives, catégories, tags, pagination
- Google décide de ne pas les indexer car elles n'apportent pas de valeur

#### Évolution Attendue

- **Semaine 1-4** : Nombre stable (~90k)
- **Mois 2-3** : Diminution progressive (~50k)
- **Mois 4-6** : Stabilisation (~10-20k)

#### Aucune action urgente

Laissez Google nettoyer progressivement son index.

---

### 9. Page en double - Google n'a pas choisi la même URL canonique - 4 pages ⚠️

**Gravité** : 🟡 Faible  
**Tendance** : À surveiller  
**Impact SEO** : Faible

#### Description

Vous avez spécifié une URL canonique, mais Google a choisi une URL différente.

#### Causes Probables

- **Signaux contradictoires** : Canonical vs sitemap vs liens internes
- **Autorité de page** : Google préfère une autre version
- **Backlinks** : Plus de liens pointent vers une autre version

#### Actions Recommandées

1. **Identifier les 4 pages** dans GSC
2. **Vérifier la cohérence** : Canonical, sitemap, liens internes
3. **Accepter le choix de Google** si justifié

---

### 10. Détectée, actuellement non indexée - 0 pages ✅

**Gravité** : 🟢 Aucune  
**Impact SEO** : Aucun

#### Description

Pages découvertes (via sitemap ou liens) mais pas encore explorées par Google.

**Aucune page dans cette catégorie** = Bon signe ! Google a exploré toutes les pages découvertes.

---

## 📈 Plan d'Action Priorisé

### 🔴 Priorité Haute (À faire maintenant)

1. ✅ **FAIT** : Déployer les améliorations SEO (sitemap, metadata, robots.txt)
2. ⏳ **EN COURS** : Soumettre le nouveau sitemap dans GSC
3. 🔍 **À FAIRE** : Indexation manuelle des pages clés

### 🟡 Priorité Moyenne (Cette semaine)

4. **Identifier les URLs 404 importantes** :
   - Consulter Google Analytics pour le trafic référent
   - Vérifier les backlinks avec Ahrefs/SEMrush
   - Ajouter des redirections 301 pour les URLs prioritaires

5. **Vérifier les Soft 404** :
   - Cliquer sur "Soft 404" dans GSC
   - Tester les URLs manuellement
   - S'assurer qu'elles retournent un vrai 404

6. **Analyser les erreurs 5xx** :
   - Consulter les logs Vercel
   - Identifier les pages problématiques
   - Corriger les erreurs ou ajouter des fallbacks

### 🟢 Priorité Basse (Ce mois-ci)

7. **Surveiller l'évolution** :
   - Consulter GSC chaque semaine
   - Vérifier que les 404 diminuent
   - S'assurer que les pages indexées restent stables

8. **Optimiser le contenu** :
   - Améliorer les pages avec faible CTR
   - Ajouter du contenu pour les mots-clés cibles
   - Créer de nouveaux articles de blog

---

## 📊 KPIs à Surveiller

### Semaine 1-2

- [ ] Sitemap accepté sans erreurs
- [ ] Pages clés indexées manuellement
- [ ] Aucune nouvelle erreur 5xx

### Semaine 3-4

- [ ] Erreurs 404 en diminution (-5 à -10%)
- [ ] Pages indexées stables (~979)
- [ ] Impressions en augmentation dans "Performances"

### Mois 2-3

- [ ] Erreurs 404 < 80 000
- [ ] Soft 404 < 3 000
- [ ] CTR moyen > 3%
- [ ] Position moyenne < 20 pour les mots-clés cibles

### Mois 4-6

- [ ] Erreurs 404 < 50 000
- [ ] Toutes les pages importantes indexées
- [ ] Trafic organique en augmentation de 20-30%

---

## 🛠️ Outils et Ressources

### Outils de Diagnostic

- **Google Search Console** : Indexation, performances, erreurs
- **Google Analytics** : Trafic, comportement, conversions
- **Vercel Logs** : Erreurs serveur, performances
- **Lighthouse** : Performances, SEO, accessibilité

### Outils de Backlinks (Optionnel)

- **Ahrefs** : Backlinks, mots-clés, concurrents
- **SEMrush** : Audit SEO, suivi de position
- **Moz** : Autorité de domaine, backlinks

### Documentation

- `GOOGLE_SEARCH_CONSOLE_GUIDE.md` : Guide complet GSC
- `SEO_IMPROVEMENTS_SUMMARY.md` : Résumé des modifications
- `INDEXATION_ANALYSIS.md` : Ce document

---

## 📞 Support et Suivi

### Prochaines Révisions

- **19 février 2026** : Vérification 1 semaine après déploiement
- **12 mars 2026** : Bilan 1 mois après déploiement
- **12 avril 2026** : Bilan 2 mois après déploiement

### Contact

Pour toute question ou problème, consultez :

1. La documentation dans le projet
2. Le Centre d'aide Google Search Console
3. Votre développeur avec les captures d'écran des erreurs

---

**Dernière mise à jour** : 12 février 2026  
**Prochaine révision** : 19 février 2026
