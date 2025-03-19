import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

const themeToggleId = "theme-toggle";

export const ThemeToggle = ({ className }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const handleThemeToggle = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("color-theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <label
      className={`bg-toggle-bg outline-toggle-fill w-10 cursor-pointer rounded-full p-1 outline transition-all duration-300 has-checked:pl-5 md:w-12 md:has-checked:pl-6 ${className}`}
      htmlFor={themeToggleId}
    >
      <div className="bg-toggle-fill flex size-4 items-center justify-center rounded-full md:size-5">
        <input
          id={themeToggleId}
          name="theme"
          type="checkbox"
          className="peer sr-only"
          checked={isDark}
          onChange={handleThemeToggle}
        />
        <SunIcon className="size-3 peer-checked:hidden md:size-4" />
        <MoonIcon className="hidden size-3 peer-checked:inline md:size-4" />
      </div>
      <span className="sr-only">Interruptor tema oscuro o claro</span>
    </label>
  );
};
