import { redirect } from "next/navigation";
import { getAdminSession } from "../../../lib/admin-auth";
import Link from "next/link";

export default async function DashboardLayout({ children }) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#F5F6F8]">
      <header className="bg-[#0D332B] text-white px-6 py-3.5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-emerald-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <Link href="/admin" className="font-bold text-sm tracking-wide">
            Suzali Admin
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/actualites"
            className="text-xs text-white/50 hover:text-white/80 transition-colors font-medium"
          >
            Voir le blog
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="text-xs text-white/50 hover:text-white transition-colors font-medium px-3 py-1.5 rounded-lg hover:bg-white/10"
            >
              Déconnexion
            </button>
          </form>
        </div>
      </header>
      <main className="p-4 md:p-6 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
