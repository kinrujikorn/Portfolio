import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-border": "var(--surface-border)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        glow: "var(--glow)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "status-green": "var(--status-green)",
        "card-bg": "var(--surface)",
        "card-border": "var(--surface-border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [typography],
};

export default config;
