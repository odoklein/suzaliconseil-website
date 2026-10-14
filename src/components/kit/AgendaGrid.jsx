/*
 * The agenda hairlines: the one texture of the brand. Twelve columns and
 * 88px rows drawn on ink, plus a copy lit around the cursor (the parent sets
 * --mx / --my and carries the .hero-stage class).
 */
const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(to right, #F7FAF8 1px, transparent 1px), linear-gradient(to bottom, #F7FAF8 1px, transparent 1px)",
  backgroundSize: "calc(100% / 12) 88px",
};

export default function AgendaGrid({ lit = true, fade = "down" }) {
  return (
    <>
      <div
        className={`hero-grid pointer-events-none absolute inset-0 opacity-[0.07] ${
          fade === "up" ? "hero-grid-up" : ""
        }`}
        style={GRID_STYLE}
        aria-hidden="true"
      />
      {lit && (
        <div
          className="hero-grid-lit pointer-events-none absolute inset-0"
          style={GRID_STYLE}
          aria-hidden="true"
        />
      )}
    </>
  );
}
