import { cn } from "@/lib/utils";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMuscles from "../../hooks/muscles/useGetMuscles";
import type { MuscleGroup } from "@/lib/types/muscles";

export default function ClassesFilter() {
  // hooks
  const { data, isSuccess, isPending } = useMuscles();
  const navigate = useNavigate();
  const { muscle: muscleParam } = useParams();
  const location = useLocation();
  const { t } = useTranslation();

  // Determine if we're on the full body route based on the current path
  const isFullBody =
    location.pathname === "/classess" || (!muscleParam && location.pathname.includes("/classess"));

  //  Make sure the data contains musclesGroup
  const muscles = isSuccess && data && "musclesGroup" in data ? data.musclesGroup : [];

  // isPending skeleton Ui - Responsive
  if (isPending) {
    return (
      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 px-2 sm:px-0">
        <ul className="flex justify-center gap-2 sm:gap-3 lg:gap-5 flex-wrap max-w-full">
          {[...Array(6)].map((_, idx) => (
            <li
              key={idx}
              className="h-6 w-16 sm:h-7 sm:w-18 lg:h-8 lg:w-20 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg sm:rounded-xl"
            ></li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 px-2 sm:px-4 lg:px-0">
      <ul className="flex justify-center gap-2 sm:gap-3 lg:gap-5 flex-wrap max-w-full">
        {/* Full Body Button - Responsive */}
        <li
          onClick={() => {
            navigate("/classess");
          }}
          className={cn(
            "rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-2 py-1 sm:py-1.5 lg:py-1 cursor-pointer transition-colors duration-200 hover:bg-main text-sm sm:text-base lg:text-base font-medium min-w-fit",
            isFullBody
              ? "bg-main text-white"
              : "bg-transparent text-black dark:text-white border border-gray-400 dark:border-gray-600",
          )}
        >
          <p className="whitespace-nowrap">{t("full-body")}</p>
        </li>

        {/* Muscle Groups - Responsive */}
        {muscles.map((muscle: MuscleGroup) => {
          const isSelected = muscleParam === muscle.name;

          return (
            <li
              key={muscle._id}
              className={cn(
                "rounded-lg sm:rounded-xl px-2 sm:px-3 lg:px-2 py-1 sm:py-1.5 lg:py-1 cursor-pointer transition-colors duration-200 hover:bg-main text-black dark:text-white border border-gray-400 dark:border-gray-600 text-sm sm:text-base lg:text-base font-medium min-w-fit",
                isSelected ? "bg-main text-white" : "bg-transparent",
              )}
            >
              <Link to={`/exercises/${muscle.name}`} className="whitespace-nowrap block">
                {muscle.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
