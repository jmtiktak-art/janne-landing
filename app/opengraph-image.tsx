import { ImageResponse } from "next/og";

export const alt = "Janne — More of the work that actually matters.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF7F2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "#7B9971",
            marginBottom: 48,
          }}
        >
          🌱 Janne
        </div>
        <div
          style={{
            fontSize: 68,
            color: "#2A2A2A",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 28,
            fontWeight: 600,
          }}
        >
          More of the work that actually matters.
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#2A2A2A",
            opacity: 0.6,
          }}
        >
          Less admin eating your evenings.
        </div>
      </div>
    ),
    size
  );
}
