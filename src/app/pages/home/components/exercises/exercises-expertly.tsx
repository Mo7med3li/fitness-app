import i18n from "@/i18n";
import { MoveLeft, MoveRight } from "lucide-react";

const ExercisesExpertly = ({ tagline }: { tagline: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-9 rounded-full bg-main items-center justify-center flex border-2 border-grayLight">
        {i18n.language === "en" ? (
          <MoveRight className="text-grayLight" width={20} height={20} />
        ) : (
          <MoveLeft className="text-grayLight" width={20} height={20} />
        )}
      </div>
      <p className="text-grayLight font-baloo font-bold text-xl">{tagline}</p>
    </div>
  );
};

export default ExercisesExpertly;
