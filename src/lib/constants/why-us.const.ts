import { useTranslation } from "react-i18next";

const useWhyUsData = () => {
  // Translation
  const { t } = useTranslation();

  return [
    {
      title: t("personalized-fitness-plans"),
      description: t("why-data-1"),
      id: 1,
    },
    {
      title: t("results-driven-focus"),
      description: t("why-data-2"),
      id: 2,
    },
    {
      title: t("state-of-the-art-equipment"),
      description: t("why-data-3"),
      id: 3,
    },
  ];
};
export default useWhyUsData;
