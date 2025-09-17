import type { CategoryMeal, CategoryMealsResponse } from "@/lib/types/meals/meals-by-category";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryMeals } from "../api/get-category-meals";
import type { MealDetails, MealDetailsResponse } from "@/lib/types/meals/meals-details";
import { getMealDetails } from "../api/get-meal-details";
import MealsCategories from "../../components/meals-categories";
import MealCard from "./meal-card";
import MealsDetailed from "./meals-detailed";
import InfiniteScroll from "react-infinite-scroll-component";
import MealCardSkeleton from "@/components/skeleton/meals/meal-card.skeleton";
import { useTranslation } from "react-i18next";

const MealsRecipeSection = () => {
  // Translation
  const { t } = useTranslation();

  // States
  const [selectedMealId, setSelectedMealId] = useState("");
  const [slicedMeals, setSlicedMeals] = useState<CategoryMeal[]>([]);

  // Params
  const { category } = useParams();

  // Queries
  const { data: CategoryMealsResponse, isLoading } = useQuery<CategoryMealsResponse>({
    queryKey: ["Meals", category],
    queryFn: () => getCategoryMeals(category),
  });

  // Effects
  useEffect(() => {
    if (CategoryMealsResponse?.meals?.length) {
      setSelectedMealId(CategoryMealsResponse.meals[0].idMeal);
      setSlicedMeals(CategoryMealsResponse.meals.slice(0, 5));
    }
  }, [CategoryMealsResponse]);

  // Queries
  const { data: mealDataDetails } = useQuery<MealDetailsResponse>({
    queryKey: ["Meals Details", selectedMealId],
    enabled: !!selectedMealId,
    queryFn: () => getMealDetails(selectedMealId),
  });

  if (isLoading || !mealDataDetails) {
    return (
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <MealCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Functions
  const fetchMoreData = () => {
    const next = slicedMeals.length + 5;
    setTimeout(() => {
      setSlicedMeals(CategoryMealsResponse!.meals.slice(0, next));
    }, 500);
  };
  return (
    <div>
      <div className="grid grid-cols-3 container p-4 gap-4">
        <div className="lg:col-span-1 col-span-3 w-[420px] h-[700px] overflow-auto dark:bg-charcoal/50 bg-grayExtra/50 border-2 dark:border-[#282828] border-grayLight rounded-[20px] px-2 backdrop-blur-[20px] pt-4 hide-scroll">
          <div className=" space-y-4 ">
            <MealsCategories />
            <InfiniteScroll
              next={fetchMoreData}
              hasMore={slicedMeals.length < CategoryMealsResponse?.meals?.length!}
              loader={<MealCardSkeleton />}
              endMessage={
                <h4 className="text-center text-main text-2xl font-semibold">
                  {t("end-of-meals")}
                </h4>
              }
              dataLength={slicedMeals.length}
            >
              {slicedMeals?.map((meal: CategoryMeal) => (
                <div
                  className="px-4 pb-4"
                  key={meal.idMeal}
                  onClick={() => setSelectedMealId(meal.idMeal)}
                >
                  <MealCard meal={meal} />
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </div>
        <section className="lg:col-span-2 col-span-3">
          {mealDataDetails.meals.map((details: MealDetails) => (
            <MealsDetailed meal={details} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default MealsRecipeSection;
