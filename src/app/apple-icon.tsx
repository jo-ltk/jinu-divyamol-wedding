import { ImageResponse } from "next/og";
import { brand, loadBrandFonts, MonogramBadge } from "@/lib/og-brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await loadBrandFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.cream,
        }}
      >
        <MonogramBadge compact />
      </div>
    ),
    { ...size, fonts },
  );
}
