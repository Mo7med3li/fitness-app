import CategoriesSkeleton from "@/components/skeleton/meals/categories.skeleton";
import { JSON_HEADER } from "@/lib/constants/api.const";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MealsCategories = () => {
  // Params
  const params = useParams();

  // Queries
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
    return (
      <div className="lex items-center gap-2 overflow-x-auto whitespace-nowrap px-4 pb-3 hide-scroll">
        {Array.from({ length: 6 }).map((_, i) => (
          <CategoriesSkeleton key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-4 pb-3 hide-scroll">
      {data?.categories?.map((item: any) => (
        <Link
          key={item.idCategory}
          to={`/healthy/${item.strCategory}`}
          className={cn(
            "font-baloo font-semibold uppercase tracking-wide text-[18px] px-4 py-2 rounded-full dark:text-grayExtra text-charcoal border border-[#2d2d2d] dark:bg-charcoal/40 bg-grayExtra/40 backdrop-blur-[6px] shadow-sm transition-colors duration-200 hover:border-main hover:bg-main/20",
            params.category === item.strCategory &&
              "bg-main text-white border-main hover:bg-main -order-1",
          )}
        >
          {item.strCategory}
        </Link>
      ))}
    </div>
  );
};
export default MealsCategories;
