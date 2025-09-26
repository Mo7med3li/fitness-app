import { JSON_HEADER } from "@/lib/constants/api.const";
import axios from "axios";

const getMealsCategories = async () => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`, {
    headers: {
      ...JSON_HEADER,
    },
  });
  return res.data;
};
export default getMealsCategories;
