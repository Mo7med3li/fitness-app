import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const RecommendedMeals = ({ meal, image }: { meal: string; image: string }) => {
  // Translation
  const { t } = useTranslation();

  return (
    <div
      className="relative h-[370px] bg-cover bg-center bg-blend-screen rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(#171E2E00, #171E2ECC), url(${image})`,
      }}
    >
      <div className="absolute top-[70%] bottom-0 left-0 right-0 bg-charcoal/50 flex flex-col justify-around p-3 space-y-2 backdrop-blur-[40px]">
        <h2 className="font-baloo font-bold text-xl tracking-[2px] text-grayExtra uppercase">
          {meal}
        </h2>
        <div className={"flex items-center gap-2 cursor-pointer"}>
          <p className="text-main font-baloo font-medium text-lg">{t("read-more")}</p>
          <div className="w-4 h-4 -rotate-45 rounded-full bg-main items-center justify-center flex">
            <ArrowRight width={9} height={9} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecommendedMeals;
