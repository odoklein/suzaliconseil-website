# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Décideurs B2B francophones — dirigeants de PME/ETI, directeurs commerciaux, responsables
marketing — qui évaluent un partenaire externe pour accélérer leur acquisition ou livrer un
projet digital. Ils arrivent en comparaison active : plusieurs prestataires en lice, un budget
à justifier en interne, et peu de temps pour lire. Une audience secondaire de candidats
consulte les mêmes preuves avant de postuler (`/carriers`).

## Product Purpose

Suzali Conseil est un cabinet de conseil qui opère deux métiers sous une seule enseigne :
prospection commerciale externalisée (téléprospection, génération et qualification de leads,
prise de rendez-vous, vente en marque blanche) et exécution digitale (sites et e-commerce, SEO
et acquisition, branding, développement et automatisation). Le succès se mesure en pipeline
qualifié livré au client et en projets digitaux mis en production.

## Positioning

Le même cabinet tient la stratégie commerciale et la construction technique, ce qu'un
prestataire spécialisé sur un seul des deux métiers ne peut pas revendiquer. Suzali exploite
son propre CRM, SuzaLink, comme outil de pilotage et de transparence pour ses clients — un
actif propriétaire, pas un abonnement revendu.

## Operating Context

Cycle type : audit gratuit de prospection → cadrage → exécution multicanale (téléphone, email,
SMS, LinkedIn) ou build digital → pilotage via SuzaLink CRM → optimisation continue. Le site
sert aussi de plateforme éditoriale (`/actualites`), d'espace client (`/portal`) et de back-office
(`/admin`). Les projets clients sont stockés en base (table `projects` : titre, description,
image, tags, lien).

## Capabilities and Constraints

Next.js 16 (App Router), React 19, Tailwind CSS v4, framer-motion 12, lucide-react, Drizzle ORM
sur Postgres/Neon, déploiement Cloudflare via OpenNext. Langue unique : français. Aucune
internationalisation en place. La page d'études de cas demandée est **statique** — données
codées en dur, sans requête base.

Non décidé : structure tarifaire publique par étude de cas, existence de témoignages clients
signés.

## Brand Commitments

Nom : Suzali Conseil. Palette existante et contraignante : vert profond `#0d332b`
(primary-dark), vert `#1a4d43` (primary-main), lime `#b0ff5b` (accent-lime), fonds
`#f9fafb` / blanc. Typographie : Plus Jakarta Sans (`--font-heading` et `--font-sans`).
Rayon signature `--radius-suzali: 24px`. Easing maison `--ease-premium:
cubic-bezier(0.16, 1, 0.3, 1)`. Produit nommé : SuzaLink CRM.

## Evidence on Hand

Cinq projets clients réels, nommables publiquement avec leurs visuels (accord confirmé par le
client le 2026-08-01) :

- Ekozali Fondation — portail de dons et impact social, tableau de bord de suivi
  (`public/projects/ekozaliFondation.png`)
- MobiService — plateforme de réservation, gestion chauffeurs et clients, suivi temps réel
  (`public/projects/mobiService.png`)
- ZupDeCo — automatisation d'envoi de SMS de rappel de sessions, relié au CRM
  (`public/projects/zupdeco.jpg`)
- Investissement Locatif — téléprospection et tunnel de réservation en ligne pour investisseurs
  (`public/projects/investissementLocatif.png`)
- NeoTrace — tableau de bord de tracking colis temps réel avec alertes automatiques
  (`public/projects/neotrace.png`)

Logos outils disponibles : `public/logos/` (react, nextjs, tailwind, shopify, stripe, hubspot,
wordpress, figma, googleads, analytics). Bandeau logos clients : `public/logos/Group-6896.svg`.

**Absences que le travail futur ne doit pas inventer.** Aucun résultat chiffré n'existe pour
ces projets — ni délai, ni volume, ni CA, ni taux de conversion. Décision du client le
2026-08-01 : les études de cas se racontent **sans aucune métrique**, par le contexte, la
démarche et les livrables. Aucun témoignage client signé n'est disponible. Les missions
commerciales à ajouter n'ont pas de client nommable : elles se décrivent au niveau du secteur
et du dispositif, jamais avec une raison sociale inventée.

## Product Principles

1. La preuve passe par le livrable et la démarche, jamais par un chiffre qui n'a pas été mesuré.
2. Les deux métiers, commercial et technologie, se lisent comme un seul cabinet — la page qui
   les sépare en silos étanches trahit le positionnement.
3. Un décideur pressé doit pouvoir juger la pertinence d'un cas en quelques secondes, puis
   creuser s'il le souhaite.
4. Le français est la seule langue, sans exception ni fallback anglais dans l'interface.
5. Tout ce qui est nommé publiquement — client, outil, produit — est réel et vérifiable.

## Accessibility & Inclusion

Aucune exigence normative formalisée par le client. Le socle appliqué : contraste WCAG AA,
navigation clavier, respect de `prefers-reduced-motion`.
