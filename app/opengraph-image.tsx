import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

export const runtime = "edge";

export const alt = content.seoTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #fbfdfe, #f1f5f9)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span style={{ fontSize: "64px", fontWeight: "bold", color: "#0f172a", marginLeft: "24px" }}>
            Aura Odontologia
          </span>
        </div>
        
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "32px",
            maxWidth: "1000px"
          }}
        >
          {content.heroTitle}
        </h1>
        
        <p
          style={{
            fontSize: "36px",
            color: "#64748b",
            textAlign: "center",
            maxWidth: "800px"
          }}
        >
          {content.heroSubtitle}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
