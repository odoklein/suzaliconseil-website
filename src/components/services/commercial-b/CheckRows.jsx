import { Check } from "lucide-react";
import Reveal from "../../home/kit/Reveal";

/*
 * CheckRows - a plain list drawn as hairline rows, each line opened by a
 * small check (lime on ink: an active check; green on paper). Used for "pour
 * qui", deliverables and feature lists in place of tinted cards.
 *
 * items: string[] (or nodes); columns: 1 | 2.
 */
export default function CheckRows({ items, tone = "paper", columns = 1, className = "" }) {
  const onInk = tone === "ink";
  const hair = onInk ? "border-white/12" : "border-[#0D332B]/14";

  return (
    <ul
      className={`grid border-t ${hair} ${columns === 2 ? "sm:grid-cols-2 sm:gap-x-10" : ""} ${className}`}
    >
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={typeof item === "string" ? item : i}
          delay={Math.min(i, 5) * 50}
          className={`flex items-start gap-3.5 border-b ${hair} py-4 md:py-5`}
        >
          <Check
            size={17}
            strokeWidth={2.75}
            aria-hidden="true"
            className={`mt-1 shrink-0 ${onInk ? "text-[#B0FF5B]" : "text-[#4E8D38]"}`}
          />
          <span
            className={`text-base leading-relaxed md:text-[17px] ${
              onInk ? "text-[#E4ECE8]" : "text-[#2C4640]"
            }`}
          >
            {item}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
