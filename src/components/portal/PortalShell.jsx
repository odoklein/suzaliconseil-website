"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { LayoutDashboard, Users, Calendar, LogOut } from "lucide-react";

export default function PortalShell({ client, children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/portal/login";

  useEffect(() => {
    if (!isLogin && !client) {
      router.replace("/portal/login");
    }
  }, [isLogin, client, router]);

  if (isLogin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <Link href="/" className="mb-8">
          <Image src="/assets/whitelogo.svg" alt="Suzali" width={160} height={44} />
        </Link>
        {children}
      </div>
    );
  }

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  const nav = [
    { href: "/portal", label: "Tableau de bord", icon: LayoutDashboard },
    { href: "/portal/contacts", label: "Contacts SDR", icon: Users },
    { href: "/portal/meetings", label: "Rendez-vous", icon: Calendar },
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 shrink-0 border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/portal" className="block">
            <Image src="/assets/whitelogo.svg" alt="Suzali" width={140} height={40} />
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                pathname === href || (href === "/portal" && pathname === "/portal")
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t border-white/10">
          <p className="text-white/60 text-sm px-4 mb-2">{client.name}</p>
          <form action="/portal/api/logout" method="post">
            <button
              type="submit"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white font-medium transition-colors"
            >
              <LogOut size={20} />
              Déconnexion
            </button>
          </form>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/10 flex items-center px-8 shrink-0">
          <h1 className="font-heading font-bold text-lg text-white/90">Espace client</h1>
        </header>
        <main className="flex-1 overflow-auto bg-[#0d332b]">
          {children}
        </main>
      </div>
    </div>
  );
}
