"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunLight, HalfMoon } from "iconoir-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10"></div>; // Placeholder to avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 mr-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-red-500 hover:bg-zinc-300 dark:hover:bg-red-600 dark:hover:text-white transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <SunLight /> : <HalfMoon />}
    </button>
  );
}
