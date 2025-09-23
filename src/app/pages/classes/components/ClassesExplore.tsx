//   Imports
// UI components + hooks + carousel + icons + routing + i18n + custom hooks
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useMemo, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMusclesWithImage from "@/hooks/muscles/useMusclesWithImage";
import type { MuscleGroupWithImage } from "@/lib/types/muscles";
import SkeletonCard from "@/components/ui/skeleton-card";

//  Component
export function ClassesExplore() {
  // ----------  Hooks ----------
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [_, setScrollSnaps] = useState<number[]>([]);
  const { data: muscleGroups, error, isLoading } = useMusclesWithImage();
  const { t } = useTranslation();

  // ----------  Pagination logic ----------
  // Split muscles into pages of 6 items each
  const pages = useMemo(() => {
    if (!muscleGroups || !Array.isArray(muscleGroups)) return [];

    const itemsPerPage = 6;
    const result: MuscleGroupWithImage[][] = [];

    for (let i = 0; i < muscleGroups.length; i += itemsPerPage) {
      result.push(muscleGroups.slice(i, i + itemsPerPage));
    }

    return result;
  }, [muscleGroups]);

  // ----------  Carousel scroll & selection ----------
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // ----------  Loading state ----------
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="embla w-full">
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2 gap-2 sm:gap-4 p-2 sm:p-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------  Error state ----------
  if (error) {
    return (
      <div className="w-full">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-500">
            Error: {error instanceof Error ? error.message : String(error)}
          </div>
        </div>
      </div>
    );
  }

  // ----------  Empty state ----------
  if (!muscleGroups || muscleGroups.length === 0) {
    return (
      <div className="w-full">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">{t("no-muscle-groups")}</div>
        </div>
      </div>
    );
  }

  // ----------  Main render ----------
  return (
    <div className="w-full container">
      {/* Carousel */}
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container flex">
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="embla__slide flex-[0_0_100%] min-w-0">
              {/* Responsive Grid: Mobile (2 cols x 3 rows) | Tablet+ (3 cols x 2 rows) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2 gap-2 sm:gap-4 p-2 sm:p-4">
                {page.map((muscle) => (
                  <Card key={muscle._id} className="overflow-hidden rounded-xl sm:rounded-2xl">
                    <CardContent className="relative aspect-square p-0">
                      {/*  Image or fallback letter */}
                      {muscle.image ? (
                        <img
                          src={muscle.image}
                          alt={muscle.name}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-500 dark:text-gray-400">
                            {muscle.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}

                      {/*  Bottom overlay with name + explore link - Responsive */}
                      <Link to={`/exercises/${muscle.name}`}>
                        <div className="absolute flex flex-col gap-1 sm:gap-2 lg:gap-3 bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-1.5 sm:p-2 lg:p-3">
                          {/* Responsive text sizing for mobile */}
                          <p className="text-xs sm:text-lg lg:text-xl font-bold font-baloo text-white leading-tight">
                            {muscle.name}
                          </p>
                          <p className="text-main flex gap-1 sm:gap-2 items-center text-[10px] sm:text-sm lg:text-base">
                            {t("explore")}
                            <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-main text-white p-0.5 sm:p-1" />
                          </p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}

                {/*  Fill empty grid slots if fewer than 6 items */}
                {page.length < 6 &&
                  Array.from({ length: 6 - page.length }).map((_, index) => (
                    <div key={`empty-${pageIndex}-${index}`} className="invisible" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Dot navigation - Responsive */}
      {pages.length > 1 && (
        <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? "bg-main w-4 sm:w-8"
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
