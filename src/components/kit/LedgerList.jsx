import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../home/kit/Reveal";

/*
 * LedgerList - hairline-separated rows that replace same-size card grids.
 * Each row: a title, an optional description and meta, and an arrow when it
 * links somewhere. The row's ground rises on hover/focus (.ledger-row).
 *
 * items: [{ title, description?, meta?, href? }]
 */
export default function LedgerList({ items, tone = "paper", className = "" }) {
  const onInk = tone === "ink";
  const hair = onInk ? "border-white/12" : "border-[#0D332B]/14";

  return (
    <ul className={`border-t ${hair} ${className}`}>
      {items.map((item, i) => {
        const body = (
          <>
            <div className="grid min-w-0 flex-1 gap-2 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-10">
              <span
                className={`font-heading text-[1.3rem] font-semibold leading-tight tracking-[-0.03em] md:text-[1.6rem] ${
                  onInk ? "text-[#F7FAF8]" : "text-[#0D332B]"
                }`}
              >
                {item.title}
              </span>
              {(item.description || item.meta) && (
                <span className="block">
                  {item.description && (
                    <span
                      className={`block text-[15px] leading-relaxed md:text-base ${
                        onInk ? "text-[#B9CBC4]" : "text-[#4E605B]"
                      }`}
                    >
                      {item.description}
                    </span>
                  )}
                  {item.meta && (
                    <span
                      className={`mt-2 block font-mono text-[0.75rem] tracking-normal ${
                        onInk ? "text-[#B9CBC4]/80" : "text-[#4E605B]/90"
                      }`}
                    >
                      {item.meta}
                    </span>
                  )}
                </span>
              )}
            </div>
            {item.href && (
              <ArrowUpRight
                size={22}
                aria-hidden="true"
                className={`mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                  onInk ? "text-[#B0FF5B]" : "text-[#0D332B]"
                }`}
              />
            )}
          </>
        );

        const rowClass = `ledger-row group flex items-start justify-between gap-6 border-b ${hair} px-1 py-6 outline-none md:px-3 md:py-8 ${
          onInk ? "on-ink focus-visible:ring-2 focus-visible:ring-[#B0FF5B]" : "focus-visible:ring-2 focus-visible:ring-[#0D332B]"
        }`;

        return (
          <Reveal as="li" key={item.href ?? item.title} delay={Math.min(i, 5) * 60}>
            {item.href ? (
              <Link href={item.href} className={rowClass}>
                {body}
              </Link>
            ) : (
              <div className={rowClass.replace("ledger-row ", "")}>{body}</div>
            )}
          </Reveal>
        );
      })}
    </ul>
  );
}
