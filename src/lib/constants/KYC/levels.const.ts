import { useTranslation } from "react-i18next";

const useLevels = () => {
  // Translation
  const { t } = useTranslation();
  return [
    { key: "level1", label: t("rookie") },
    { key: "level2", label: t("beginner") },
    { key: "level3", label: t("intermediate") },
    { key: "level4", label: t("advance") },
    { key: "level5", label: t("true-beast") },
  ];
};
export default useLevels;
