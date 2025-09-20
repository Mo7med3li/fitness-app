import { useParams } from "react-router-dom";

const MealsPage = () => {
  // Search params
  const { meal } = useParams();

  return <h1>Meals {meal}</h1>;
};
export default MealsPage;
