import { NextResponse } from "next/server";
import { getPosts } from "../../../lib/actualites";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url || "");
  const debug = searchParams.get("debug") === "1";
  const rawSql = searchParams.get("raw") === "1";

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "DATABASE_URL is not set" },
      { status: 500 }
    );
  }

  try {
    const list = await getPosts();

    if (rawSql) {
      return NextResponse.json({
        source: "raw_sql",
        count: list.length,
        list,
      });
    }

    if (debug) {
      return NextResponse.json({
        count: list.length,
        message:
          list.length === 0
            ? "Table 'posts' is empty or not reachable. Check DATABASE_URL points to the Neon DB where you see the data."
            : `Found ${list.length} post(s).`,
        list,
      });
    }

    return NextResponse.json(list);
  } catch (e) {
    console.error("API actualites error:", e);
    return NextResponse.json(
      {
        error: "Failed to fetch posts",
        details: e.message,
        hint: "Check DATABASE_URL in .env.local and that table 'posts' exists in your Neon project.",
      },
      { status: 500 }
    );
  }
}
