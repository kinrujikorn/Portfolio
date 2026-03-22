import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: "#18181b",
        "surface-border": "#27272a",
        primary: "#8B5CF6",
        "primary-light": "#A78BFA",
        glow: "rgba(139, 92, 246, 0.15)",
        "text-primary": "#f4f4f5",
        "text-secondary": "#a1a1aa",
        "status-green": "#22c55e",
        "card-bg": "#18181b",
        "card-border": "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
