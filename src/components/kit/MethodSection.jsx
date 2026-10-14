import SectionHead from "../home/kit/SectionHead";
import MethodRail from "./MethodRail";

/*
 * MethodSection - the homepage method chapter for any page: a sticky heading
 * on the left (children render under it, e.g. a CTA), the numbered rail on the
 * right, and an optional footnote under the steps.
 *
 * className carries the chapter ground; pass the same class as `ground`.
 */
export default function MethodSection({
  id,
  title,
  intro,
  steps,
  footnote,
  children,
  className = "bg-[#F6F7F4]",
  ground = "bg-[#F6F7F4]",
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 border-t border-[#0D332B]/10 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="h-fit lg:sticky lg:top-32 lg:col-span-5">
            <SectionHead size="md" title={title} intro={intro} introClassName="md:text-lg" />
            {children}
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <MethodRail steps={steps} ground={ground} />
            {footnote && (
              <p className="mt-14 max-w-[62ch] border-t border-[#0D332B]/12 pt-8 text-base leading-relaxed text-[#4E605B]">
                {footnote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
