import Image from "next/image";

const technologies = [
  { name: "Next.js", file: "nextjs.svg", width: 86 },
  { name: "React", file: "react.svg", width: 38 },
  { name: "Shopify", file: "shopify.svg", width: 98 },
  { name: "WordPress", file: "wordpress.svg", width: 118 },
  { name: "Google Ads", file: "googleads.svg", width: 38 },
  { name: "HubSpot", file: "hubspot.svg", width: 90 },
  { name: "Stripe", file: "stripe.svg", width: 72 },
  { name: "Figma", file: "figma.svg", width: 30 },
];

/* One run of logos; the band shows two so the strip loops without a seam. */
function Run({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {technologies.map((technology) => (
        <li key={technology.name} className="flex h-12 items-center px-7 md:px-10 lg:px-12" title={technology.name}>
          <Image
            src={`/logos/${technology.file}`}
            alt={hidden ? "" : technology.name}
            width={technology.width}
            height={32}
            className="h-7 w-auto max-w-[118px] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

/* The homepage logo band, carrying the stack instead of the clients. */
export function DigitalTechStack() {
  return (
    <section className="logo-band relative border-y border-[#0D332B]/10 bg-[#F6F7F4]">
      <div className="mx-auto flex max-w-[1600px] flex-col md:flex-row md:items-stretch">
        <p className="shrink-0 border-b border-[#0D332B]/10 px-6 py-5 text-sm font-semibold tracking-[-0.01em] text-[#0D332B] md:flex md:w-64 md:items-center md:border-b-0 md:border-r md:px-8 lg:w-72">
          Les technologies qui servent vos objectifs
        </p>

        <div
          className="relative min-w-0 flex-1 overflow-hidden py-6 md:py-7"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="logo-run flex w-max items-center opacity-70 grayscale">
            <Run />
            <Run hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
