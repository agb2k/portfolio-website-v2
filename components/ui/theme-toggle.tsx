"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Theme Toggle Component
 * 
 * Demonstrates advanced React patterns:
 * - Client-side rendering with "use client"
 * - Custom hook usage (useTheme from next-themes)
 * - State management with useState
 * - Effect handling with useEffect
 * - Conditional rendering based on state
 * - Accessibility considerations (aria-label)
 * - System theme detection and handling
 * 
 * Handles theme switching between light/dark modes with system preference detection
 */
export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => setMounted(true), []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) return null;

  // Determine current theme (handles system theme)
  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-xl border px-3 py-2 text-sm hover:shadow transition"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
