import { useTranslation } from "react-i18next";

export const workouts = () => {
  // Translation
  const { t } = useTranslation();
  return [
    {
      title: t("group-workout"),
      image: "/assets/group-workout.webP",
    },
    {
      title: t("personal-training"),
      image: "/assets/personal.webP",
    },
    {
      title: t("muscle-building"),
      image: "/assets/muscle-building.webP",
    },
    {
      title: t("strength-and-power"),
      image: "/assets/Strength.webP",
    },
    {
      title: t("program"),
      image: "/assets/Weight-Loss.webP",
    },
    {
      title: t("hiit-training"),
      image: "/assets/HIIT-Training.webP",
    },
    {
      title: t("yoga-and-flexibility"),
      image: "/assets/Yoga.webP",
    },
    {
      title: t("crossfit-challenge"),
      image: "/assets/CrossFit.webP",
    },
    {
      title: t("cardio-blast"),
      image: "/assets/Cardio.webP",
    },
    {
      title: t("endurance-training"),
      image: "/assets/Training.webP",
    },
    {
      title: t("functional-fitness"),
      image: "/assets/Fitness.webP",
    },
    {
      title: t("core-and-abs-workout"),
      image: "/assets/Abs-Workout.webP",
    },
  ];
};
