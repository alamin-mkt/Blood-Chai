import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E31E24",
          green: "#00843D",
          navy: "#152238",
          dark: "#0F172A",
          surface: "#F8FAFC",
          light: "#FFFFFF",
          border: "#E2E8F0",
          success: "#16A34A",
          warning: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        bengali: ["var(--font-hind-siliguri)", "Noto Sans Bengali", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
