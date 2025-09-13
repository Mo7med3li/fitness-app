import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkoutCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      className="relative h-[370px] bg-cover bg-center rounded-2xl bg-blend-screen border border-charcoal/15"
      style={{
        backgroundImage: `linear-gradient(#fff0, #FFFFFFCC), url(${image})`,
      }}
    >
      <div className="absolute top-[75%] bottom-0 left-0 right-0 bg-white/50 dark:bg-charcoal/50 flex flex-col justify-around p-3 space-y-2 backdrop-blur-[58px]">
        <h2 className="font-baloo font-bold text-xl tracking-[2px] text-charcoal dark:text-grayExtra uppercase">
          {title}
        </h2>
        <div className={"flex items-center gap-2 cursor-pointer"}>
          <Link to={`/classes`} className="text-main font-baloo font-medium text-lg">
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
