import { Button } from "@/components/ui/button";
import i18n from "@/i18n";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";
import fetchLevels from "../api/fetch-levels";

const Levels = () => {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Translation
  const { t } = useTranslation();

  const { data: levelsData, isLoading: levelsLoading } = useQuery<LevelsResponse>({
    queryKey: ["levels", i18n.language],
    queryFn: fetchLevels,
  });

  return (
    <div className="w-full p-1">
      <h2 className="text-lg font-semibold mb-4 text-grayLight">{t("choose-your-level")}</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {levelsLoading
          ? // Skeletons
            Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))
          : // Levels
            levelsData?.levels.map((level: Level) => (
              <Button
                key={level._id}
                variant="outline"
                onClick={() => {
                  setSearchParams({
                    level: level.name,
                    muscle: searchParams.get("muscle") || "",
                  });
                }}
                className={cn(
                  "h-10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "hover:bg-main/10 hover:text-main border border-gray-200 dark:border-gray-700",
                  searchParams.get("level") === level.name
                    ? "bg-main text-white hover:bg-main/90 hover:text-white border-main"
                    : "text-gray-700 dark:text-gray-300",
                )}
              >
                {level.name}
              </Button>
            ))}
      </div>
    </div>
  );
};

export default Levels;
