import { Dumbbell } from "lucide-react";
import WOrkouts from "./../../../../public/assets/WOrkouts.webp";
import ClassesFilter from "../../../components/common/ClassesFilter";

export default function MsclesGroupPage() {
  return (
    <section className="relative bg-[#242424] font-baloo">
      {/* Workouts Background */}
      <div className="flex justify-center -m-5 relative">
        <img src={WOrkouts} alt="WOrkouts" className="" />
      </div>

      {/* content */}
      <div className="content p-10 ">
        {/* navigate classes , filter muscles */}
        <ClassesFilter />

        {/* Classes Explore */}
        <div>MsclesGroupPage</div>
      </div>
    </section>
  );
}
