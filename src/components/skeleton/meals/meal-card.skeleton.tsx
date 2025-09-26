import { Skeleton } from "@/components/ui/skeleton";

const MealCardSkeleton = () => {
  return (
    <div className="relative h-[100px] bg-grayNeutral py-1 px-4 overflow-hidden rounded-xl  shadow-md flex border-b border-[#2d2d2d]">
      <div className="relative h-20 w-24">
        <Skeleton className="h-full w-full rounded-[20px]" />
      </div>

      <div className="flex-1 min-w-0 pl-4 pr-2 py-2 flex flex-col justify-center">
        <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
        <div className="mt-1 flex items-center gap-3">
          <Skeleton className="h-4 w-12 rounded-md" />
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-4 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default MealCardSkeleton;
