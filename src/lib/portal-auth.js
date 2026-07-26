import { cookies } from "next/headers";
import { db } from "./db";
import { clients } from "../db/schema";
import { eq } from "drizzle-orm";

const PORTAL_COOKIE = "portal_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function getPortalClient() {
  const cookieStore = await cookies();
  const token = cookieStore.get(PORTAL_COOKIE)?.value;
  if (!token) return null;
  const [client] = await db.select().from(clients).where(eq(clients.portalToken, token)).limit(1);
  return client ?? null;
}

export async function setPortalCookie(token) {
  const cookieStore = await cookies();
  cookieStore.set(PORTAL_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
}

export async function clearPortalCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(PORTAL_COOKIE);
}

export async function verifyPortalLogin(slug, token) {
  const [client] = await db
    .select()
    .from(clients)
    .where(eq(clients.slug, slug))
    .limit(1);
  if (!client || client.portalToken !== token) return null;
  return client;
}
