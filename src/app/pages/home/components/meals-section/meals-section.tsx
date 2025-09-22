import { Dumbbell } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import RecommendedMeals from "@/app/pages/exercises/components/recommended-meals";
import useExercisesMeals from "@/lib/constants/exercises/exercise.const";

function MealsSection() {
  // Variables
  const exercisesMeals = useExercisesMeals();

  // Translation
  const { t } = useTranslation();

  return (
    <section className="w-full relative lg:h-screen bg-[url('/assets/meals-section.webp')] bg-cover bg-center py-6 flex flex-col lg:items-center items-start gap-6 p-4">
      <span className="relative z-10 flex text-center w-full gap-2 items-center text-main font-semibold text-sm justify-center before:content-['Healthy'] before:-z-10 before:tracking-widest before:rtl:content-['الصحة'] before:text-black/30 before:rtl:bottom-10 before:absolute before:hidden before:text-[64px] before:font-bold before:dark:text-white/10 lg:before:flex before:justify-center before:bottom-8 before:left-1/2 before:-translate-x-1/2 before:whitespace-nowrap mt-3">
        <Dumbbell fill="orange" width={34} height={34} className="text-main rotate-45 w-9" />
        {t("healthy-nutrition")}
      </span>
      <div className="left-0 right-0 absolute lg:h-[400px] top-8 lg:bg-grayExtra/70 dark:lg:bg-charcoal/60 lg:backdrop-blur-2xl -z-0"></div>
      <h2 className=" relative z-10 font-bold text-[40px] lg:text-charcoal text-grayExtra dark:text-grayExtra px-2 max-w-[600px] text-wrap">
        <Trans i18nKey="meals.heading" components={{ strong: <span className="text-main" /> }} />
      </h2>

      <section className="container grid grid-cols-1 lg:grid-cols-3 gap-7">
        {exercisesMeals.map((meal) => (
          <RecommendedMeals key={meal.name} meal={meal.name} image={meal.image} />
        ))}
      </section>
    </section>
  );
}
export default MealsSection;
