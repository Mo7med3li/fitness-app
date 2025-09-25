import { JSON_HEADER } from "@/lib/constants/api.const";
import axios from "axios";

export async function getMealDetails(mealId: string) {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`, {
    headers: { ...JSON_HEADER },
  });
  return res.data;
}
