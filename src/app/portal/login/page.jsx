import PortalLoginForm from "../../../components/portal/PortalLoginForm";

export const metadata = {
  title: "Connexion | Espace client",
  description: "Connectez-vous à votre espace client Suzali Conseil.",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return (
    <div className="w-full max-w-md">
      <h2 className="font-heading font-bold text-2xl text-white mb-2">Espace client</h2>
      <p className="text-white/70 text-sm mb-8">
        Saisissez vos identifiants pour accéder à vos contacts et rendez-vous.
      </p>
      <PortalLoginForm />
    </div>
  );
}
