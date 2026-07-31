"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-4.5 h-4.5",
    lg: "w-5 h-5",
  };

  const buttonSizes = {
    sm: "p-2",
    md: "p-2.5",
    lg: "p-3",
  };

  return (
    <motion.button
      onClick={(e) => toggleTheme(e)}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.08 }}
      aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
        theme === "dark"
          ? "bg-white/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          : "bg-slate-900/10 hover:bg-indigo-600/20 text-indigo-600 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
      } ${buttonSizes[size]} ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.35, ease: "backOut" }}
      >
        {theme === "dark" ? (
          <Sun className={`${iconSizes[size]} text-amber-300 fill-amber-300/20`} />
        ) : (
          <Moon className={`${iconSizes[size]} text-indigo-600 fill-indigo-600/20`} />
        )}
      </motion.div>
    </motion.button>
  );
}
