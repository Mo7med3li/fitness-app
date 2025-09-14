import { Dumbbell } from "lucide-react";
import EmblaCarousel from "./workout-carousel";
import type { EmblaOptionsType } from "embla-carousel";
import { workouts } from "@/lib/constants/workouts.const";

function WorkoutSection() {
  // Slides
  const workoutsSlides = workouts();

  // Options
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 3 };
  return (
    <section className="w-full lg:h-screen bg-[url('/assets/traidmails.jpg')] bg-cover bg-center py-6">
      <span className="relative flex lg:items-center text-main font-semibold text-sm lg:justify-center before:content-['WORKOUTS'] before:absolute before:hidden before:text-[64px] before:font-bold before:text-white/10 lg:before:flex before:justify-center before:bottom-4 items-start before:left-1/2 before:-translate-x-1/2 before:whitespace-nowrap mt-5">
        <Dumbbell fill="orange" width={34} height={20} className="text-main rotate-45" />
        Fitness Class
      </span>
      <div className="h-full lg:h-[380px] lg:bg-grayExtra/70 dark:lg:bg-charcoal/70 lg:backdrop-blur-3xl flex flex-col lg:items-center items-start gap-5">
        <h2 className="font-bold text-[40px] text-charcoal dark:text-grayExtra px-2 max-w-[600px] text-wrap">
          Transform Your Body with Our Dynamic <span className="text-main">Upcoming Workouts</span>
        </h2>
        {/*Muscles take from merge */}
        {/* <MuscleGroup /> */}

        {/* Carousel */}
        <section className="w-full ">
          <EmblaCarousel slides={workoutsSlides} options={OPTIONS} />
        </section>
      </div>
    </section>
  );
}
export default WorkoutSection;
