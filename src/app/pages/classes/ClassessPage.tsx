//   Imports
import { Dumbbell } from "lucide-react";
import WOrkouts from "./../../../../public/assets/WOrkouts.webp";
import { ClassesExplore } from "./components/ClassesExplore";
import { Trans, useTranslation } from "react-i18next";
import ClassesFilter from "@/components/common/ClassesFilter";

//   Page Component
export default function ClassessPage() {
  const { t } = useTranslation();

  return (
    //  Main Section
    <section className="relative dark:bg-[#242424] font-baloo bg-white text-black">
      {/* 🔹 Background image with title */}
      <div className="flex justify-center relative">
        <img src={WOrkouts} alt="WOrkouts" />
        <p className="absolute bottom-0 text-main flex gap-2 whitespace-nowrap">
          <Dumbbell className="rotate-45" />
          {t("fitness-class")}
        </p>
      </div>

      {/* 🔹 Page content */}
      <div className="content p-4 sm:p-6 md:p-8 lg:p-10">
        {/*  Header title - Responsive */}
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 mx-auto mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black dark:text-white leading-tight px-2 sm:px-0">
            <Trans i18nKey="home.title1" components={{ span: <span className="text-main" /> }} />
          </h3>
        </div>

        {/*  Muscles filter navigation */}
        <div className="mb-6 sm:mb-8">
          <ClassesFilter />
        </div>

        {/*   Explore classes section */}
        <ClassesExplore />
      </div>
    </section>
  );
}
