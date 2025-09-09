// Variables

import { useTranslation } from "react-i18next";
export const useMuscles = () => {
  // Translation
  const { t } = useTranslation();

  return [
    {
      name: t("fullbody"),
    },
    {
      name: t("chest"),
    },
    {
      name: t("arm"),
    },
    {
      name: t("shoulder"),
    },
    {
      name: t("back"),
    },
    {
      name: t("stomach"),
    },
    {
      name: t("leg"),
    },
  ];
};

export const useLevels = () => {
  // Translation
  const { t } = useTranslation();

  return [
    {
      name: t("beginner"),
    },
    {
      name: t("intermediate"),
    },
    {
      name: t("advanced"),
    },
  ];
};

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
