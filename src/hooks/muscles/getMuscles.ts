import type { Muscles } from "@/lib/types/muscles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTranslation } from "react-i18next"; // or your i18n solution

// Custom hook
export default function fetchMuscles() {
  const { i18n } = useTranslation(); // Get current language
  const currentLanguage = i18n.language; // 'ar' or 'en'

  const { data, isPending, error, isSuccess } = useQuery<Muscles>({
    queryKey: ['muscles', currentLanguage], // Include language in query key
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/muscles`, {
        headers: {
          'Accept-Language': currentLanguage, // ar or en
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    },
  });

  return {
    isPending,
    error,
    isSuccess,
    data
  };
}
