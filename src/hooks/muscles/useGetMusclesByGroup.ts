import type { Muscle } from "@/lib/types/muscles";

export default async function getMusclesByGroupId(groupId: string): Promise<Muscle[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/musclesGroup/${groupId}`
  );
  const data = await response.json();
  return data.muscles || [];
}
