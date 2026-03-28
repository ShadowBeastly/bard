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
        primary: {
          DEFAULT: "#1B2A4A",
          light: "#2A3D6A",
          dark: "#111D35",
        },
        accent: {
          DEFAULT: "#D4943A",
          light: "#E0A854",
          dark: "#B87D2E",
        },
        warm: {
          bg: "#F5F3EF",
          light: "#FAF9F7",
          border: "#E8E4DD",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
