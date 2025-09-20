// Variables

import { useTranslation } from "react-i18next";

const useExercisesMeals = () => {
  // Translation
  const { t } = useTranslation();

  return [
    {
      name: t("breakfast"),
      image: "/assets/breakfast.webP",
    },
    {
      name: t("lunch"),
      image: "/assets/lunch.webP",
    },
    {
      name: t("dinner"),
      image: "/assets/dinner.webP",
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
