import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { wedding } from "@/content/wedding";

export const alt = `${wedding.couple.display} wedding invitation logo`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const brand = {
  cream: "#f7f3ea",
} as const;

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/brand/wedding-logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

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
          padding: "12px 24px",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={606}
          height={606}
          style={{
            width: 606,
            height: 606,
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size,
  );
}
