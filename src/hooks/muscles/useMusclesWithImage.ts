import { useQuery } from "@tanstack/react-query";
import type { MuscleGroup, MuscleGroupWithImage } from "@/lib/types/muscles";
import useMuscles from "./useGetMuscles";
import getMusclesByGroupId from "./useGetMusclesByGroup";

// Fetch muscles by groupId from the API

// Custom hook: returns muscle groups enriched with an image
export default function useMusclesWithImage() {
  const { data: payload } = useMuscles();

  return useQuery<MuscleGroupWithImage[]>({
    queryKey: ["muscles-with-image"],
    enabled: !!payload, // Only run if base payload is available
    queryFn: async () => {
      if (!payload) return [];

      // Handle error case from base hook
      if ("error" in payload) {
        throw new Error(payload.error);
      }

      const groups = payload.musclesGroup;

      // Fetch image (from the first muscle) for each muscle group
      const groupsWithImages = await Promise.allSettled(
        groups.map(async (group: MuscleGroup) => {
          try {
            const muscles = await getMusclesByGroupId(group._id);
            const firstMuscle = muscles[0];
            return {
              _id: group._id,
              name: group.name,
              image: firstMuscle?.image || null,
            };
          } catch (error) {
            console.error(`Error fetching muscles for group ${group.name}:`, error);
            return {
              _id: group._id,
              name: group.name,
              image: null,
            };
          }
        })
      );

      // Keep only successful results
      return groupsWithImages
        .filter(
          (result): result is PromiseFulfilledResult<MuscleGroupWithImage> =>
            result.status === "fulfilled"
        )
        .map((result) => result.value);
    },
  });
}
