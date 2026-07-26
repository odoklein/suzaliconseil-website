import { NextResponse } from "next/server";
import { clearPortalCookie } from "../../../../lib/portal-auth";

export async function POST(request) {
  await clearPortalCookie();
  const url = new URL(request.url);
  return NextResponse.redirect(new URL("/portal/login", url.origin));
}
