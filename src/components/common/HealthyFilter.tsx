import { cn } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import type { Category } from "@/lib/types/meals";
import useMeals from "@/hooks/meals/useGetMeals";

export default function HealthyFilter() {
  // hooks
  const { data, isPending } = useMeals();
  const { id: mealParam } = useParams();

  //   isPending skeleton Ui
  if (isPending) {
    return (
      <>
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="skeleton-item" />
        ))}
      </>
    );
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {data?.categories.map((meal: Category) => {
        const isSelected = mealParam === meal.idCategory;

        return (
          <Link
            key={meal.idCategory}
            to={`/healthy/${meal.strCategory}`}
            className={cn(
              "rounded-xl px-2 py-1 cursor-pointer transition-colors duration-200 hover:bg-main",
              isSelected ? "bg-main text-white" : "bg-transparent text-white",
            )}
          >
            {meal.strCategory}
          </Link>
        );
      })}
    </div>
  );
}
