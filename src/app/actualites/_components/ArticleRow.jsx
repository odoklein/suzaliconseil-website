import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../components/kit";

/*
 * One article in the ledger: mono date / reading time on the left, the title
 * and its excerpt in the middle, the category as a quiet label and an arrow on
 * the right. The row's ground rises on hover/focus (.ledger-row).
 *
 * Excerpts come from the CMS with the odd HTML entity left in (&#8230;),
 * hence decodeEntities.
 */
export function decodeEntities(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

export default function ArticleRow({
  href,
  title,
  excerpt,
  date,
  dateTime,
  readTime,
  category,
  headingAs: Heading = "h2",
  index = 0,
}) {
  return (
    <Reveal as="li" delay={Math.min(index, 5) * 60}>
      <Link
        href={href}
        className="ledger-row group grid gap-3 border-b border-[#0D332B]/14 px-1 py-7 outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] md:grid-cols-[10.5rem_minmax(0,1fr)_auto] md:gap-10 md:px-3 md:py-9"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.75rem] tracking-normal text-[#4E605B] md:flex-col md:items-start md:pt-2">
          {date && <time dateTime={dateTime}>{date}</time>}
          {date && readTime && (
            <span aria-hidden="true" className="md:hidden">
              ·
            </span>
          )}
          {readTime && <span>{readTime}</span>}
        </div>

        <div className="min-w-0">
          <Heading className="max-w-[34ch] font-heading text-[1.3rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#0D332B] md:text-[1.6rem]">
            {title}
          </Heading>
          {excerpt && (
            <p className="mt-3 line-clamp-2 max-w-[62ch] text-[15px] leading-relaxed text-[#4E605B] md:text-base">
              {decodeEntities(excerpt)}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-6 pt-1 md:flex-col md:items-end md:justify-start md:pt-2">
          {category && (
            <span className="text-sm font-medium text-[#4E605B]">{category}</span>
          )}
          <ArrowUpRight
            size={22}
            aria-hidden="true"
            className="shrink-0 text-[#0D332B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </Link>
    </Reveal>
  );
}
