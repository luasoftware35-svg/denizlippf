import { ImageResponse } from "next/og";

export const alt = "Denizli göçük düzeltme ve Denizli PPF kaplama — Inside";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#212529",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", letterSpacing: 10, fontSize: 18, color: "#A89376" }}>
          INSIDE · PDR - PPF
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 0.95 }}>
            Denizli Göçük
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, color: "#A89376", lineHeight: 0.95 }}>
            & PPF
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#6b6560", maxWidth: 760 }}>
            Boyasız göçük düzeltme ve boya koruma filmi. Merkezefendi, 2017’den beri.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
