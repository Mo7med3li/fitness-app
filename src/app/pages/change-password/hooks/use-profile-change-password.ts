import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import type { ChangePasswordFields } from "@/lib/schemas/profile-change-password/change-password.schema";
import { useNavigate } from "react-router-dom";
import changePassword from "../api/change-password";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const useChangePassword = () => {
  // Navigate
  const navigate = useNavigate();

  //   Translation
  const { t } = useTranslation();
  const userContext = useContext(UserContext);
  if (!userContext) return null;
  const { userLogin } = userContext;

  //   Mutation
  const { mutate: changePasswordFn, isPending } = useMutation({
    mutationFn: async (values: ChangePasswordFields) => {
      return await changePassword(values, userLogin!);
    },
    onSuccess: () => {
      toast.success(t("change-password-successfully"));
      localStorage.removeItem("userToken");
      navigate("/auth/login");
    },
    onError: (error) => {
      toast.error(error?.message || t("something-went-wrong"));
    },
  });
  return { changePasswordFn, isPending };
};

export default useChangePassword;
