// Interface
export interface MusclesGroup {
  _id: string;
  name: string;
  image?: string; // Optional field
}

// Component
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useMemo, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import useMuscles from "../../../../hooks/muscles/getMuscles";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ClassesExplore() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const { data: muscles } = useMuscles();
  const { t } = useTranslation();

  // Memoized helper function to get image path
  const getImagePath = useCallback((muscle: MusclesGroup): string => {
    if (muscle.image) {
      return `/assets/${muscle.image}`;
    }
    // Fallback: create image name from muscle name
    return `/assets/${muscle.name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
  }, []);

  // Memoized helper function to handle image errors
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    // Show the fallback circle with letter
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = "flex";
    }
  }, []);

  // Memoized pages calculation
  const pages = useMemo(() => {
    if (!muscles?.musclesGroup || !Array.isArray(muscles.musclesGroup)) {
      return [];
    }

    const itemsPerPage = 6;
    const result: MusclesGroup[][] = [];

    for (let i = 0; i < muscles.musclesGroup.length; i += itemsPerPage) {
      result.push(muscles.musclesGroup.slice(i, i + itemsPerPage));
    }

    return result;
  }, [muscles?.musclesGroup]);

  // Memoized scroll function
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  // Memoized select handler
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Effect for embla carousel setup
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Show loading state if data is not available yet
  if (!muscles || !muscles.musclesGroup || !Array.isArray(muscles.musclesGroup)) {
    return (
      <div className="w-full">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">{t("loading")}</div>
        </div>
      </div>
    );
  }

  // If no data available
  if (muscles.musclesGroup.length === 0) {
    return (
      <div className="w-full">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">{t("no-muscle-groups")}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container flex">
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="embla__slide flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
                {page.map((muscle) => (
                  <Card key={muscle._id} className="overflow-hidden rounded-2xl">
                    <CardContent className="relative aspect-square p-0">
                      {/* Background Image with lazy loading */}
                      <img
                        src={getImagePath(muscle)}
                        alt={muscle.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={handleImageError}
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Fallback background with letter (hidden by default) */}
                      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 items-center justify-center hidden">
                        <span className="text-4xl font-bold text-gray-500 dark:text-gray-400">
                          {muscle.name.charAt(0).toUpperCase()}
                        </span>
                      </div>

                      {/* Bottom text overlay rectangle */}
                      <Link to={`/exercises/${muscle.name}`}>
                        <div className="absolute flex flex-col gap-3 bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3">
                          <p className="text-xl font-bold font-baloo text-white">{muscle.name}</p>
                          <p className="text-main flex gap-2 items-center">
                            {t("explore")}
                            <MoveUpRight className="w-5 h-5 rounded-full bg-main text-white p-1" />
                          </p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}

                {/* Fill empty slots if page has less items than itemsPerPage */}
                {page.length < 6 &&
                  Array.from({ length: 6 - page.length }).map((_, index) => (
                    <div key={`empty-${pageIndex}-${index}`} className="invisible" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      {pages.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? "bg-main w-8"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to page ${index + 1} of ${pages.length}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
