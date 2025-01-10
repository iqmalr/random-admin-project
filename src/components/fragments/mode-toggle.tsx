"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme === undefined) {
      setTheme("light");
    }
    setIsDarkMode(theme === "dark");
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setTheme(newMode ? "dark" : "light");
    setIsDarkMode(newMode);
  };

  return (
    <Button variant="ghost" className="w-10 px-0" onClick={toggleTheme}>
      {isDarkMode ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-100 dark:hover:-rotate-45" />
      ) : (
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all hover:rotate-45 dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}