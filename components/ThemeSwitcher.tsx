"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunLight, HalfMoon } from "iconoir-react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="w-10 h-10"></div>; // Placeholder to avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-zinc-400 hover:text-red-500"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <SunLight width={24} height={24} />
      ) : (
        <HalfMoon width={24} height={24} />
      )}
    </button>
  );
}
