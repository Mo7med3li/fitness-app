import i18n from "@/i18n";
import useWhyUsData from "@/lib/constants/why-us.const";

const WhyUsContent = () => {
  // Variables
  const whyUsData = useWhyUsData();

  const formatNumber = (number: number) => {
    const locale = i18n.language === "ar" ? "ar" : i18n.language;
    return new Intl.NumberFormat(locale, {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      numberingSystem: i18n.language === "ar" ? "arab" : "latn",
    }).format(number);
  };

  return (
    <section className="content space-y-8">
      {whyUsData.map((item) => (
        <div key={item.id} className="flex gap-6 items-center">
          <div>
            <div className="flex items-center justify-center text-grayExtra font-bold text-xs size-[60px] rounded-full bg-main border border-charcoal/15">
              {formatNumber(0) + formatNumber(item.id)}
            </div>
          </div>
          <div className="flex flex-col gap-2 py-1">
            <h2 className="capitalize font-bold text-charcoal dark:text-grayExtra">{item.title}</h2>
            <p className="font-rubik text-charcoal dark:text-grayExtra">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default WhyUsContent;
