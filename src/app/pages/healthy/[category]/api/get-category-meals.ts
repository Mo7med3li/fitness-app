import { JSON_HEADER } from "@/lib/constants/api.const";
import axios from "axios";

export async function getCategoryMeals(category: string | undefined) {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, {
    headers: { ...JSON_HEADER },
  });
  return res.data;
}
