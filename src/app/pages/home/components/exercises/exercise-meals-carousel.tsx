import { exercisesMeals } from "@/lib/constants/exercises/exercise.const";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";
import RecommendedMeals from "./recommended-meals";
const ExerciseMealsCarousel = () => {
  // Plugins
  const plugin = React.useRef(
    AutoScroll({
      startDelay: 200,
      stopOnInteraction: false,
      speed: 1.5,
      stopOnMouseEnter: true,
    }),
  );
  return (
    <Carousel
      className="w-full relative px-8"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {exercisesMeals.map((meal, index) => (
          <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-[51%]">
            <div className="p-3">
              <RecommendedMeals meal={meal.name} image={meal.image} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 h-8 w-8 -translate-y-1/2" />
      <CarouselNext className="absolute right-0 h-8 w-8 -translate-y-1/2" />
    </Carousel>
  );
};

export default ExerciseMealsCarousel;
