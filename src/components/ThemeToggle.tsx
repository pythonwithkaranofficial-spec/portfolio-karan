"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Switch light or dark theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted hover:text-ink"
    >
      <Sun size={16} className="hidden dark:block" />
      <Moon size={16} className="dark:hidden" />
    </button>
  );
}
