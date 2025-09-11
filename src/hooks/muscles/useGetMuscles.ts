import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";

import type { MuscleGroup } from "@/lib/types/muscles";

// Custom hook
export default function useMuscles() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; // 'ar' or 'en'

  const { data, isPending, error, isSuccess } = useQuery<
    APIResponse<SuccessfullResponse<{ musclesGroup: MuscleGroup[] }>>
  >({
    queryKey: ["muscles", currentLanguage], // Include language in query key
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/muscles`,
        {
          headers: {
            "Accept-Language": currentLanguage, // ar or en
            "Content-Type": "application/json",
          },
        }
      );
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
