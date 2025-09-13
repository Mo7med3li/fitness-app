import { ModeToggle } from "@/components/common/mode-toggle";
import { Dumbbell } from "lucide-react";
import EmblaCarousel from "./workout-carousel";
import type { EmblaOptionsType } from "embla-carousel";
import { workouts } from "@/lib/constants/workouts.const";
import MuscleGroup from "./muscle-group";

function WorkoutSection() {
  // Slides
  const workoutsSlides = workouts();

  // Options
  const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
  return (
    <section className="w-full lg:h-screen bg-[url('/assets/traidmails.jpg')] bg-cover bg-center">
      <ModeToggle />

      <div className="h-full lg:h-[380px] lg:bg-grayExtra/80 lg:backdrop-blur-3xl mt-5 flex flex-col items-center gap-5">
        <span className="relative flex items-center text-main  font-semibold text-sm justify-center before:content-['WORKOUTS'] before:absolute before:hidden before:text-[64px] before:font-bold before:text-white/10 lg:before:flex before:justify-center before:bottom-8">
          <Dumbbell fill="orange" width={34} height={20} className="text-main rotate-45" />
          Fitness Class
        </span>
        <h2 className="font-bold text-[40px] text-charcoal w-[600px]">
          Transform Your Body with Our Dynamic <span className="text-main">Upcoming Workouts</span>
        </h2>
        {/* Muscles */}
        <MuscleGroup />

        {/* Carousel */}
        <section className="w-full ">
          <EmblaCarousel slides={workoutsSlides} options={OPTIONS} />
        </section>
      </div>
    </section>
  );
}
export default WorkoutSection;
