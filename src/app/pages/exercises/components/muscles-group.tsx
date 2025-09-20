import i18n from "@/i18n";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import fetchMusclesGroup from "../api/fetch-muscles-group";
import { useTranslation } from "react-i18next";

const MusclesGroup = () => {
  // Search params
  const [searchParams] = useSearchParams();

  // Params
  const params = useParams();

  // Queries
  const { data: allMusclesData, isLoading } = useQuery<MusclesResponse>({
    queryKey: ["muscleGroups", i18n.language],
    queryFn: fetchMusclesGroup,
  });

  // Translation
  const { t } = useTranslation();

  return (
    <div className="w-full py-1">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            cn(
              "h-10 px-4 py-2 bg-white dark:bg-[#242424] rounded-full text-sm font-medium transition-all duration-200",
              "hover:bg-main/10 hover:text-main border border-gray-200 dark:border-gray-700",
              isActive
                ? "bg-main dark:bg-main hover:bg-main/90 hover:text-white border-main"
                : "text-gray-700 dark:text-gray-300",
            )
          }
        >
          Full Body
        </NavLink>
        {isLoading
          ? // Skeletons
            Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))
          : // Muscles
            allMusclesData?.musclesGroup
              .filter(
                (muscle, index, self) => index === self.findIndex((m) => m.name === muscle.name),
              )
              .map((muscle: MuscleGroup) => (
                <Link
                  key={muscle.name}
                  to={`/exercises/${muscle.name}?level=${searchParams.get("level") || t("beginner")}`}
                  className={cn(
                    "h-10 px-4 py-2 rounded-full bg-white dark:bg-[#242424] text-sm font-medium transition-all duration-200",
                    "hover:bg-main/10 hover:text-main border border-gray-200 dark:border-gray-700",
                    params.muscle?.toLowerCase() === muscle.name.toLowerCase()
                      ? "bg-main dark:bg-main text-white hover:bg-main/90 hover:text-white border-main"
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

export default MusclesGroup;
