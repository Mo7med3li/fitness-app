import { Dumbbell } from "lucide-react";
import WOrkouts from "./../../../../public/assets/WOrkouts.webp";
import { ClassesExplore } from "./components/ClassesExplore";
import ClassesFilter from "../../../components/common/ClassesFilter";

export default function ClassessPage() {
  return (
    <section className="relative bg-[#242424] font-baloo">
      {/* Workouts Background */}
      <div className="flex justify-center -m-5 relative">
        <img src={WOrkouts} alt="WOrkouts" className="" />
        <p className="absolute bottom-0 text-main flex gap-2 whitespace-nowrap">
          <Dumbbell />
          Fitness Class
        </p>
      </div>

      {/* content */}
      <div className="content p-10 ">
        {/* header */}
        <div className="w-2/4 mx-auto">
          <h3 className="text-4xl font-bold text-center">
            Transform Your Body with Our Dynamic
            <span className="text-main">Upcoming Workouts</span>
          </h3>
        </div>
        {/* navigate classes , filter muscles */}
        <ClassesFilter />

        {/* Classes Explore */}
        <ClassesExplore />
      </div>
    </section>
  );
}
