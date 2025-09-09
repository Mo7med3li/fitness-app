import { Dumbbell } from "lucide-react";
import WOrkouts from "./../../../../public/assets/WOrkouts.webp";
import { ClassesExplore } from "./components/ClassesExplore";
import ClassesFilter from "../../../components/common/ClassesFilter";
import { useTranslation } from "react-i18next";

export default function ClassessPage() {
  const { t } = useTranslation();
  return (
    <section className="relative dark:bg-[#242424] font-baloo bg-white text-black">
      {/* Workouts Background */}
      <div className="flex justify-center -m-5 relative">
        <img src={WOrkouts} alt="WOrkouts" className="" />
        <p className="absolute bottom-0 text-main flex gap-2 whitespace-nowrap">
          <Dumbbell />
          {t("fitness-class")}
        </p>
      </div>

      {/* content */}
      <div className="content p-10 ">
        {/* header */}
        <div className="w-2/4 mx-auto">
          <h3 className="text-4xl font-bold text-center">
            {t("home.title1")}
            <span className="text-main">{t("home.title2")}</span>
          </h3>
        </div>
        {/* navigate classes , filter muscles */}
        <ClassesFilter />

        {/* Classes Explore */}
        <ClassesExplore />
      </div>
    </section>
  );
}
