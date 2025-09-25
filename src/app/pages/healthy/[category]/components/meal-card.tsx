import i18n from "@/i18n";
import type { CategoryMeal } from "@/lib/types/meals/meals-by-category";
import { Star, Clock, Flame } from "lucide-react";
import { useTranslation } from "react-i18next";

const MealCard = ({ meal }: { meal: CategoryMeal }) => {
  // Translation
  const { t } = useTranslation();
  const formattedCalories = new Intl.NumberFormat(
    i18n.language === "ar" ? "ar-EG" : "en-US",
  ).format(250);
  const formattedTime = new Intl.NumberFormat(i18n.language === "ar" ? "ar-EG" : "en-US").format(
    30,
  );

  return (
    <div className="relative h-[100px] py-1 px-4 cursor-pointer overflow-hidden rounded-xl bg-transparent shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex border-b border-[#2d2d2d]">
      <div className="relative h-20 w-24">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-[20px]"
        />
      </div>
      <div className="flex-1 min-w-0 pl-4 pr-2 py-2 flex flex-col justify-center">
        <h2 className="text-lg font-semibold dark:text-grayExtra text-charcoal line-clamp-1">
          {meal.strMeal}
        </h2>
        <div className="mt-1 flex items-center gap-3 text-xs text-gray-400">
          <span className="inline-flex items-center rtl:flex-row-reverse">
            <Clock className="h-4 w-4 mr-1" />
            <span>{t("meal.time", { value: formattedTime })}</span>
          </span>
          <span className="inline-flex items-center rtl:flex-row-reverse">
            <Flame className="h-4 w-4 mr-1" />
            <span>{t("meal.calories", { value: formattedCalories })}</span>
          </span>
          <span className="inline-flex items-center rtl:flex-row-reverse">
            <Star className="h-4 w-4 mr-1 text-amber-500" />
            <span>{t("delicious")}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
