import { ImageResponse } from "next/og";
import { LOGO_C, LOGO_S } from "./components/Logo";

export const runtime = "edge";
export const alt = "Simon Caillieret cherche une alternance DevOps à Lille ou Lens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Satori ne lit que du TTF/WOFF : on garde les fichiers locaux.
  const [inter400, inter600] = await Promise.all([
    fetch(new URL("./_fonts/inter-400.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./_fonts/inter-600.ttf", import.meta.url)).then((r) => r.arrayBuffer())
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#11676a",
          color: "#fffdfa",
          fontFamily: "Inter"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <svg width="64" height="64" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="14" fill="#fffdfa" />
              <g fill="none" stroke="#0f5052" strokeWidth="5.4" strokeLinecap="round">
                <path d={LOGO_S} />
                <path d={LOGO_C} />
              </g>
              <circle cx="50.23" cy="32" r="3.3" fill="#5fb8ae" />
            </svg>
            <span style={{ fontSize: 30, fontWeight: 600 }}>Simon Caillieret</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 108,
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: "-0.05em"
          }}
        >
          <span>Je cherche une</span>
          <span>alternance DevOps</span>
          <span>à Lille ou Lens.</span>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "2px solid rgba(255,253,250,0.3)",
            paddingTop: 22,
            fontSize: 26,
            color: "#dde9e5"
          }}
        >
          Mastère Expert DevOps, EPSI Lille, 2026 à 2028
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
        { name: "Inter", data: inter600, weight: 600, style: "normal" }
      ]
    }
  );
}