import { UserContext } from "@/context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getUserData } from "../api/get-user-data.api";
import ChangeDialog from "./change-dialog";
import type { UserDataResponse } from "@/lib/constants/user-data";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";

const ChangeKyc = () => {
  // Context
  const userContext = useContext(UserContext);
  if (!userContext) return null;

  // Token
  const { userLogin } = userContext;

  // Query
  const { data } = useQuery<UserDataResponse>({
    queryKey: ["User data"],
    queryFn: async () => {
      return await getUserData(userLogin!);
    },
  });

  // Translation
  const { t } = useTranslation();

  // Loading
  if (!data)
    return (
      <section className="w-full grid grid-cols-3 gap-20">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="col-span-3 lg:col-span-1 flex flex-col items-center gap-4">
            <Skeleton className="h-10 w-32 rounded-lg shadow-2xl bg-white" />
            <Skeleton className="h-8 w-28 rounded-lg shadow-2xl bg-white" />
            <Skeleton className="h-16 w-full rounded-3xl shadow-2xl bg-main" />
          </div>
        ))}
      </section>
    );

  // Data
  const KYC = [
    {
      title: t("goal"),
      value:
        data.user.goal === "gain weight"
          ? t("gain-weight")
          : data.user.goal === "lose weight"
            ? t("lose-weight")
            : data.user.goal === "get fitter"
              ? t("get-fitter")
              : data.user.goal === "gain more flexible"
                ? t("gain-more-flexible")
                : t("learn-the-basic"),
      step: 1,
    },
    {
      title: t("level"),
      value:
        data.user.activityLevel === "level1"
          ? t("rookie")
          : data.user.activityLevel === "level2"
            ? t("beginner")
            : data.user.activityLevel === "level3"
              ? t("intermediate")
              : data.user.activityLevel === "level4"
                ? t("advanced")
                : t("true-beast"),
      step: 2,
    },
    {
      title: t("weight"),
      value: `${data.user.weight} ${t("kg")}`,
      step: 3,
    },
  ];

  return (
    <section className="w-full grid grid-cols-3 font-baloo gap-24">
      {KYC.map((item) => (
        <div key={item.title} className="col-span-3 lg:col-span-1 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold">{item.title}</h2>
          <ChangeDialog data={data} title={item.title} step={item.step} />
          <div className="bg-main flex w-full items-center justify-between rounded-3xl px-4 py-2 border border-charcoal dark:border-white">
            <h3 className="text-2xl font-extrabold">{item.value}</h3>
            <ChangeDialog data={data} title={item.title} step={item.step} icon />
          </div>
        </div>
      ))}
    </section>
  );
};
export default ChangeKyc;
