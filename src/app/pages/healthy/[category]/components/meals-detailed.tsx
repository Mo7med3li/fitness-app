import type { MealDetails } from "@/lib/types/meals/meals-details";
import { Link } from "react-router-dom";
import { ChefHat, MapPin, Tag, Link as LinkIcon } from "lucide-react";
import MealInfoItem from "./meal-item";

const MealsDetailed = ({ meal }: { meal: MealDetails }) => {
  // variables
  const mealInfo = [
    {
      icon: <ChefHat className="h-4 w-4 text-main" />,
      label: "Category",
      value: meal.strCategory,
    },
    {
      icon: <MapPin className="h-4 w-4 text-main" />,
      label: "Area",
      value: meal.strArea,
    },
    {
      icon: <Tag className="h-4 w-4 text-main" />,
      label: "Tags",
      value: meal.strTags || "Tags",
    },
    {
      icon: <LinkIcon className="h-4 w-4 text-main" />,
      label: "Source",
      value: meal.strSource ? "Open link" : "",
    },
  ];
  return (
    <section className="space-y-6">
      {/* Image Section */}
      <section
        className="w-full h-[500px] flex flex-col justify-end bg-cover bg-center rounded-tl-3xl rounded-tr-3xl backdrop-blur-[55px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), #242424),url(${meal.strMealThumb})`,
        }}
      >
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-5xl font-baloo font-medium text-grayExtra">{meal.strMeal}</h2>
          <Link
            target="_blank"
            to={meal.strSource ?? ""}
            className="text-grayExtra/90 font-baloo capitalize text-base md:text-lg line-clamp-4 px-1 hover:text-white transition-colors"
          >
            {meal.strInstructions}
          </Link>

          {/* Meal Info Section */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 mt-2">
            {mealInfo.map((item) => (
              <MealInfoItem
                key={item.label}
                icon={item.icon}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Ingredients Section */}
      <h2 className="text-3xl font-baloo font-medium lg:text-start text-center text-grayExtra">
        Ingredients
      </h2>
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-between bg-charcoal/80 backdrop-blur-[20px] shadow-md">
        <div className="w-80">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex justify-between border-b border-[#2d2d2d] pb-1">
              <span className="text-grayExtra font-semibold font-baloo capitalize">
                {meal[`strIngredient${index + 1}` as keyof MealDetails]}
              </span>
              <span className="text-main font-baloo capitalize">
                {meal[`strMeasure${index + 1}` as keyof MealDetails]}
              </span>
            </div>
          ))}
        </div>
        <div className="w-80">
          {Array.from({ length: 5 }).map(
            (_, index) =>
              meal[`strIngredient${index + 6}` as keyof MealDetails] && (
                <div key={index} className="flex justify-between border-b border-[#2d2d2d] pb-1">
                  <span className="text-grayExtra font-semibold font-baloo capitalize">
                    {meal[`strIngredient${index + 6}` as keyof MealDetails]}
                  </span>
                  <span className="text-main font-baloo capitalize">
                    {meal[`strMeasure${index + 6}` as keyof MealDetails]}
                  </span>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default MealsDetailed;
