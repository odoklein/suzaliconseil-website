import Image from "next/image";

/**
 * ClientLogos - Social proof band.
 * Sits directly under the hero so credibility lands within the first
 * two screens rather than six sections down the page.
 */
const ClientLogos = () => {
  return (
    <section className="bg-white py-12 md:py-16 relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          Ils nous font confiance
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src="/logos/Group-6896.svg"
            alt="Logos des entreprises qui font confiance à Suzali Conseil"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
