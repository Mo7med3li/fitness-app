import { Dumbbell } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import healthyLogo from "./../../../../public/assets/Healthy.webp";
import HealthyFilter from "@/components/common/HealthyFilter";
import { MealsExplore } from "./components/HealthyExplore";

export default function HealthyPage() {
  const { t } = useTranslation();

  return (
    //  Main Section
    <section className="relative dark:bg-[#242424] font-baloo bg-white text-black">
      {/*  Background image with title */}
      <div className="flex justify-center relative">
        <img src={healthyLogo} alt="healthyLogo" />
        <p className="absolute bottom-0 text-main flex gap-2 whitespace-nowrap">
          <Dumbbell fill="orange" width={34} height={20} className="text-main rotate-45 w-9" />
          {t("healthy-nutritions")}
        </p>
      </div>

      {/* Page content */}
      <div className="content px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Header title - Fully responsive */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 dark:text-white transition-colors duration-300 leading-tight px-4 sm:px-0">
            <Trans
              i18nKey="healthy.header"
              components={{
                span: <span className="text-main dark:text-main block sm:inline mt-2 sm:mt-0" />,
              }}
            />
          </h3>
        </div>

        {/* Filter navigation  */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="px-10 mx-auto flex justify-center">
            <HealthyFilter />
          </div>
        </div>

        {/* Explore healthy section  */}
        <div className="px-10 mx-auto">
          <div className="bg-gray-50 dark:bg-[#2a2a2a] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-colors duration-300 shadow-sm dark:shadow-none">
            <MealsExplore />
          </div>
        </div>
      </div>
    </section>
  );
}
