import Image from "next/image";

/**
 * ClientLogos - Social proof band.
 * Sits directly under the hero so credibility lands within the first
 * two screens rather than six sections down the page. The logo strip runs as
 * one continuous band (two copies, the second hidden from assistive tech).
 */
const ClientLogos = () => {
  return (
    <section className="logo-band relative border-y border-[#0D332B]/10 bg-[#F6F7F4]">
      <div className="mx-auto flex max-w-[1600px] flex-col md:flex-row md:items-stretch">
        <p className="shrink-0 border-b border-[#0D332B]/10 px-6 py-5 text-sm font-semibold tracking-[-0.01em] text-[#0D332B] md:flex md:w-64 md:items-center md:border-b-0 md:border-r md:px-8 lg:w-72">
          Ils nous font confiance
        </p>

        <div
          className="relative min-w-0 flex-1 overflow-hidden py-6 md:py-7"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="logo-run flex w-max items-center opacity-70 grayscale">
            <Image
              src="/logos/Group-6896.svg"
              alt="Logos des entreprises qui font confiance à Suzali Conseil"
              width={1366}
              height={160}
              className="h-20 w-auto max-w-none md:h-24"
            />
            <Image
              src="/logos/Group-6896.svg"
              alt=""
              aria-hidden="true"
              width={1366}
              height={160}
              className="h-20 w-auto max-w-none md:h-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
