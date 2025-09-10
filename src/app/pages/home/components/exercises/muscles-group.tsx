import { Button } from "@/components/ui/button";
import i18n from "@/i18n";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import fetchMusclesGroup from "../../api/exercises/fetch-muscles-group";

const MusclesGroup = () => {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Queries
  const { data: allMusclesData, isLoading } = useQuery<MusclesResponse>({
    queryKey: ["muscleGroups", i18n.language],
    queryFn: fetchMusclesGroup,
  });

  return (
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
  );
};

export default MusclesGroup;
