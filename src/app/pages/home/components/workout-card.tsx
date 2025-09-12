import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../../../../public/assets/group-workout.png";

const WorkoutCard = () => {
  return (
    <div
      className="relative h-[400px] bg-contain bg-center rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(#24242400, #FFFFFFCC), url(${Logo})`,
      }}
    >
      <div className="absolute top-[70%] bottom-0 left-0 right-0 bg-white/50 dark:bg-black/50 flex flex-col justify-around p-3 space-y-2 backdrop-blur-[58px]">
        <h2 className="font-baloo font-bold text-xl tracking-[2px] text-charcoal uppercase">
          Group Workout
        </h2>
        <div className={"flex items-center gap-2 cursor-pointer"}>
          <Link to={`/`} className="text-main font-baloo font-medium text-lg">
            read-more
          </Link>
          <div className="w-4 h-4 -rotate-45 rounded-full bg-main items-center justify-center flex">
            <ArrowRight width={9} height={9} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkoutCard;
