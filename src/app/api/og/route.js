import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Suzali Conseil").slice(0, 90);
  const isDigital = searchParams.get("theme") === "digital";
  const accent = isDigital ? "#38bdf8" : "#66D49C";
  const background = isDigital ? "#0c4a6e" : "#0D332B";

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background,
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "76px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: accent,
            height: "14px",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div
            style={{
              color: accent,
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 3,
              marginBottom: 28,
              textTransform: "uppercase",
            }}
          >
            Suzali Conseil
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 55 ? 58 : 68,
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#d1fae5",
              display: "flex",
              fontSize: 25,
              marginTop: 34,
            }}
          >
            Prospection B2B • Performance commerciale • Digital
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
