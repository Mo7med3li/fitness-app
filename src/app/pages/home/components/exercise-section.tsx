import { Button } from "@/components/ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router";
import ExerciseCard from "./exercise-card";
import ExercisePlay from "./exercise-play";
import { cn } from "@/lib/utils";
import Levels from "./levels";
import MusclesGroup from "./muscles-group";
import { fetchExercises } from "../api/fetch-exercises";
import ExerciseSkeleton from "@/components/skeletons/exercises/exercises.skeleton";

const ExerciseSection = () => {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // States
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [isSelected, setIsSelected] = useState(false);

  // Queries
  const {
    data: payload,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<ExercisesResponse>({
    queryKey: [
      "Exercises",
      searchParams.get("level"),
      searchParams.get("muscle"),
    ],
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

    const allExercisesFlat =
      payload?.pages.flatMap((page) => page.exercises) ?? [];
    const levelParam = searchParams.get("level");
    const muscleParam = searchParams.get("muscle");
    const levelFilteres = allExercisesFlat.filter(
      (exercise) => exercise.difficulty_level === levelParam
    );
    let exercisesFiltered: Exercise[] = [];

    if (muscleParam === "fullBody" || muscleParam === "FullBody") {
      exercisesFiltered = levelFilteres.filter(
        (exercise) => exercise.body_region === "Full Body"
      );
    } else if (muscleParam === "Leg") {
      exercisesFiltered = levelFilteres.filter(
        (exercise) => exercise.body_region === "Lower Body"
      );
    } else if (muscleParam === "Stomach") {
      exercisesFiltered = levelFilteres.filter(
        (exercise) => exercise.body_region === "Midsection"
      );
    } else if (muscleParam === "Back") {
      exercisesFiltered = levelFilteres.filter(
        (exercise) => exercise.target_muscle_group === "Back"
      );
    } else if (muscleParam === "Shoulder") {
      exercisesFiltered = levelFilteres.filter(
        (exercise) => exercise.target_muscle_group === "Shoulders"
      );
    } else if (muscleParam === "Arm") {
      exercisesFiltered = levelFilteres.filter(
        (exercise) =>
          exercise.target_muscle_group === "Biceps" ||
          exercise.target_muscle_group === "Triceps" ||
          exercise.target_muscle_group === "Forearms"
      );
    } else if (muscleParam === "chest") {
      exercisesFiltered = levelFilteres.filter(
        (exercise) => exercise.target_muscle_group === "Chest"
      );
    }
    setAllExercises(exercisesFiltered);
  }

  // Effects
  useEffect(() => {
    if (!searchParams.get("level") || !searchParams.get("muscle")) {
      setSearchParams({
        level: "Beginner",
        muscle: "FullBody",
      });
    }
  }, []);

  useEffect(() => {
    handleExercise();
  }, [payload, searchParams]);

  return (
    <div className="container h-screen text-center space-y-6 font-rubik dark:bg-gray-700 p-4 backdrop-blur-xl bg-exercise-section linear-gradient(rgba(36,36,36,0.9), rgba(36,36,36,0.9)), url('./public/assets/traidmails.jpg') bg-cover">
      {/* Muscles Group */}
      <MusclesGroup />

      <section className="grid grid-cols-4 gap-14 ">
        <section
          id="scrollableDiv"
          className="flex flex-col gap-6 p-2 bg-[#242424]/50 shadow-xl border-2 rounded-[20px] pt-4 border-[#282828] h-[600px] overflow-y-auto w-[370px]"
        >
          {/* Levels */}
          <Levels />

          {/* Exercises */}
          <InfiniteScroll
            dataLength={
              payload?.pages.flatMap((page) => page.exercises).length ?? 0
            }
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
            ) : (
              allExercises.map((exercise: Exercise) => (
                <div
                  className={cn(
                    "bg-[#2A2A2A] hover:bg-[#333333] transition-colors duration-200 rounded-lg p-4 mb-3 group cursor-pointer"
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
          <Button
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage
              ? "Loading Exercises..."
              : !hasNextPage
              ? "No More Exercises"
              : "Load More Exercises"}
          </Button>
        </section>
        <ExercisePlay
          exercise={isSelected ? selectedExercise : allExercises[0]}
        />
      </section>
    </div>
  );
};

export default ExerciseSection;
