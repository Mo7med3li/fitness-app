//   Imports
// UI components + hooks + carousel + icons + routing + i18n + custom hooks
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useMemo, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Category } from "@/lib/types/meals";
import SkeletonCard from "@/components/ui/skeleton-card";
import useMeals from "@/hooks/meals/useGetMeals";

//  Component
export function MealsExplore() {
  // ----------  Hooks ----------
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [_, setScrollSnaps] = useState<number[]>([]);
  const { data: mealsData, error, isPending } = useMeals();
  const { t } = useTranslation();

  // Extract categories from data
  const categories = mealsData?.categories || [];

  // ----------  Responsive pagination logic ----------
  // Split categories based on screen size: mobile(2), tablet(4), desktop(6)
  const pages = useMemo(() => {
    if (!categories || !Array.isArray(categories)) return [];

    // Use 6 as base for server-side rendering, will be adjusted by CSS grid
    const itemsPerPage = 6;
    const result: Category[][] = [];

    for (let i = 0; i < categories.length; i += itemsPerPage) {
      result.push(categories.slice(i, i + itemsPerPage));
    }

    return result;
  }, [categories]);

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

  // ----------  Loading state - Enhanced responsive ----------
  if (isPending) {
    return (
      <div className="w-full px-2 sm:px-4">
        <div className="embla w-full overflow-hidden rounded-lg sm:rounded-xl">
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-3 sm:p-4 md:p-6">
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

  // ----------  Error state - Enhanced responsive ----------
  if (error) {
    return (
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-center items-center h-32 sm:h-48 md:h-64 bg-red-50 dark:bg-red-900/20 rounded-lg sm:rounded-xl">
          <div className="text-center p-4">
            <div className="text-base sm:text-lg md:text-xl text-red-600 dark:text-red-400 font-medium">
              {t("error-loading-meals")}
            </div>
            <div className="text-sm sm:text-base text-red-500 dark:text-red-300 mt-2">
              {error instanceof Error ? error.message : String(error)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------  Empty state - Enhanced responsive ----------
  if (!categories || categories.length === 0) {
    return (
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-center items-center h-32 sm:h-48 md:h-64 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl">
          <div className="text-center p-4">
            <div className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium">
              {t("no-meal-categories")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------  Main render - Enhanced responsive ----------
  return (
    <div className="w-full px-2 sm:px-4">
      {/* Carousel - Enhanced responsive container */}
      <div
        className="embla w-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm dark:shadow-none"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="embla__slide flex-[0_0_100%] min-w-0">
              {/* Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-3 sm:p-4 md:p-6">
                {page.map((category) => (
                  <Card
                    key={category.idCategory}
                    className="overflow-hidden rounded-xl sm:rounded-2xl hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-0 sm:border border-gray-200 dark:border-gray-700"
                  >
                    <CardContent className="relative aspect-square p-0 group">
                      {/*  Category Image - Enhanced responsive */}
                      <img
                        src={category.strCategoryThumb}
                        alt={category.strCategory}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' font-size='40' fill='%236b7280'%3E${category.strCategory.charAt(0)}%3C/text%3E%3C/svg%3E`;
                        }}
                      />

                      {/* Enhanced overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                      {/*  Bottom overlay with name + explore link - Enhanced responsive */}
                      <Link
                        to={`/meals/${category.strCategory.toLowerCase()}`}
                        className="absolute inset-0 flex flex-col justify-end"
                      >
                        <div className="relative z-10 p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-baloo text-white leading-tight">
                            {category.strCategory}
                          </p>

                          <div className="flex items-center gap-2 text-main group-hover:text-white transition-colors duration-300">
                            <span className="text-xs sm:text-sm md:text-base font-medium">
                              {t("explore")}
                            </span>
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-main group-hover:bg-white/20 text-white p-1 transition-all duration-300 group-hover:scale-110">
                              <MoveUpRight className="w-full h-full" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}

                {/*  Fill empty grid slots - Enhanced for responsive grid */}
                {page.length < 6 &&
                  Array.from({ length: 6 - page.length }).map((_, index) => (
                    <div
                      key={`empty-${pageIndex}-${index}`}
                      className="hidden lg:block invisible"
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  Dot navigation - Enhanced responsive */}
      {pages.length > 1 && (
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8 px-4">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                index === selectedIndex
                  ? "bg-main w-6 sm:w-8 md:w-10 h-2 sm:h-2.5 md:h-3 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3"
              }`}
              aria-label={`Go to page ${index + 1} of ${pages.length}`}
            />
          ))}
        </div>
      )}

      {/* Optional: Page indicator text */}
      {pages.length > 1 && (
        <div className="text-center mt-3 sm:mt-4">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {selectedIndex + 1} / {pages.length}
          </span>
        </div>
      )}
    </div>
  );
}
