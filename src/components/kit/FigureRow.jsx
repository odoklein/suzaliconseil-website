import Reveal from "../home/kit/Reveal";

/*
 * FigureRow - the page's own figures, kept modest: a hairline row of value +
 * label, never a giant hero stat bar. Ink on paper, white on ink.
 *
 * items: [{ value, label, note? }]
 * layout: "row" (2 / 4 columns) or "stack" (one per line, for a side column)
 */
export default function FigureRow({ items, tone = "paper", layout = "row", className = "" }) {
  const onInk = tone === "ink";
  const hair = onInk ? "border-white/12" : "border-[#0D332B]/14";
  const grid =
    layout === "stack"
      ? "grid-cols-1"
      : items.length === 2
        ? "grid-cols-2"
        : items.length === 3
          ? "grid-cols-1 sm:grid-cols-3"
          : "grid-cols-2 lg:grid-cols-4";

  return (
    <dl className={`grid border-t ${hair} ${grid} ${className}`}>
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={Math.min(i, 4) * 70}
          className={`flex flex-col-reverse gap-1 border-b ${hair} py-6 ${
            layout === "stack" ? "" : "pr-4 md:py-8"
          }`}
        >
          <dt className={`text-sm leading-snug ${onInk ? "text-[#B9CBC4]" : "text-[#4E605B]"}`}>
            {item.label}
            {item.note && (
              <span className={`block ${onInk ? "text-[#B9CBC4]/75" : "text-[#4E605B]/85"}`}>
                {item.note}
              </span>
            )}
          </dt>
          <dd
            className={`font-heading text-[clamp(1.9rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.045em] tabular-nums ${
              onInk ? "text-[#F7FAF8]" : "text-[#0D332B]"
            }`}
          >
            {item.value}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
