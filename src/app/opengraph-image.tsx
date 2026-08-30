import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { wedding } from "@/content/wedding";
import { brand, loadBrandFonts, MonogramBadge } from "@/lib/og-brand";

export const alt = `${wedding.couple.display} wedding invitation`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadBrandFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: `linear-gradient(180deg, ${brand.cream} 0%, ${brand.beige} 100%)`,
          color: brand.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <MonogramBadge />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                fontFamily: "Outfit",
                fontSize: 18,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: brand.mustard,
              }}
            >
              Wedding invitation
            </span>
            <span
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: 72,
                fontStyle: "italic",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              {wedding.couple.display}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "22px 26px",
              background: brand.ivory,
              border: `1px solid ${brand.mustardSoft}`,
            }}
          >
            <span
              style={{
                fontFamily: "Outfit",
                fontSize: 16,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: brand.mustard,
              }}
            >
              The wedding
            </span>
            <span style={{ fontFamily: "Cormorant Garamond", fontSize: 34, lineHeight: 1.1 }}>
              {wedding.wedding.day}, {wedding.wedding.date} · {wedding.wedding.time}
            </span>
            <span style={{ fontFamily: "Outfit", fontSize: 22, color: brand.brown, lineHeight: 1.45 }}>
              {wedding.wedding.venue}, {wedding.wedding.shortPlace}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "22px 26px",
              background: brand.ivory,
              border: `1px solid ${brand.mustardSoft}`,
            }}
          >
            <span
              style={{
                fontFamily: "Outfit",
                fontSize: 16,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: brand.mustard,
              }}
            >
              The celebration
            </span>
            <span style={{ fontFamily: "Cormorant Garamond", fontSize: 34, lineHeight: 1.1 }}>
              {wedding.reception.day}, {wedding.reception.date} · {wedding.reception.time}
            </span>
            <span style={{ fontFamily: "Outfit", fontSize: 22, color: brand.brown, lineHeight: 1.45 }}>
              {wedding.reception.venue}, {wedding.reception.shortPlace}
            </span>
          </div>
        </div>

        <span
          style={{
            fontFamily: "Outfit",
            fontSize: 18,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: brand.brown,
          }}
        >
          {site.url.replace("https://", "")}
        </span>
      </div>
    ),
    { ...size, fonts },
  );
}
