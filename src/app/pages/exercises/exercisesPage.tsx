import WOrkouts from "./../../../../public/assets/WOrkouts.webp";
import ClassesFilter from "../../../components/common/ClassesFilter";
import { ModeToggle } from "@/components/common/mode-toggle";
import { TranslationToggle } from "@/components/common/translation-toggle";
export default function ExercisesPage() {
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
        <ModeToggle />
        <TranslationToggle />
      </div>
    </section>
  );
}
