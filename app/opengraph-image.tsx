import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ─── Load a Google Font by family + weight ────────────────────────────────────
async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:ital,wght@0,${weight};1,${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((r) => r.text());

  // Pull the first woff2 URL out of the CSS
  const url = css.match(/src: url\((.+?)\) format\('woff2'\)/)?.[1];
  if (!url) throw new Error(`Could not resolve font URL for ${family}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function OgImage() {
  const [loraData, interData] = await Promise.all([
    loadGoogleFont("Lora", 400),
    loadGoogleFont("Inter", 500),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Inter",
        }}
      >
        {/* ── Top bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "rgba(55,53,47,0.45)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Product Designer &amp; Builder
          </span>

          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "Inter",
              color: "rgba(55,53,47,0.45)",
              letterSpacing: "0.05em",
            }}
          >
            osinachi.me
          </span>
        </div>

        {/* ── Main heading ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span
            style={{
              fontSize: 72,
              fontWeight: 400,
              fontFamily: "Lora",
              color: "#37352F",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Product guy who builds,
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 400,
              fontFamily: "Lora",
              color: "#37352F",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            designs
          </span>
          {/* Accent italic line — matches hero */}
          <span
            style={{
              fontSize: 72,
              fontWeight: 400,
              fontFamily: "Lora",
              fontStyle: "italic",
              color: "#2383E2",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            and engineers.
          </span>
        </div>

        {/* ── Bottom row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(55,53,47,0.09)",
            paddingTop: 28,
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontFamily: "Inter",
              color: "#787774",
            }}
          >
            Osinachi Patrick · sinachpat-portfolio.vercel.app
          </span>

          {/* Monogram */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              backgroundColor: "#37352F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#FFFFFF",
                letterSpacing: "0.04em",
              }}
            >
              OP
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lora", data: loraData, weight: 400, style: "normal" },
        { name: "Lora", data: loraData, weight: 400, style: "italic" },
        { name: "Inter", data: interData, weight: 500, style: "normal" },
      ],
    }
  );
}
