import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

export const runtime = "edge";
export const alt = content.seo.title;
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
          background: "linear-gradient(to bottom right, #2b5672, #1a3648)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            background: "rgba(255,255,255,0.1)",
            padding: "20px 40px",
            borderRadius: "100px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "white",
              letterSpacing: "-0.05em",
            }}
          >
            {content.companyName}
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "30px",
            maxWidth: "1000px",
          }}
        >
          {content.hero.title}
        </h1>
        
        <p
          style={{
            fontSize: "36px",
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: "800px"
          }}
        >
          {content.hero.subtitle}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
