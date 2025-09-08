import { MoveRight } from "lucide-react";

const ExercisesExpertly = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-9 rounded-full bg-main items-center justify-center flex border-2 border-grayLight">
        <MoveRight className="text-grayLight" width={20} height={20} />
      </div>
      <p className="text-grayLight font-baloo font-bold text-2xl">Expertly designed workout.</p>
    </div>
  );
};

export default ExercisesExpertly;
