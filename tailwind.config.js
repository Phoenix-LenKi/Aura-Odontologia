/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#b5553a",
          dark: "#95452f",
          light: "#c97a64",
        },
        cream: "#f7f7f7",
        charcoal: {
          DEFAULT: "#2d2d2d",
          light: "#5d5d61",
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1" }],
        "heading": ["clamp(1.75rem, 3vw, 3rem)", { lineHeight: "1.2" }],
        "subheading": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
      },
    },
  },
  plugins: [],
};
