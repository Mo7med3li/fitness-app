import CategoriesSkeleton from "@/components/skeleton/meals/categories.skeleton";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types/meals";
import useMeals from "@/hooks/meals/useGetMeals";
import { Link, useParams } from "react-router-dom";

export default function HealthyFilter() {
  // hooks
  const { data, isPending } = useMeals();
  const { id: mealParam } = useParams();

  // Loading Skeleton
  if (isPending) {
    return (
      <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-4 pb-3 hide-scroll">
        {Array.from({ length: 6 }).map((_, idx) => (
          <CategoriesSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-4 pb-3 hide-scroll">
      {data?.categories?.map((meal: Category) => {
        const isSelected = mealParam === meal.strCategory;

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
