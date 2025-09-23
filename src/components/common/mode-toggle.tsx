import { useTheme } from "../providers/components/theme-provider";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  // Theme
  const { setTheme, theme } = useTheme();

  // State
  const [isDark, setIsDark] = useState(theme == "dark");

  return (
    <div
      className={cn(
        "w-9 h-5 rounded-xl cursor-pointer transition-colors duration-500",
        isDark ? "bg-main" : "bg-white",
      )}
      onClick={() => {
        const newDark = !isDark;
        setIsDark(newDark);
        setTheme(newDark ? "dark" : "light");
      }}
    >
      <div
        className={cn(
          "w-5 h-full rounded-full transition-all duration-700 ease-in-out",
          isDark
            ? "translate-x-full rtl:translate-x-0 bg-white"
            : "translate-x-0 rtl:-translate-x-full bg-black",
        )}
      />
    </div>
  );
}
