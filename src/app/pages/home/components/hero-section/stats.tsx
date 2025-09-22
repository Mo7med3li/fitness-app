import { useTranslation } from "react-i18next";

const Stats = () => {
  // Translation
  const { t, i18n } = useTranslation();
  const formatNumber = (number: number) => {
    const locale = i18n.language === "ar" ? "ar" : i18n.language;
    return new Intl.NumberFormat(locale, {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      numberingSystem: i18n.language === "ar" ? "arab" : "latn",
    }).format(number);
  };

  // Items
  const items = [
    {
      title: t("active-members"),
      numbers: 1200,
    },
    {
      title: t("certified-trainers"),
      numbers: 12,
    },
    {
      title: t("year-of-experience"),
      numbers: 20,
    },
  ];
  return (
    <section className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="col-span-3 lg:col-span-1 space-y-1">
          <h2 className="font-bold text-2xl text-charcoal dark:text-white">
            {formatNumber(item.numbers)}+
          </h2>
          <p className="text-lg font-rubik text-charcoal dark:text-white">{item.title}</p>
        </div>
      ))}
    </section>
  );
};
export default Stats;
