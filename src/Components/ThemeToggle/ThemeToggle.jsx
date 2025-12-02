import React, { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!theme) return null;

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle shadow-lg hover:bg-base-300 transition-all">
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={theme === "dark"}
        className="theme-controller"
      />

      {/* Sun Icon - Light Mode */}
      <HiSun className="swap-off h-6 w-6 text-yellow-500" />

      {/* Moon Icon - Dark Mode */}
      <HiMoon className="swap-on h-6 w-6 text-blue-400" />
    </label>
  );
};

export default ThemeToggle;
