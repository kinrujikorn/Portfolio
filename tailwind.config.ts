import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        "primary-blue": "#00a2ff",
        "secondary-blue": "#0066cc",
        "glow-blue": "rgba(0, 162, 255, 0.2)",
        "card-bg": "#111827",
        "card-border": "#1e293b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
