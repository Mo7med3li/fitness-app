import type { Muscles } from "@/lib/types/muscles";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import useMuscles from "../classes/Hooks/getMuscles";

export default function ClassesFilter() {
  // hooks
  const { data: muscles } = useMuscles();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Determine if we're on the full body route based on the current path
  const isFullBody =
    location.pathname === "/classess" || (!id && location.pathname.includes("/classess"));

  return (
    <>
      {/* navigate classes , filter muscles */}
      <div className="flex justify-center mt-10">
        <ul className="flex justify-center gap-5 flex-wrap">
          <li
            onClick={() => {
              navigate("/classess");
            }}
            className={cn(
              "rounded-xl px-2 py-1 cursor-pointer transition-colors duration-200 hover:bg-main",
              isFullBody ? "bg-main text-white" : "bg-transparent text-white",
            )}
          >
            <p>Full body</p>
          </li>

          {muscles?.musclesGroup.map((muscle) => {
            const isSelected = id === muscle._id;

            return (
              <li
                key={muscle._id}
                className={cn(
                  "rounded-xl px-2 py-1 cursor-pointer transition-colors duration-200 hover:bg-main",
                  isSelected ? "bg-main text-white" : "bg-transparent text-white",
                )}
              >
                <Link to={`/musclesGroup/${muscle._id}`}>{muscle.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
