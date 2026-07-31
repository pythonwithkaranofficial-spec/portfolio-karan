import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: {
          DEFAULT: "rgba(15, 23, 42, 0.6)",
          hover: "rgba(30, 41, 59, 0.7)",
          card: "rgba(17, 24, 39, 0.5)",
        },
        primary: {
          DEFAULT: "#3b82f6", // Electric Blue
          dark: "#1d4ed8",
          glow: "#60a5fa",
        },
        accent: {
          purple: "#8b5cf6",
          cyan: "#06b6d4",
          indigo: "#6366f1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)",
        "cyan-purple-glow": "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.12), rgba(139, 92, 246, 0.12), transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "orbit": "orbit 20s linear infinite",
        "orbit-reverse": "orbit-reverse 25s linear infinite",
        "glow-line": "glowLine 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        glowLine: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-glow": "0 0 25px rgba(59, 130, 246, 0.2), 0 0 50px rgba(139, 92, 246, 0.1)",
        "neon-blue": "0 0 20px rgba(59, 130, 246, 0.4)",
        "neon-purple": "0 0 20px rgba(139, 92, 246, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
