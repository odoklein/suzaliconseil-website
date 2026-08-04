import { BarChart3, Compass, Rocket, Workflow } from "lucide-react";

const steps = [
  {
    title: "Cadrer",
    description:
      "Nous partons de votre objectif, de vos contraintes et de ce qui existe déjà.",
    icon: Compass,
  },
  {
    title: "Concevoir",
    description:
      "Nous traduisons les priorités en parcours, messages, outils et livrables concrets.",
    icon: Workflow,
  },
  {
    title: "Déployer",
    description:
      "Un premier périmètre utile permet d'avancer rapidement et de mesurer ce qui compte.",
    icon: Rocket,
  },
  {
    title: "Améliorer",
    description:
      "Nous suivons les retours et les données pour faire évoluer le dispositif avec vous.",
    icon: BarChart3,
  },
];

export function DigitalProcess() {
  return (
    <section className="bg-[#EAF2EE] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#0D332B] text-[#B0FF5B]">
            <Workflow size={24} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <h2 className="mt-7 max-w-[11ch] text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Une méthode qui garde le cap.
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-[#40524E]">
            Un projet digital devient utile lorsqu&apos;il avance avec les équipes,
            les contraintes opérationnelles et les objectifs de vente.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="min-h-[220px] rounded-[24px] border border-[#0D332B]/10 bg-[#FCFDFC] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-38px_rgba(13,51,43,0.54)] sm:p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#E3FFC4] text-[#0D332B]">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-9 text-2xl font-bold tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[#52635F]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
