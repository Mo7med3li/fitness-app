import React from "react";
import { type EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./emblaCarousel-Dot-Button";
import WorkoutCard from "./workout-card";
import { cn } from "@/lib/utils";

type PropType = {
  slides: { title: string; image: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  // Props
  const { slides, options } = props;

  // Hooks
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // Custom hooks
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="container overflow-hidden">
      {/* Carousel Slides */}
      <div ref={emblaRef}>
        <div className="flex gap-4 lg:flex-row flex-col p-3">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_33%]" key={index}>
              <WorkoutCard title={slide.title} image={slide.image} />
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className=" flex justify-center ">
        <div className=" lg:flex gap-2 py-1 hidden">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "bg-charcoal rounded-full size-[10px]",
                index === selectedIndex ? " bg-main w-[30px] h-[10px] rounded-xl" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
