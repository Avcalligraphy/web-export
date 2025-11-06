import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          base: "#05080E",
        },
        primary: "#05080E",
        secondary: "#0E1014",
        foreground: "#ffffff",
        gray: {
          100: "#1F1F1F",
          200: "#262626",
        },
        red: {
          100: "#E50000",
        },
      },
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        urbanist: ["var(--font-urbanist)", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};

export default config;

