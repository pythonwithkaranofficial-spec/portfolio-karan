"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper function to calculate default theme based on current local time
// 6:00 AM (6) to 6:00 PM (18) -> Light Mode
// 6:00 PM (18) to 6:00 AM (6) -> Dark Mode
function getTimeBasedTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const hours = new Date().getHours();
  return hours >= 6 && hours < 18 ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickCoords, setClickCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Check if the user has a saved manual theme preference
    const savedUserPreference = (localStorage.getItem("user_theme_preference") ||
      localStorage.getItem("theme")) as Theme | null;

    let initialTheme: Theme;
    if (savedUserPreference === "light" || savedUserPreference === "dark") {
      // Respect user's explicit manual toggle choice
      initialTheme = savedUserPreference;
    } else {
      // Dynamic time-based default (6 AM - 6 PM: Light, 6 PM - 6 AM: Dark)
      initialTheme = getTimeBasedTheme();
    }

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  };

  const toggleTheme = (e?: React.MouseEvent) => {
    if (e) {
      setClickCoords({ x: e.clientX, y: e.clientY });
    } else {
      setClickCoords({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }

    setIsTransitioning(true);

    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    // Synchronized transition timing
    setTimeout(() => {
      setTheme(nextTheme);
      applyTheme(nextTheme);
      // Save manual toggle preference so user choice is preserved
      localStorage.setItem("user_theme_preference", nextTheme);
      localStorage.setItem("theme", nextTheme);
    }, 150);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 650);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}

      {/* Fullscreen Rich Theme Switch Animation Overlay */}
      <AnimatePresence>
        {isTransitioning && clickCoords && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0.95 }}
              animate={{ scale: 45, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                left: clickCoords.x,
                top: clickCoords.y,
                transform: "translate(-50%, -50%)",
              }}
              className={`absolute w-16 h-16 rounded-full shadow-2xl backdrop-blur-3xl ${
                theme === "dark"
                  ? "bg-gradient-to-r from-slate-100 via-blue-100 to-cyan-50 border border-slate-300"
                  : "bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border border-slate-800"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
