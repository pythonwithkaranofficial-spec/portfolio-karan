import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    // Full-width layout: the page spans the whole screen with comfortable side padding.
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2.5rem", "2xl": "4rem" }, screens: {} },
    extend: {
      colors: {
        bg: v("bg"),
        surface: v("surface"),
        line: v("line"),
        ink: v("ink"),
        muted: v("muted"),
        accent: v("accent"),
        "accent-ink": v("accent-ink"),
        good: v("good"),
        warn: v("warn"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
};

export default config;
