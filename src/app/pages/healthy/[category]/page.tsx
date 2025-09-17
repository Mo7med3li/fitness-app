import { useParams } from "react-router-dom";
import MealsCategories from "../components/meals-categories";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { MealDetails, MealDetailsResponse } from "@/lib/types/meals/meals-details";
import { getCategoryMeals } from "./api/get-category-meals";
import { getMealDetails } from "./api/get-meal-details";
import type { CategoryMeal, CategoryMealsResponse } from "@/lib/types/meals/meals-by-category";

const HealthyMealRecipePage = () => {
  // States
  const [selectedMealId, setSelectedMealId] = useState("");

  // Params
  const { category } = useParams();

  // Queries
  const { data, isLoading } = useQuery<CategoryMealsResponse>({
    queryKey: ["Meals", category],
    queryFn: () => getCategoryMeals(category),
  });

  // Effects
  useEffect(() => {
    if (data?.meals?.length) {
      setSelectedMealId(data.meals[0].idMeal);
    }
  }, [data]);

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
      <MealsCategories />
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          {category}
          {data?.meals?.map((meal: CategoryMeal) => (
            <div key={meal.idMeal} onClick={() => setSelectedMealId(meal.idMeal)}>
              {meal.strMeal}
            </div>
          ))}
        </div>
        <div className="col-span-2 bg-black">
          <h2 className="text-2xl font-bold text-white">{mealDataDetails.meals[0].strMeal}</h2>
          <p className="text-main">
            {mealDataDetails.meals.map((details: MealDetails) => details.strInstructions)}
          </p>
          {selectedMealId}
        </div>
      </div>
    </div>
  );
};

export default HealthyMealRecipePage;
