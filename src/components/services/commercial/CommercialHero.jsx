import MagneticButton from "../../ui/MagneticButton";
import { PageHero, Reveal } from "../../kit";

export function CommercialHero() {
  return (
    <>
      <PageHero
        title="Accélérez votre prospection B2B"
        intro="De la structuration de votre force de vente à la génération de leads qualifiés."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Performance commerciale", href: "/services/commercial" },
        ]}
        actions={
          <>
            <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Audit de prospection gratuit
            </MagneticButton>
            <MagneticButton href="#services" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Découvrir nos solutions
            </MagneticButton>
          </>
        }
        image="/images/equipeprospection.png"
        imageAlt="L'équipe de prospection commerciale de Suzali Conseil dans ses bureaux"
        imagePosition="center 42%"
      />

      <section aria-label="Notre approche commerciale" className="bg-[#F6F7F4] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal
            as="p"
            variant="focus"
            className="max-w-[28ch] font-heading text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0D332B]"
          >
            Nous déployons les meilleures stratégies de prospection commerciale B2B
            en France pour booster votre croissance.
          </Reveal>
        </div>
      </section>
    </>
  );
}
