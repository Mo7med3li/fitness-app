export type CategoryMeal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type CategoryMealsResponse = {
  meals: CategoryMeal[];
};
