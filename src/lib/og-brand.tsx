export const brand = {
  ink: "#1c1915",
  cream: "#f7f3ea",
  ivory: "#fbf8f1",
  beige: "#efe6d4",
  mustard: "#c4a035",
  mustardSoft: "#d6b45a",
  brown: "#6b5a3d",
} as const;

export async function loadBrandFonts() {
  const [display, displayItalic, body] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86GnM.ttf",
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd58jDOjw.ttf",
    ).then((res) => res.arrayBuffer()),
    fetch("https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4E.ttf").then((res) =>
      res.arrayBuffer(),
    ),
  ]);

  return [
    { name: "Cormorant Garamond", data: display, weight: 400 as const, style: "normal" as const },
    { name: "Cormorant Garamond", data: displayItalic, weight: 400 as const, style: "italic" as const },
    { name: "Outfit", data: body, weight: 400 as const, style: "normal" as const },
  ];
}

export function MonogramBadge({ compact = false }: { compact?: boolean }) {
  const size = compact ? 88 : 112;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${brand.mustard}`,
        transform: "rotate(45deg)",
        background: brand.ivory,
      }}
    >
      <span
        style={{
          transform: "rotate(-45deg)",
          fontFamily: "Cormorant Garamond",
          fontSize: compact ? 28 : 34,
          fontStyle: "italic",
          color: brand.ink,
          letterSpacing: "-0.04em",
        }}
      >
        J & D
      </span>
    </div>
  );
}
