import type { ReactNode } from "react";

type MealInfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

const MealInfoItem = ({ icon, label, value }: MealInfoItemProps) => {
  return (
    <div className="h-16 bg-charcoal/50 border-[0.5px] border-grayLight p-3 rounded-[16px] flex items-center gap-2">
      {icon}
      <div className="min-w-0">
        <p className="text-[10px] text-gray-400">{label}</p>
        <p className="text-sm font-semibold text-grayExtra truncate">{value}</p>
      </div>
    </div>
  );
};

export default MealInfoItem;
