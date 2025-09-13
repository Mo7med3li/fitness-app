import i18n from "@/i18n";
import { JSON_HEADER } from "@/lib/constants/api.const";
import axios from "axios";

export const fetchExercises = async (pageParam: number) => {
  const res = await axios.get<ExercisesResponse>(
    `https://fitness.elevateegy.com/api/v1/exercises?page=${pageParam}&limit=2000`,
    {
      headers: {
        ...JSON_HEADER,
        "Accept-Language": i18n.language,
      },
    },
  );
  return res.data;
};
