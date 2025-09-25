import { useTranslation } from "react-i18next";

const useGoals = () => {
  const { t } = useTranslation();
  return [
    { key: "gain weight", label: t("gain-weight") },
    { key: "lose weight", label: t("lose-weight") },
    { key: "get fitter", label: t("get-fitter") },
    { key: "gain more flexible", label: t("gain-more-flexible") },
    { key: "learn the basic", label: t("learn-the-basic") },
  ];
};
export default useGoals;
