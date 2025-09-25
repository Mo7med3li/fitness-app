import i18n, { getDirection } from "@/i18n";
import { useEffect } from "react";
import { Button } from "../ui/button";

export function TranslationToggle() {
  // Effects
  useEffect(() => {
    const dir = getDirection(i18n.language);
    document.documentElement.setAttribute("dir", dir);
  }, [i18n.language]);
  return (
    <Button
      variant="ghost"
      className="border-none text-main"
      onClick={() => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")}
    >
      <span className="text-white text-lg font-semibold">(</span>
      {i18n.language === "ar" ? "العربية" : "English"}
      <span className="text-white text-lg font-semibold">)</span>
    </Button>
  );
}
