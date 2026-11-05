import { NextResponse } from "next/server";
import { isSpamPath } from "./lib/spam-urls";

const GONE_HTML = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Page supprimée | Suzali Conseil</title>
</head>
<body>
<p>Cette page n'existe pas sur suzaliconseil.com.</p>
<p><a href="/">Retour à l'accueil</a></p>
</body>
</html>`;

/**
 * Répond 410 aux URL de spam d'un ancien piratage (voir src/lib/spam-urls.js).
 * Toutes les autres requêtes passent sans changement.
 */
export function proxy(request) {
  if (!isSpamPath(request.nextUrl.pathname)) return NextResponse.next();
  return new NextResponse(GONE_HTML, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

export const config = {
  // Seulement les chemins qui peuvent être du spam : /get… et un segment unique à la racine
  // (hors fichiers internes de Next.js). Les pages /services/…, /actualites/… ne passent pas ici.
  matcher: ["/(get[a-z]*\\d*/.*)", "/((?!_next|api|admin|portal)[^/]+/?)"],
};
