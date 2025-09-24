import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import type { ChangePasswordFields } from "@/lib/schemas/profile-change-password/change-password.schema";
import { useNavigate } from "react-router-dom";
import changePassword from "../api/change-password";

const useChangePassword = () => {
  // Navigate
  const navigate = useNavigate();

  //   Translation
  const { t } = useTranslation();

  //   Mutation
  const { mutate: changePasswordFn, isPending } = useMutation({
    mutationFn: async (values: ChangePasswordFields) => {
      return await changePassword(values);
    },
    onSuccess: () => {
      toast.success(t("change-password-successfully"));
      localStorage.removeItem("userLogin");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error?.message || t("something-went-wrong"));
    },
  });
  return { changePasswordFn, isPending };
};

export default useChangePassword;
