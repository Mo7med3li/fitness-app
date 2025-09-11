//   Imports
import { Dumbbell } from "lucide-react";
import WOrkouts from "./../../../../public/assets/WOrkouts.webp";
import { ClassesExplore } from "./components/ClassesExplore";
import ClassesFilter from "../../../components/common/ClassesFilter";
import { useTranslation } from "react-i18next";

//   Page Component
export default function ClassessPage() {
  const { t } = useTranslation();

  return (
    //  Main Section
    <section className="relative dark:bg-[#242424] font-baloo bg-white text-black">
      {/* 🔹 Background image with title */}
      <div className="flex justify-center -m-5 relative">
        <img src={WOrkouts} alt="WOrkouts" />
        <p className="absolute bottom-0 text-main flex gap-2 whitespace-nowrap">
          <Dumbbell />
          {t("fitness-class")}
        </p>
      </div>

      {/* 🔹 Page content */}
      <div className="content p-10 ">
        {/*  Header title  */}
        <div className="w-2/4 mx-auto">
          <h3 className="text-4xl font-bold text-center text-white">
            {t("home.title1")}
            <span className="text-main">{t("home.title2")}</span>
          </h3>
        </div>

        {/*  Muscles filter navigation  */}
        <ClassesFilter />

        {/*   Explore classes section  */}
        <ClassesExplore />
      </div>
    </section>
  );
}
