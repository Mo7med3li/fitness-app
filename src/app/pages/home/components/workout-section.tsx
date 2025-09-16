import { Dumbbell } from "lucide-react";
import EmblaCarousel from "./workout-carousel";
import type { EmblaOptionsType } from "embla-carousel";
import { workouts } from "@/lib/constants/workouts.const";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function WorkoutSection() {
  // Slides
  const workoutsSlides = workouts();

  // States
  const [count, setCount] = useState(3);
  const [mobileSlides, setMobileSlides] = useState(workoutsSlides.slice(0, count));

  // Checks of screen size
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Translation
  const { t, i18n } = useTranslation();

  // Options
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 3,
    direction: i18n.language === "ar" ? "rtl" : "ltr",
  };

  return (
    <section className="w-full lg:h-screen bg-[url('/assets/traidmails.jpg')] bg-cover bg-center py-6">
      <span className="relative flex lg:items-center text-main font-semibold text-sm lg:justify-center before:content-['WORKOUTS'] before:absolute before:hidden before:text-[64px] before:font-bold before:text-white/10 lg:before:flex before:justify-center before:bottom-4 items-start before:left-1/2 before:-translate-x-1/2 before:whitespace-nowrap mt-5">
        <Dumbbell fill="orange" width={34} height={20} className="text-main rotate-45" />
        {t("fitness-class")}
      </span>
      <div className="h-full lg:h-[380px] lg:bg-grayExtra/70 dark:lg:bg-charcoal/70 lg:backdrop-blur-3xl flex flex-col lg:items-center items-start gap-5">
        <h2 className="font-bold text-[40px] text-charcoal dark:text-grayExtra px-2 max-w-[600px] text-wrap">
          Transform Your Body with Our Dynamic <span className="text-main">Upcoming Workouts</span>
        </h2>
        {/*Muscles take from merge */}
        {/* <MuscleGroup /> */}

        {/* Carousel */}
        <section className="w-full ">
          <EmblaCarousel slides={isMobile ? mobileSlides : workoutsSlides} options={OPTIONS} />
          {count < workoutsSlides.length && isMobile && (
            <div className="text-end container">
              <Button
                className="text-main bg-transparent hover:bg-transparent"
                onClick={() => {
                  if (count + 3 <= workoutsSlides.length) {
                    const newCount = count + 3;
                    setCount(newCount);
                    setMobileSlides(workoutsSlides.slice(0, newCount));
                  }
                }}
              >
                See More
              </Button>
            </div>
          )}{" "}
        </section>
      </div>
    </section>
  );
}
export default WorkoutSection;
