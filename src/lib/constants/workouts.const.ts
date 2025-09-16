import { useTranslation } from "react-i18next";

export const workouts = () => {
  // Translation
  const { t } = useTranslation();
  return [
    {
      title: t("group-workout"),
      image: "/assets/group-workout.png",
    },
    {
      title: t("personal-training"),
      image: "/assets/personal.png",
    },
    {
      title: t("muscle-building"),
      image: "/assets/muscle-building.jpg",
    },
    {
      title: t("strength-and-power"),
      image: "/assets/Strength.jpg",
    },
    {
      title: t("program"),
      image: "/assets/Weight-Loss.jpg",
    },
    {
      title: t("hiit-training"),
      image: "/assets/HIIT-Training.jpg",
    },
    {
      title: t("yoga-and-flexibility"),
      image: "/assets/Yoga.jpg",
    },
    {
      title: t("crossfit-challenge"),
      image: "/assets/CrossFit.jpg",
    },
    {
      title: t("cardio-blast"),
      image: "/assets/Cardio.jpg",
    },
    {
      title: t("endurance-training"),
      image: "/assets/Training.jpg",
    },
    {
      title: t("functional-fitness"),
      image: "/assets/Fitness.jpg",
    },
    {
      title: t("core-and-abs-workout"),
      image: "/assets/Abs-Workout.jpg",
    },
  ];
};
