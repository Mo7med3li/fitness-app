import { cn } from "@/lib/utils";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import type { Category } from "@/lib/types/meals";
import useMeals from "@/hooks/meals/useGetMeals";

export default function HealthyFilter() {
  // hooks
  const { data, isPending } = useMeals();
  const navigate = useNavigate();
  const { meal: mealParam } = useParams();
  const location = useLocation();
  // const { t } = useTranslation();

  // Determine if we're on the full body route based on the current path
  const isFullBody =
    location.pathname === "/healthy" || (!mealParam && location.pathname.includes("/healthy"));

  //   isPending skeleton Ui
  if (isPending) {
    return (
      <div className="flex justify-center mt-10">
        <ul className="flex justify-center gap-5 flex-wrap">
          {[...Array(6)].map((_, idx) => (
            <li
              key={idx}
              className="h-8 w-20 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-xl"
            ></li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <ul className="flex justify-center gap-5 flex-wrap">
        <li
          onClick={() => {
            navigate("/healthy");
          }}
          className={cn(
            "rounded-xl px-2 py-1 cursor-pointer transition-colors duration-200 hover:bg-main",
            isFullBody ? "bg-main text-white" : "bg-transparent text-white",
          )}
        >
          <p>all meals</p>
        </li>

        {data?.categories.map((meal: Category) => {
          const isSelected = mealParam === meal.strCategory;

          return (
            <li
              key={meal.idCategory}
              className={cn(
                "rounded-xl px-2 py-1 cursor-pointer transition-colors duration-200 hover:bg-main text-black dark:text-white border border-gray-400 dark:border-none",
                isSelected ? "bg-main" : "bg-transparent",
              )}
            >
              <Link to={`/healthy/${meal.idCategory}`}>{meal.strCategory}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
