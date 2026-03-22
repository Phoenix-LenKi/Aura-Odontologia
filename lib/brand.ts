export const brand = {
  logoPath: "/logo.svg",
  fontHeading: "DM Serif Display",
  fontBody: "Inter",
  tone: "warm-professional" as const,
  originalContrast: "medium" as const,
  nicheDirection: "saude-odonto-clinica" as const,
  motionLevel: "moderate" as const,
  motionSources: ["framer-motion"],

  brandColors: {
    primary: "#b5553a",
    secondary: "#95452f",
    background: "#ffffff",
    surface: "#f7f7f7",
    surfaceAlt: "#b5553a",
    text: "#2d2d2d",
    muted: "#5d5d61",
    border: "rgba(45, 45, 45, 0.08)",
    accent: "#c97a64",
  },

  radius: "sm" as const,
  shadowStyle: "minimal" as const,
  buttonStyle: "solid-sharp" as const,
  cardStyle: "flat-bordered" as const,
  heroStyle: "fullscreen-image-overlay" as const,
  sectionDensity: "comfortable" as const,
};
