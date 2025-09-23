import { JSON_HEADER } from "@/lib/constants/api.const";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const useChangeKyc = () => {
  // Context
  const userContext = useContext(UserContext);
  if (!userContext) return null;

  //   Token
  const { userLogin } = userContext;

  //   Translation
  const { t } = useTranslation();

  //   Query client
  const queryClient = useQueryClient();

  //   Mutation
  const {
    mutate: changeKycFn,
    isPending,
    data: changedData,
  } = useMutation({
    mutationFn: async (values: KYCChangeFormProps) => {
      const res = await axios.put(
        `https://fitness.elevateegy.com/api/v1/auth/editProfile`,
        values,
        {
          headers: {
            ...JSON_HEADER,
            Authorization: `Bearer ${userLogin}`,
          },
        },
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success(t("kyc-changed-successfully"));
      queryClient.invalidateQueries({ queryKey: ["User data"] });
    },
    onError: () => {
      toast.error(t("something-went-wrong"));
    },
  });
  return { changeKycFn, isPending, changedData };
};

export default useChangeKyc;
