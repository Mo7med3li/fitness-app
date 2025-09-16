import { Dumbbell } from "lucide-react";
import AboutLogo from "./../../../../public/assets/About_us.webp";
import AboutImage from "./components/about-image";
import AboutUsContent from "./components/about-content";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white dark:bg-[#242424] font-baloo text-gray-900 dark:text-white">
      {/*  Background image with title */}
      <div className="flex justify-center -m-5 relative">
        <img src={AboutLogo} alt="WOrkouts" />
        <p className="absolute bottom-0 text-main flex gap-2 whitespace-nowrap">
          <Dumbbell />
          {t("about-us")}
        </p>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2">
        {/* images  */}
        <AboutImage />

        {/*  Page content */}
        <AboutUsContent />
      </div>
    </section>
  );
}
