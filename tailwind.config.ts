import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem" }, screens: { xl: "1120px" } },
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
