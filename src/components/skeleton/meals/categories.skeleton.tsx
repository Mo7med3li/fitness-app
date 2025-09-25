import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSkeleton = () => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-4 pb-3 hide-scroll">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-28 rounded-full bg-gray-300/20 dark:bg-gray-700/40" />
      ))}
    </div>
  );
};

export default CategoriesSkeleton;
