import { LedgerList, SectionHead } from "../../../kit";

const SOLUTIONS = [
  {
    title: "Développement SaaS & Web Apps",
    description:
      "Création de plateformes robustes (CRM, ERP, Marketplace) parfaitement adaptées à vos règles métier. Pensées pour grandir avec vous.",
    meta: "React / Node.js",
  },
  {
    title: "Automatisation (RPA) & Workflows",
    description:
      "Connexion de vos outils (Salesforce, HubSpot, Stripe) pour automatiser la facturation, le reporting et l'onboarding client.",
    meta: "n8n / Make",
  },
  {
    title: "Intelligence Artificielle (GenAI)",
    description:
      "Intégration de modèles LLM (GPT-4) pour analyser vos documents, générer du contenu ou assister votre support client.",
    meta: "OpenAI / LangChain",
  },
  {
    title: "APIs & Microservices",
    description:
      "Architecture moderne en microservices pour une agilité maximale. Développement d'API REST/GraphQL documentées.",
    meta: "Docker / K8s",
  },
  {
    title: "Scraping & Data Engineering",
    description:
      "Extraction de données massives du web pour enrichir votre CRM ou surveiller la concurrence.",
    meta: "Python / Selenium",
  },
  {
    title: "Audit Technique & Sécurité",
    description:
      "Analyse de code, tests de pénétration et mise en conformité RGPD de vos infrastructures.",
    meta: "Bonnes pratiques OWASP",
  },
];

export default function DevSolutions() {
  return (
    <section id="solutions-tech" className="scroll-mt-24 bg-[#F6F7F4] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          size="md"
          className="max-w-4xl"
          title="Arrêtez de perdre du temps sur des tâches à faible valeur ajoutée"
          intro={
            <>
              Vos équipes recopient des données d&apos;un outil à l&apos;autre ? Vos outils
              ne se parlent pas ?{" "}
              <strong className="font-semibold text-[#0D332B]">
                L&apos;automatisation et l&apos;IA sont vos leviers de rentabilité immédiate.
              </strong>
            </>
          }
        />

        <LedgerList items={SOLUTIONS} className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}
