import { redirect } from "next/navigation";
import AdminLoginForm from "./AdminLoginForm";
import { getAdminSession } from "../../../lib/admin-auth";

export const metadata = {
  title: "Admin | Connexion",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin");

  return (
    <div className="min-h-screen bg-[#0D332B] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white/10 rounded-2xl p-8 shadow-xl">
        <h1 className="text-xl font-bold text-white mb-6 text-center">
          Admin Actualités
        </h1>
        <AdminLoginForm />
      </div>
    </div>
  );
}
