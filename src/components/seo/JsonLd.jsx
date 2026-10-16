import { jsonLdDocument } from "../../lib/structured-data";

/*
 * Balise <script type="application/ld+json"> ordinaire, rendue dans le HTML
 * serveur (pas next/script, qui ne l'injecte qu'en JavaScript). Accepte un
 * nœud ou une liste de nœuds ; « < » est échappé pour ne jamais fermer la
 * balise depuis une chaîne.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdDocument(data)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
