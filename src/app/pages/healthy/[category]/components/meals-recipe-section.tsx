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

const MealsRecipeSection = () => {
  // States
  const [selectedMealId, setSelectedMealId] = useState("");

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
    }
  }, [CategoryMealsResponse]);

  // Queries
  const { data: mealDataDetails } = useQuery<MealDetailsResponse>({
    queryKey: ["Meals Details", selectedMealId],
    enabled: !!selectedMealId,
    queryFn: () => getMealDetails(selectedMealId),
  });

  if (isLoading || !mealDataDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 container p-4 gap-4">
        <div className="lg:col-span-1 col-span-3 w-[420px] h-[700px] overflow-auto bg-charcoal/50 border-2 border-[#282828] rounded-[20px] px-2 backdrop-blur-[20px] pt-4 hide-scroll">
          <div className=" space-y-4 ">
            <MealsCategories />
            {CategoryMealsResponse?.meals?.map((meal: CategoryMeal) => (
              <div
                className="px-4 pb-4"
                key={meal.idMeal}
                onClick={() => setSelectedMealId(meal.idMeal)}
              >
                <MealCard meal={meal} />
              </div>
            ))}
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
