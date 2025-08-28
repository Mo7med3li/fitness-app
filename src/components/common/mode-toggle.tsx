import { useTheme } from "../providers/components/theme-provider";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={cn(
        " w-9 h-5 rounded-xl cursor-pointer transition-colors duration-500",
        isDark ? "bg-black" : "bg-white"
      )}
      onClick={() => {
        setIsDark(!isDark);
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <div
        className={cn(
          "w-5 h-full rounded-full  transition-all duration-700 ease-in-out -translate-x-full ",
          isDark ? "-translate-x-full bg-white" : "translate-x-0 bg-black"
        )}
      ></div>
    </div>
  );
}
