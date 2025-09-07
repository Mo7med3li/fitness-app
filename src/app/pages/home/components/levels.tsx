import { Button } from "@/components/ui/button";
import { levels } from "@/lib/constants/exercises/exercise.const";
import { useSearchParams } from "react-router-dom";

const Levels = () => {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex gap-2 col-span-1 items-center justify-center">
      {levels.map((level) => (
        <Button
          key={level.id}
          onClick={() => {
            setSearchParams({
              level: level.name,
              muscle: searchParams.get("muscle")!,
            });
          }}
          className={`p-2 border-none text-grayLight rounded-3xl font-bold bg-transparent ${
            searchParams.get("level") === level.name
              ? "bg-main text-white"
              : " dark:hover:bg-gray-500"
          }`}
        >
          {level.name}
        </Button>
      ))}
    </div>
  );
};

export default Levels;
