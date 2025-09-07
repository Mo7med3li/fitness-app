import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <div>
      {/* Exercise Name */}
      <h3 className="text-white font-medium text-base mb-3 leading-tight line-clamp-1">
        {exercise.exercise}
      </h3>

      {/* Tags and Play Button Container */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Badge
            className={`px-3 py-1 rounded-full text-xs font-medium bg-main text-white`}
          >
            {exercise.difficulty_level}
          </Badge>
          <Badge className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
            {exercise.target_muscle_group}
          </Badge>
          <Badge className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
            {exercise.body_region}
          </Badge>
        </div>

        {/* Play Button */}
        <div className="ml-3 flex-shrink-0">
          <div className="w-8 h-8 bg-main hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110 transform">
            <Play size={14} className="text-white fill-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
