import { Check } from "lucide-react";

/*
 * HeroNotes - the short reassurance line under the hero actions (RGPD,
 * démarrage, ...). Muted on ink, a lime check per item, no icons as decor.
 * Rides the hero's focus-in after the actions.
 */
export default function HeroNotes({ items, delay = 900 }) {
  return (
    <ul
      className="hero-focus mt-10 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-white/12 pt-6 text-sm text-[#B9CBC4]"
      style={{ "--rise-delay": `${delay}ms` }}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Check size={15} strokeWidth={2.5} className="shrink-0 text-[#B0FF5B]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
