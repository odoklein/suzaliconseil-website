import { NextResponse } from "next/server";
import { verifyAdminPassword, setAdminCookie } from "../../../../lib/admin-auth";

export async function POST(request) {
  try {
    const { password } = await request.json();
    if (!password) {
      return NextResponse.json(
        { error: "Mot de passe requis" },
        { status: 400 }
      );
    }
    const ok = await verifyAdminPassword(password);
    if (!ok) {
      return NextResponse.json(
        { error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }
    await setAdminCookie();
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
