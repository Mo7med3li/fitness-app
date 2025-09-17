import { JSON_HEADER } from "@/lib/constants/api.const";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const MealsCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Meals Category"],
    queryFn: async () => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`, {
        headers: {
          ...JSON_HEADER,
        },
      });
      return res.data;
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-wrap gap-2 bg-main">
      {data?.categories?.map((item: any) => (
        <Link
          key={item.idCategory}
          to={`/healthy/${item.strCategory}`}
          className="flex items-center gap-2"
        >
          {item.strCategory}
        </Link>
      ))}
    </div>
  );
};
export default MealsCategories;
