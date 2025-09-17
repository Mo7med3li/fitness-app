import { cn } from "@/lib/utils";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMuscles from "../../../hooks/muscles/useGetMuscles";
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

  // isPending skeleton Ui
  if (isPending) {
    return (
      <div className="flex justify-center mt-10">
        <ul className="flex justify-center gap-5 flex-wrap">
          {[...Array(6)].map((_, idx) => (
            <li
              key={idx}
              className="h-8 w-20 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-xl"
            ></li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <ul className="flex justify-center gap-5 flex-wrap">
        <li
          onClick={() => {
            navigate("/classess");
          }}
          className={cn(
            "rounded-xl px-2 py-1 cursor-pointer transition-colors duration-200 hover:bg-main",
            isFullBody ? "bg-main text-white" : "bg-transparent text-white",
          )}
        >
          <p>{t("full-body")}</p>
        </li>

        {muscles.map((muscle: MuscleGroup) => {
          const isSelected = muscleParam === muscle.name;

          return (
            <li
              key={muscle._id}
              className={cn(
                "rounded-xl px-2 py-1 cursor-pointer transition-colors duration-200 hover:bg-main text-black dark:text-white border border-gray-400 dark:border-none",
                isSelected ? "bg-main" : "bg-transparent",
              )}
            >
              <Link to={`/exercises/${muscle.name}`}>{muscle.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
