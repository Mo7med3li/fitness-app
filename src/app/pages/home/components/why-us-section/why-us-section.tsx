import { Trans, useTranslation } from "react-i18next";
import WhyUsContent from "./why-us-content";
import WhyUsImages from "./why-us-images";
import { Dumbbell } from "lucide-react";

const WhyUsSection = () => {
  // Translation
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white/95 dark:bg-charcoal/95">
      <div className="backdrop-blur-[86px]">
        <div className=" grid grid-cols-2 lg:px-28 px-4 gap-1 py-14">
          <div className="col-span-2 lg:col-span-1 space-y-16 lg:w-[640px] flex flex-col  rtl:justify-center">
            {/* Heading */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-2 font-bold text-main relative before:content-['Why_Us'] rtl:before:content-['لماذا_نحن'] before:absolute before:-bottom-4 before:hidden lg:before:block before:-z-10 before:text-charcoal/10 z-10 dark:before:text-white/20 before:text-[64px] before:font-bold before:text-main before:whitespace-nowrap">
                <Dumbbell className="rotate-45" /> {t("why-us-t")}
              </h2>
              <h2 className="font-bold text-[40px] uppercase font-baloo text-charcoal dark:text-grayExtra">
                <Trans
                  i18nKey="why-us.tittle"
                  components={{ strong: <span className="text-main" /> }}
                />
              </h2>
              <p className="text-lg font-rubik text-charcoal dark:text-grayExtra">
                {t("whyus-desc")}
              </p>
            </section>
            {/* Content */}
            <WhyUsContent />
          </div>

          {/* Images */}
          <div className="col-span-2 lg:col-span-1">
            <WhyUsImages />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUsSection;
