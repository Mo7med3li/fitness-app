import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export default function AboutUsContent() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // لو اللغة عربي

  return (
    <div className="content lg:col-span-1 p-4 sm:p-6 md:p-8 lg:p-10 col-span-1 text-gray-900 dark:text-white flex flex-col gap-8 sm:gap-12 md:gap-16 w-full">
      {/*  Header title  */}
      <div className="w-full flex flex-col gap-4 sm:gap-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          <Trans i18nKey="about.header">
            EMPOWERING YOU TO ACHIEVE
            <span className="text-main block sm:inline"> YOUR FITNESS </span>
            <span className="block sm:inline">GOALS</span>
          </Trans>
        </h3>
        <p className="text-base sm:text-lg md:text-xl font-rubik leading-relaxed text-gray-700 dark:text-gray-200">
          {t("about.header2")}
        </p>
      </div>

      {/*  content  */}
      <div className="text-gray-900 dark:text-white w-full max-w-4xl">
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Personal Trainer */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className={`sm:w-5 sm:h-5 ${isRTL ? "rotate-180" : ""}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                {t("personal-trainer")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {t("personal-trainer-des")}
              </p>
            </div>
          </div>

          {/* Cardio Programs */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className={`sm:w-5 sm:h-5 ${isRTL ? "rotate-180" : ""}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                {t("cardio-programs")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {t("cardio-programs-des")}
              </p>
            </div>
          </div>

          {/* Quality Equipment */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className={`sm:w-5 sm:h-5 ${isRTL ? "rotate-180" : ""}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                {t("quality-equipment")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {t("quality-equipment-des")}
              </p>
            </div>
          </div>

          {/* Healthy Nutritions */}
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-main mt-1 flex-shrink-0">
              <ArrowRight size={18} className={`sm:w-5 sm:h-5 ${isRTL ? "rotate-180" : ""}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                {t("healthy-nutritions")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {t("healthy-nutritions-des")}
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-start">
          <Button
            icon={() => <ArrowRight />}
            className="bg-main hover:bg-orange-600  text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full flex items-center space-x-2 sm:space-x-3 transition-colors shadow-lg hover:shadow-xl group w-full sm:w-auto justify-center sm:justify-start max-w-xs"
          >
            <span className="text-sm sm:text-base">{t("get-started")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
