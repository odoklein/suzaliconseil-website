import { NextResponse } from "next/server";
import { clearAdminCookie } from "../../../../lib/admin-auth";

export async function POST(request) {
  await clearAdminCookie();
  const url = request.nextUrl || new URL(request.url);
  const origin = url.origin;
  return NextResponse.redirect(origin + "/admin/login");
}
