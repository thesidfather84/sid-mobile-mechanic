import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const alt = "Sid Mobile Mechanic LLC — Automotive Service and Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d1117 0%, #131a22 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#58a6ff",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {company.legalName}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          Automotive Service. Technology. Opportunity.
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 28,
            color: "#9fb0c3",
            maxWidth: 900,
          }}
        >
          Louisiana automotive service and technology company — owner of
          BIDWRENX and HoundMoto.
        </div>
        <div
          style={{
            marginTop: 56,
            height: 6,
            width: 220,
            background: "#1f6feb",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    size,
  );
}
