import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Globe,
  ShieldQuestion,
  LogOut,
  RefreshCcw,
  Sun,
  Moon,
  Settings,
  MailWarning,
} from "lucide-react";
import { ModeToggle } from "@/components/common/mode-toggle";
import { TranslationToggle } from "@/components/common/translation-toggle";
import { useTheme } from "@/components/providers/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/app/pages/components/Navbar";
import ChangeKyc from "./change-kyc";
import { useTranslation } from "react-i18next";

// Classes
const baseCard =
  "rounded-2xl col-span-3 lg:col-span-1 shadow-sm border border-grayLight flex items-center justify-center p-8 font-baloo hover:bg-grayLight transition duration-300 ease-in-out hover:dark:bg-charcoal cursor-pointer h-[180px]";
const textCard = "font-semibold text-lg capitalize text-charcoal dark:text-grayExtra";

const UtilitiesSection = () => {
  // Theme
  const { theme } = useTheme();

  //   Navigation
  const navigate = useNavigate();

  // Logout
  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/auth/login");
  };

  // Translation
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[url('/assets/traidmails.jpg')] bg-cover bg-center">
      <div className="backdrop-blur-[86px] w-full py-5 dark:bg-charcoal/50 bg-white/50">
        <Navbar />
        <div className="container space-y-10">
          <ChangeKyc />
          {/* Grid actions */}
          <div className=" grid grid-cols-3 gap-10 px-8">
            {/* Change Password */}
            <div className={baseCard}>
              <Link to="/change-password" className="flex flex-col items-center gap-4 text-center">
                <RefreshCcw className="text-main" size={24} />
                <h4 className={textCard}>{t("change-password")}</h4>
              </Link>
            </div>

            {/* Select Language */}
            <div className={cn(baseCard, "flex-col gap-1")}>
              <Globe className="text-main" size={24} />
              <div className="flex flex-col items-center text-center">
                <h4 className={textCard}>{t("select-language")}</h4>
                <TranslationToggle />
              </div>
            </div>

            {/* Mood */}
            <div className={baseCard}>
              <div className="flex flex-col items-center gap-3 text-center">
                {theme === "dark" ? (
                  <Moon className="text-main" size={24} />
                ) : (
                  <Sun className="text-main" size={24} />
                )}
                <div className="flex items-center gap-1">
                  <h4 className={textCard}>{t("mood")}</h4>
                  <span className="text-lg font-semibold">(</span>
                  <h3 className="text-main capitalize text-lg font-semibold">
                    {theme == "dark" ? t("dark") : t("light")}
                  </h3>
                  <span className="text-lg font-semibold">)</span>
                </div>
                <ModeToggle />
              </div>
            </div>

            {/* Security */}
            <div className={baseCard}>
              <div className="flex flex-col items-center gap-4 text-center">
                <Settings className="text-main" size={24} />
                <h4 className={textCard}>{t("security")}</h4>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className={baseCard}>
              <div className="flex flex-col items-center gap-4 text-center">
                <ShieldQuestion className="text-main" size={24} />
                <h4 className={textCard}>{t("privacy-policy")}</h4>
              </div>
            </div>

            {/* Help */}
            <div className={baseCard}>
              <div className="flex flex-col items-center gap-4 text-center">
                <MailWarning className="text-main" size={24} />
                <h4 className={textCard}>{t("help")}</h4>
              </div>
            </div>

            {/* Logout - full width on large screens */}
            <div className={cn(baseCard, "lg:col-start-2 ")}>
              <div className="flex flex-col items-center gap-3 text-center">
                <LogOut className="text-main" size={24} />
                <Button
                  variant="ghost"
                  className={cn(textCard, "text-main border-none")}
                  onClick={logout}
                >
                  {t("logout")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UtilitiesSection;
