"use client";

import { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = (): void => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 text-yellow-300 dark:text-gray-800 hover:scale-105 transition-transform"
      aria-label="Toggle Theme"
    >
      {isDark ? <BsSun size={14} /> : <BsMoonStarsFill size={14} />}
    </button>
  );
};

export default ThemeToggle;
