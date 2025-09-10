// Variables

import { useTranslation } from "react-i18next";

const useExercisesMeals = () => {
  // Translation
  const { t } = useTranslation();

  return [
    {
      name: t("breakfast"),
      image: "/assets/breakfast.png",
    },
    {
      name: t("lunch"),
      image: "/assets/lunch.png",
    },
    {
      name: t("dinner"),
      image: "/assets/dinner.jpg",
    },
  ];
};
export default useExercisesMeals;

export function getWorkoutTaglines() {
  // Translation
  const { t } = useTranslation();

  return [
    { text: t("expertly-designed-workout") },
    { text: t("professionally-plan") },
    { text: t("scientifically-program") },
  ];
}
