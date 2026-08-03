import Image from "next/image";

/**
 * ClientLogos - Social proof band.
 * Sits directly under the hero so credibility lands within the first
 * two screens rather than six sections down the page.
 */
const ClientLogos = () => {
  return (
    <section className="relative overflow-hidden border-y border-[#0D332B]/10 bg-[#FCFDFC] py-9 md:py-11">
      {/* Background decor */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3FFC4] opacity-35 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#65746F]">
          Ils nous font confiance
        </p>

        <div className="mt-7 flex justify-center opacity-75 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0">
          <Image
            src="/logos/Group-6896.svg"
            alt="Logos des entreprises qui font confiance à Suzali Conseil"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
