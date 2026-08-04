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

export function DigitalTechStack() {
  return (
    <section className="border-y border-[#0D332B]/10 bg-[#FCFDFC] py-9 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-[#40524E]">
          Les technologies qui servent vos objectifs
        </p>
        <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4 lg:grid-cols-8">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex h-9 items-center justify-center grayscale transition-[filter,transform] duration-300 hover:scale-[1.04] hover:grayscale-0"
              title={technology.name}
            >
              <Image
                src={`/logos/${technology.file}`}
                alt={technology.name}
                width={technology.width}
                height={32}
                className="h-7 w-auto max-w-[118px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
