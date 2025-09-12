import { ModeToggle } from "@/components/common/mode-toggle";
import { ArrowRight, Dumbbell } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import i18n from "@/i18n";
import fetchMusclesGroup from "./api/fetch-muscle-group";
import { cn } from "@/lib/utils";
import WorkoutCard from "./components/workout-card";
interface MuscleGroup {
  _id: string;
  name: string;
}
interface MusclesResponse {
  message: string;
  musclesGroup: MuscleGroup[];
}
export default function HomePage() {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Queries
  const { data: allMusclesData, isLoading } = useQuery<MusclesResponse>({
    queryKey: ["muscleGroups", i18n.language],
    queryFn: fetchMusclesGroup,
  });
  return (
    <section className="w-full h-screen bg-[url('/assets/traidmails.jpg')] bg-cover bg-center">
      <ModeToggle />

      <div className="h-[400px] bg-grayExtra/80 backdrop-blur-3xl mt-6 flex flex-col items-center gap-5">
        <span className="relative flex items-center text-main font-semibold text-sm justify-center before:content-['WORKOUTS'] before:absolute before:text-[64px] before:font-bold before:text-white/10 before:flex before:justify-center before:bottom-8">
          <Dumbbell fill="orange" width={34} height={20} className="text-main rotate-45" />
          Fitness Class
        </span>
        <h2 className="font-bold text-[40px] text-charcoal w-[600px]">
          Transform Your Body with Our Dynamic <span className="text-main">Upcoming Workouts</span>
        </h2>
        {/* Muscles */}
        <div className="w-full py-1">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {isLoading
              ? // Skeletons
                Array.from({ length: 12 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-24 rounded-full" />
                ))
              : // Muscles
                allMusclesData?.musclesGroup.map((muscle: MuscleGroup) => (
                  <Button
                    key={muscle.name}
                    variant="outline"
                    onClick={() => {
                      setSearchParams({
                        muscle: muscle.name,
                        level: searchParams.get("level") || "",
                      });
                    }}
                    className={cn(
                      "h-10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      "hover:bg-main/10 hover:text-main border border-gray-200 dark:border-gray-700",
                      searchParams.get("muscle") === muscle.name
                        ? "bg-main text-white hover:bg-main/90 hover:text-white border-main"
                        : "text-gray-700 dark:text-gray-300",
                    )}
                  >
                    {muscle.name}
                  </Button>
                ))}
          </div>
        </div>

        <section className="w-full h-full grid grid-cols-3 gap-5 container">
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
        </section>
      </div>
    </section>
  );
}
