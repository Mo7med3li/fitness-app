import { Skeleton } from "@/components/ui/skeleton";
import { Play } from "lucide-react";

export default function ExerciseSkeleton() {
  return (
    <div className="w-full rounded-2xl bg-slate-800/60 p-4 shadow-sm flex items-center justify-between gap-4">
      <div className="flex-1 min-w-0">
        {/* Title */}
        <div className="h-6 mb-3 w-3/4">
          <Skeleton className="h-6 w-full rounded-md" />
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-16 rounded-full" />
          <Skeleton className="h-7 w-20 rounded-full" />
        </div>
      </div>

      {/* Play button */}
      <div className="ml-4 shrink-0">
        <div className="relative">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Play className="h-5 w-5 opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
