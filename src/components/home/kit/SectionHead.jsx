import Reveal from "./Reveal";

/*
 * One heading voice for the whole homepage: a large Sora display line that
 * wipes in, and an intro paragraph that follows it. No eyebrow label: the
 * heading carries the section on its own.
 */
export default function SectionHead({
  title,
  intro,
  tone = "paper",
  size = "lg",
  className = "",
  introClassName = "",
  children,
}) {
  const onInk = tone === "ink";
  const sizes = {
    lg: "text-[clamp(2.4rem,5.4vw,4.9rem)]",
    md: "text-[clamp(2.2rem,4.4vw,4rem)]",
  };

  return (
    <div className={className}>
      <Reveal
        as="h2"
        variant="mask"
        className={`font-heading font-semibold leading-[0.98] tracking-[-0.045em] ${sizes[size]} ${
          onInk ? "text-[#F7FAF8]" : "text-[#0D332B]"
        }`}
      >
        {title}
      </Reveal>
      {intro && (
        <Reveal
          as="p"
          delay={140}
          className={`mt-6 max-w-[58ch] text-lg leading-relaxed md:text-xl ${
            onInk ? "text-[#B9CBC4]" : "text-[#4E605B]"
          } ${introClassName}`}
        >
          {intro}
        </Reveal>
      )}
      {children}
    </div>
  );
}
