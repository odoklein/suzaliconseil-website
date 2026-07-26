"use server";

import { redirect } from "next/navigation";
import { verifyPortalLogin, setPortalCookie } from "../../../lib/portal-auth";

export async function login(formData) {
  const slug = formData.get("slug")?.toString()?.trim();
  const token = formData.get("token")?.toString()?.trim();

  if (!slug || !token) {
    return { error: "Identifiant et code d'accès requis." };
  }

  const client = await verifyPortalLogin(slug, token);
  if (!client) {
    return { error: "Identifiant ou code d'accès incorrect." };
  }

  await setPortalCookie(client.portalToken);
  redirect("/portal");
}
