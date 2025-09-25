import { Button } from "@/components/ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, useSearchParams } from "react-router";
import ExerciseCard from "./exercise-card";
import ExercisePlay from "./exercise-play";
import { cn } from "@/lib/utils";
import Levels from "./levels";
import MusclesGroup from "./muscles-group";
import { fetchExercises } from "../api/fetch-exercises";
import ExerciseSkeleton from "@/components/skeletons/exercises/exercises.skeleton";
import ExercisesExpertly from "./exercises-expertly";
import ExerciseMealsCarousel from "./exercise-meals-carousel";
import { useTranslation } from "react-i18next";
import { getWorkoutTaglines } from "@/lib/constants/exercises/exercise.const";

const ExerciseSection = () => {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Params
  const { muscle } = useParams();

  // Translation
  const { t } = useTranslation();

  // States
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isSelected, setIsSelected] = useState(false);

  // Queries
  const {
    data: payload,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<ExercisesResponse>({
    queryKey: ["Exercises", searchParams.get("level")],
    queryFn: async ({ pageParam }) => {
      const res = await fetchExercises(pageParam as number);
      return res;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage === lastPage.totalPages) {
        return undefined;
      }
      return lastPage.currentPage + 1;
    },
  });

  // Functions
  function handleExercise() {
    if (!payload) return;
    const allExercisesFlat = payload?.pages.flatMap((page) => page.exercises) ?? [];
    const levelParam = searchParams.get("level");
    const levelFilters = allExercisesFlat.filter(
      (exercise) => exercise.difficulty_level === levelParam,
    );
    let exercisesFiltered = levelFilters.filter(
      (exercise) => exercise.target_muscle_group.toLowerCase() === muscle?.toLowerCase(),
    );
    setAllExercises(exercisesFiltered);
  }

  // Effects
  useEffect(() => {
    if (!searchParams.get("level")) {
      setSearchParams({
        level: t("beginner"),
      });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    handleExercise();
  }, [payload, searchParams, muscle]);

  // Variables
  const workoutTaglines = getWorkoutTaglines();

  return (
    <div className="container space-y-4 font-rubik p-2 backdrop-blur-[84px] bg-[linear-gradient(#24242499,#242424),url('/assets/traidmails.jpg')] bg-cover">
      {/* Muscles Group */}
      <MusclesGroup />
      <section className="grid grid-cols-4 gap-3 ">
        <section
          id="scrollableDiv"
          className="flex flex-col gap-4 lg:col-span-1 md:col-span-2 col-span-4 p-1 shadow-2xl border-2 rounded-[20px] pt-4 border-[#282828] h-[850px] overflow-y-auto backdrop-blur-[20px] hide-scroll"
        >
          {/* Levels */}
          <Levels />

          {/* Exercises */}
          <InfiniteScroll
            dataLength={payload?.pages.flatMap((page) => page.exercises).length ?? 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<ExerciseSkeleton />}
            scrollableTarget="scrollableDiv"
          >
            {isLoading ? (
              <div className="flex flex-col gap-6">
                <ExerciseSkeleton />
                <ExerciseSkeleton />
                <ExerciseSkeleton />
                <ExerciseSkeleton />
                <ExerciseSkeleton />
                <ExerciseSkeleton />
              </div>
            ) : allExercises.length === 0 ? (
              <h2 className="text-lg font-semibold mb-4 text-grayLight text-center">
                No Exercises Found for this muscle group and level.
              </h2>
            ) : (
              allExercises.map((exercise: Exercise) => (
                <div
                  className={cn(
                    " transition-colors duration-200 rounded-lg p-4 mb-3 group cursor-pointer",
                  )}
                  key={exercise._id}
                  onClick={() => {
                    setSelectedExercise(exercise);
                    setIsSelected(true);
                  }}
                >
                  <ExerciseCard exercise={exercise} />
                </div>
              ))
            )}
          </InfiniteScroll>
          {/* Load More Button */}
          <Button
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage || isLoading}
          >
            {isFetchingNextPage
              ? t("loading-exercises")
              : !hasNextPage
                ? t("no-more-exercises")
                : t("load-more-exercises")}
          </Button>
        </section>
        <section className="lg:col-span-3 md:col-span-2 col-span-4 space-y-6">
          {/*Exercise Play */}
          <section className="pe-10 space-y-6">
            <ExercisePlay exercise={isSelected ? selectedExercise : allExercises[0]} />
            {/* Exercises Expertly */}
            <section className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0">
              {workoutTaglines.map((tagline) => (
                <ExercisesExpertly key={tagline.text} tagline={tagline.text} />
              ))}
            </section>
          </section>
          <section className="space-y-4">
            <h2 className="font-medium text-3xl text-grayExtra">{t("recommendation-for-you")}</h2>
            {/* Recommended Meals */}
            <ExerciseMealsCarousel />
          </section>
        </section>
      </section>
    </div>
  );
};

export default ExerciseSection;
