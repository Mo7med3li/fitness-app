import { Badge } from "@/components/ui/badge";
import { Play, Dumbbell, Target, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <div
      className={cn(
        "group border-b border-[#2D2D2D] rounded-lg p-4 hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer",
      )}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-base mb-2 leading-tight line-clamp-2">
            {exercise.exercise}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className="text-xs font-medium bg-main">{exercise.difficulty_level}</Badge>
            <Badge className="text-xs">
              <Target className="w-3 h-3 mr-1" />
              {exercise.target_muscle_group}
            </Badge>
          </div>

          <div className="space-y-2 text-sm text-gray-400">
            {exercise.primary_equipment && (
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-main" />
                <span>{exercise.primary_equipment}</span>
              </div>
            )}

            {exercise.movement_pattern_1 && (
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-main" />
                <span>{exercise.movement_pattern_1}</span>
              </div>
            )}
          </div>
        </div>

        <div className="w-8 h-8 bg-main rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-main/20 transition-colors">
          <Play className="w-4 h-4 text-charcoal" fill="#242424" />
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
