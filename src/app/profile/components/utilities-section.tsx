import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
import logout from "@/lib/utils/logout.utils";

const baseCard =
  "rounded-2xl shadow-sm border border-grayLight flex items-center justify-center p-8 font-baloo hover:bg-grayLight transition duration-300 ease-in-out hover:dark:bg-charcoal/50 h-[180px]";
const textCard = "font-semibold text-lg capitalize text-charcoal dark:text-grayExtra";
const UtilitiesSection = () => {
  // Theme
  const { theme } = useTheme();

  return (
    <section className="relative w-full bg-charcoal/60  bg-[url('/assets/traidmails.jpg')] bg-cover bg-center">
      <div className="backdrop-blur-[86px] w-full py-5">
        <Navbar />
        <div className="container mx-auto px-4">
          {/* Grid actions */}
          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Change Password */}
            <div className={baseCard}>
              <Link to="/change-password" className="flex flex-col items-center gap-4 text-center">
                <RefreshCcw className="text-main" size={24} />
                <h4 className={textCard}>Change Password</h4>
              </Link>
            </div>

            {/* Select Language */}
            <div className={cn(baseCard, "flex-col gap-1")}>
              <Globe className="text-main" size={24} />
              <div className="flex flex-col items-center text-center">
                <h4 className={textCard}>select language</h4>
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
                  <h4 className={textCard}>mood</h4>
                  <span className="text-lg font-semibold">(</span>
                  <h3 className="text-main capitalize text-lg font-semibold">{theme}</h3>
                  <span className="text-lg font-semibold">)</span>
                </div>
                <ModeToggle />
              </div>
            </div>

            {/* Security */}
            <div className={baseCard}>
              <div className="flex flex-col items-center gap-4 text-center">
                <Settings className="text-main" size={24} />
                <h4 className={textCard}>security</h4>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className={baseCard}>
              <div className="flex flex-col items-center gap-4 text-center">
                <ShieldQuestion className="text-main" size={24} />
                <h4 className={textCard}>privacy policy</h4>
              </div>
            </div>

            {/* Help */}
            <div className={baseCard}>
              <div className="flex flex-col items-center gap-4 text-center">
                <MailWarning className="text-main" size={24} />
                <h4 className={textCard}>help</h4>
              </div>
            </div>

            {/* Logout - full width on large screens */}
            <div className={cn(baseCard, "col-start-2 col-span-1")}>
              <div className="flex flex-col items-center gap-3 text-center">
                <LogOut className="text-main" size={24} />
                <Button variant="ghost" className={cn(textCard, "text-main")} onClick={logout}>
                  logout
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
