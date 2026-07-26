# Guide de Configuration Google Search Console

## 📋 Vue d'ensemble

Ce guide vous accompagne dans la configuration complète de Google Search Console pour optimiser l'indexation de **suzaliconseil.com** sur Google.

---

## 1️⃣ Vérification de la propriété du domaine

### Étape 1 : Accéder à Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Connectez-vous avec votre compte Google

### Étape 2 : Ajouter une propriété (si ce n'est pas déjà fait)

1. Cliquez sur **Ajouter une propriété** dans le menu déroulant en haut à gauche
2. Choisissez **Domaine** (recommandé) plutôt que "Préfixe d'URL"
3. Entrez : `suzaliconseil.com` (sans https://)

### Étape 3 : Vérifier la propriété via DNS

1. Google vous fournira un **enregistrement TXT DNS**
2. Copiez cet enregistrement
3. Allez dans les paramètres DNS de votre domaine (chez Vercel ou votre registrar)
4. Ajoutez un nouvel enregistrement TXT avec la valeur fournie
5. Retournez dans Search Console et cliquez sur **Vérifier**

> **Note** : La propagation DNS peut prendre jusqu'à 48h, mais c'est généralement instantané.

---

## 2️⃣ Soumission du sitemap

### Pourquoi c'est important

Le sitemap indique à Google toutes les pages de votre site, y compris les articles de blog dynamiques.

### Étapes

1. Dans Google Search Console, sélectionnez votre propriété `suzaliconseil.com`
2. Dans le menu de gauche, cliquez sur **Indexation** → **Sitemaps**
3. Dans le champ "Ajouter un sitemap", entrez : `sitemap.xml`
4. Cliquez sur **ENVOYER**

### Vérification

- Vous devriez voir un statut **"Opération effectuée"** (vert) après quelques minutes
- Si vous voyez "Impossible de récupérer", attendez 10 minutes et réessayez
- Le sitemap devrait afficher le nombre d'URLs découvertes (pages statiques + articles de blog)

### ⚠️ Nettoyer les anciens sitemaps WordPress

Vous avez probablement des anciens sitemaps WordPress qui génèrent des erreurs :

1. Dans la liste des sitemaps, cliquez sur chaque ancien sitemap (`wp-sitemap-*`)
2. Cliquez sur les **trois points (⋮)** en haut à droite
3. Sélectionnez **Supprimer le sitemap**

---

## 3️⃣ Inspection et indexation manuelle des pages clés

### Pourquoi c'est important

L'inspection manuelle force Google à re-crawler vos pages immédiatement au lieu d'attendre le prochain passage du robot.

### Pages prioritaires à inspecter

#### 1. Page d'accueil

1. Cliquez sur **Inspection de l'URL** dans le menu de gauche
2. Entrez : `https://www.suzaliconseil.com/`
3. Attendez le chargement des données
4. Cliquez sur **Demander une indexation**
5. Attendez la validation (1-2 minutes)

#### 2. Page des services (Commercial)

- URL : `https://www.suzaliconseil.com/services/commercial`
- Suivez les mêmes étapes

#### 3. Page des services (Digital)

- URL : `https://www.suzaliconseil.com/services/digital`
- Suivez les mêmes étapes

#### 4. Page de contact

- URL : `https://www.suzaliconseil.com/contact`
- Suivez les mêmes étapes

#### 5. Page des actualités

- URL : `https://www.suzaliconseil.com/actualites`
- Suivez les mêmes étapes

### Interprétation des résultats

Après inspection, vous verrez :

- **"L'URL est sur Google"** ✅ : La page est déjà indexée
- **"L'URL n'est pas sur Google"** ⚠️ : Cliquez sur "Demander une indexation"
- **Erreurs** ❌ : Vérifiez les détails et corrigez les problèmes

---

## 4️⃣ Vérification du fichier robots.txt

### Test dans Search Console

1. Allez dans **Paramètres** → **Explorateurs** → **robots.txt**
2. Cliquez sur **Tester le fichier robots.txt**
3. Vérifiez que le contenu affiché est :

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /portal/

Sitemap: https://www.suzaliconseil.com/sitemap.xml
```

### Test manuel

Visitez directement : `https://www.suzaliconseil.com/robots.txt`

---

## 5️⃣ Surveillance de l'indexation

### Rapport "Pages"

1. Allez dans **Indexation** → **Pages**
2. Vous verrez un graphique avec :
   - **Pages indexées** (vert) : Objectif = toutes vos pages
   - **Pages non indexées** (gris) : À surveiller

### Problèmes courants et solutions

#### "Explorée, actuellement non indexée"

- **Cause** : Google a visité la page mais ne l'a pas encore indexée
- **Solution** : Attendez 1-2 semaines, ou utilisez "Demander une indexation"

#### "Détectée, actuellement non indexée"

- **Cause** : Google connaît l'URL (via le sitemap) mais ne l'a pas encore explorée
- **Solution** : Patience, Google va l'explorer bientôt

#### "Bloquée par le fichier robots.txt"

- **Cause** : Une directive Disallow bloque la page
- **Solution** : Vérifiez que seuls `/api/`, `/admin/`, et `/portal/` sont bloqués

#### "Introuvable (404)"

- **Cause** : La page n'existe plus ou l'URL est incorrecte
- **Solution** : Ajoutez une redirection 301 dans `next.config.mjs`

---

## 6️⃣ Calendrier de récupération SEO

### Semaine 1 (Jours 1-7)

- ✅ Soumission du sitemap
- ✅ Indexation manuelle des pages clés
- 📊 Google commence à re-crawler le site
- 📉 Les erreurs 404 des anciennes URLs WordPress diminuent

### Semaine 2 (Jours 8-14)

- 📊 Google indexe les nouvelles pages
- 🔍 Les titres et descriptions uniques apparaissent dans les résultats de recherche
- 📈 Les impressions commencent à augmenter

### Semaines 3-4 (Jours 15-28)

- 📈 Stabilisation des classements
- 🎯 Les redirections 301 transfèrent l'autorité SEO
- ✅ Toutes les pages importantes sont indexées

### Après 1 mois

- 📊 Surveillez les rapports hebdomadaires
- 🔍 Analysez les requêtes de recherche dans **Performances**
- 📈 Optimisez le contenu en fonction des données

---

## 7️⃣ Checklist de vérification finale

Avant de considérer la migration SEO comme terminée, vérifiez :

- [ ] ✅ Propriété du domaine vérifiée dans GSC
- [ ] ✅ Sitemap soumis et accepté sans erreurs
- [ ] ✅ Anciens sitemaps WordPress supprimés
- [ ] ✅ Pages clés inspectées et indexées manuellement
- [ ] ✅ `/robots.txt` accessible et correct
- [ ] ✅ `/sitemap.xml` accessible et contient toutes les pages
- [ ] ✅ Aucune page importante bloquée par robots.txt
- [ ] ✅ Redirections 301 configurées pour les anciennes URLs
- [ ] ✅ Toutes les pages ont des titres et descriptions uniques
- [ ] ✅ Canonical URLs présentes sur toutes les pages

---

## 8️⃣ Surveillance continue

### Rapports à consulter chaque semaine

#### Rapport "Performances"

- **Impressions** : Nombre de fois où votre site apparaît dans les résultats
- **Clics** : Nombre de clics depuis Google
- **CTR** : Taux de clics (objectif > 3%)
- **Position moyenne** : Classement moyen (objectif < 10)

#### Rapport "Couverture"

- Surveillez les nouvelles erreurs d'indexation
- Vérifiez que le nombre de pages indexées augmente

#### Rapport "Expérience"

- **Core Web Vitals** : Performances de chargement
- **Ergonomie mobile** : Vérifiez qu'il n'y a pas d'erreurs

### Alertes par email

1. Allez dans **Paramètres** → **Utilisateurs et autorisations**
2. Activez les notifications par email pour :
   - Problèmes d'indexation
   - Problèmes de sécurité
   - Erreurs critiques

---

## 🆘 Résolution de problèmes

### Le sitemap n'est pas accepté

- Vérifiez que `https://www.suzaliconseil.com/sitemap.xml` est accessible
- Validez le XML sur [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- Attendez 24h et réessayez

### Les pages ne s'indexent pas

- Vérifiez qu'il n'y a pas de balise `<meta name="robots" content="noindex">`
- Utilisez l'outil d'inspection pour voir ce que Google voit
- Vérifiez que le contenu de la page est suffisant (> 300 mots)

### Erreurs de canonical

- Vérifiez que chaque page a une URL canonical unique
- Utilisez l'outil d'inspection pour voir la canonical détectée par Google

---

## 📞 Support

Si vous rencontrez des problèmes :

1. Consultez le [Centre d'aide Search Console](https://support.google.com/webmasters)
2. Utilisez le [Forum d'aide Search Console](https://support.google.com/webmasters/community)
3. Contactez votre développeur avec les captures d'écran des erreurs

---

**Dernière mise à jour** : 12 février 2026
