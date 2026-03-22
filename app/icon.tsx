import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b5553a",
          borderRadius: "6px",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          stroke="none"
        >
          <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.3 8 5 9 4 11C3 13 4 15.5 5.5 16C7 16.5 8 15 8.5 13.5C9 12 9.5 11.5 10 12C10.5 12.5 10 15 10 17C10 19.5 11 22 12 22C13 22 14 19.5 14 17C14 15 13.5 12.5 14 12C14.5 11.5 15 12 15.5 13.5C16 15 17 16.5 18.5 16C20 15.5 21 13 20 11C19 9 17.7 8 17 5.5C16.5 3.5 14.5 2 12 2Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
