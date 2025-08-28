import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i18n, { getDirection } from "@/i18n";
import { useEffect } from "react";

export function TranslationToggle() {
  // Effects
  useEffect(() => {
    const dir = getDirection(i18n.language);
    document.documentElement.setAttribute("dir", dir);
  }, [i18n.language]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none">
        {i18n.language == "ar" ? "Arabic" : "English"}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => i18n.changeLanguage("ar")}>
          Arabic
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
