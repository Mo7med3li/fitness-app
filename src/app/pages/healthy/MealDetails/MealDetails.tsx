import HealthyFilter from "@/components/common/HealthyFilter";
import { useTranslation } from "react-i18next";
import healthyLogo from "./../../../../../public/assets/Healthy.webp";

export default function MealDetails() {
  const { t } = useTranslation();

  return (
    //  Main Section
    <section className="relative dark:bg-[#242424] font-baloo bg-white text-black">
      {/*  Background image with title */}
      <div className="flex justify-center -m-5 relative">
        <img src={healthyLogo} alt="healthyLogo" />
      </div>

      {/*  Page content */}
      <div className="content p-10 ">
        {/*  Header title  */}
        <div className="w-2/4 mx-auto">
          <h3 className="text-4xl font-bold text-center text-white">
            {t("meals.header1")} <span className="text-main">{t("meal-plans")} </span>
            {t("for-you")}
          </h3>
        </div>

        {/*  Muscles filter navigation  */}
        <HealthyFilter />

        {/*   Explore MealDetails section  */}
        <h1 className="dark:text-white">add your ui</h1>
      </div>
    </section>
  );
}
