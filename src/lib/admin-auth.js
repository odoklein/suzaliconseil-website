import { cookies } from "next/headers";

const ADMIN_COOKIE = "admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24h

export async function getAdminSession() {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return null;
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  return token === secret ? true : null;
}

export async function setAdminCookie() {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return;
  const store = await cookies();
  store.set(ADMIN_COOKIE, secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/admin",
  });
}

export async function clearAdminCookie() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
}

export async function verifyAdminPassword(password) {
  return process.env.ADMIN_SECRET && password === process.env.ADMIN_SECRET;
}
