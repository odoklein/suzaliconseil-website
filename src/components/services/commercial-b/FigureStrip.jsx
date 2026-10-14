import FigureRow from "../../kit/FigureRow";

/*
 * FigureStrip - a quiet row of figures on paper (kit FigureRow in a section).
 * Kept deliberately modest: these figures come from older site copy and still
 * have to be validated.
 *
 * items: [{ value, label }]
 */
export default function FigureStrip({ items, className = "" }) {
  return (
    <section className={`bg-[#F6F7F4] pt-10 md:pt-14 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FigureRow items={items} />
      </div>
    </section>
  );
}
