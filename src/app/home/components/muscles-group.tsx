import { Button } from "@/components/ui/button";
import { muscles } from "@/lib/constants/exercises/exercise.const";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";

const MusclesGroup = () => {
  // Search params
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex justify-center rounded-xl gap-9 ">
      {muscles.map((muscle) => (
        <Button
          key={muscle.name}
          onClick={() => {
            setSearchParams({
              muscle: muscle.name,
              level: searchParams.get("level")!,
            });
          }}
          className={cn(
            "p-2 border-none text-grayLight rounded-[20px] bg-transparent font-bold text-xl",
            searchParams.get("muscle") === muscle.name && "bg-main text-white"
          )}
        >
          {muscle.name}
        </Button>
      ))}
    </div>
  );
};

export default MusclesGroup;
