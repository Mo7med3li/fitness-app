import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { Meals } from "@/lib/types/meals";

// Custom hook
export default function useMeals() {
  const { data, isPending, error, isSuccess } = useQuery<Meals>({
    queryKey: ["Meals"],
    queryFn: async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php' );
      return response.data;
    },
  });

  return {
    isPending,
    error,
    isSuccess,
    data,
  };
}
