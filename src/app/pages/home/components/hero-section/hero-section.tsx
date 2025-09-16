import { Trans, useTranslation } from "react-i18next";
import Image from "../../../../../../public/assets/Theo Vance.png";
import Actions from "./actions";
import Stats from "./stats";

const HeroSection = () => {
  // Translation
  const { t } = useTranslation();
  return (
    <main className="w-full bg-center bg-[linear-gradient(#fff9,#fff9),url('/assets/auth-bg.webp')] dark:bg-[linear-gradient(#24242499,#24242499),url('/assets/auth-bg.webp')]">
      <section className="backdrop-blur-[86.1px]">
        {/* ToDo */}
        {/* <Navbar /> */}
        <section className="w-full grid grid-cols-3 container dark:text-white px-4">
          <div className="w-full lg:col-span-2 flex justify-center items-center col-span-3 ">
            <div className="space-y-16">
              <h2 className="font-bold text-6xl uppercase font-baloo">
                <Trans
                  i18nKey="hero-section.tittle"
                  components={{ strong: <span className="text-main" /> }}
                />
              </h2>

              {/* content */}
              <div className="relative px-4">
                <div className="before:block before:absolute before:start-0 before:w-1 before:h-full before:rounded-lg before:bg-main space-y-1">
                  <p className="text-lg font-rubik text-charcoal dark:text-white">{t("text-0")}</p>
                  <p className="text-lg font-rubik text-charcoal dark:text-white">{t("text-1")}</p>
                  <p className="text-lg font-rubik text-charcoal dark:text-white">{t("text-2")}</p>
                </div>
              </div>
              {/* Stats */}
              <Stats />
              {/* Actions */}
              <Actions />
            </div>
          </div>
          <div className="w-full col-span-3 lg:col-span-1">
            <img src={Image} alt="man" className="object-cover" />
          </div>
        </section>
        {/* ToDo */}
        {/* <ScrollingTicker /> */}
      </section>
    </main>
  );
};
export default HeroSection;
