import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import fetchMusclesGroup from "../api/fetch-muscle-group";
import i18n from "@/i18n";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
interface MuscleGroup {
  _id: string;
  name: string;
}
interface MusclesResponse {
  message: string;
  musclesGroup: MuscleGroup[];
}
const MuscleGroup = () => {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Queries
  const { data: allMusclesData, isLoading } = useQuery<MusclesResponse>({
    queryKey: ["muscleGroups", i18n.language],
    queryFn: fetchMusclesGroup,
  });
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {isLoading
          ? // Skeletons
            Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))
          : // Muscles
            allMusclesData?.musclesGroup.map((muscle: MuscleGroup) => (
              <Link
                key={muscle.name}
                to={`/exercises/${muscle.name}`}
                onClick={() => {
                  setSearchParams({
                    muscle: muscle.name,
                    level: searchParams.get("level") || "",
                  });
                }}
                className={cn(
                  "px-4 py-1 rounded-full text-sm font-medium transition-all duration-200",
                  "hover:bg-main/10 hover:text-main border border-gray-200 dark:border-gray-700",
                  searchParams.get("muscle") === muscle.name
                    ? "bg-main text-white hover:bg-main/90 hover:text-white border-main"
                    : "text-gray-700 dark:text-gray-300",
                )}
              >
                {muscle.name}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default MuscleGroup;
