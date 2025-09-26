import { useMutation } from "@tanstack/react-query";
import type { RegisterFields } from "@/lib/schemas/register.schema";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { RegisterSuccessResponse } from "@/lib/types/auth";

export default function useRegister() {
  // Translation
  const { t } = useTranslation();

  // Navigation
  const navigate = useNavigate();

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: RegisterFields) => {
      const res = await fetch("https://fitness.elevateegy.com/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      // If response failed or has an error
      const payload = await res.json();
      if ("error" in payload) throw new Error(payload.error);

      return payload as RegisterSuccessResponse;
    },

    // Success toast
    onSuccess: () => {
      toast(t("signin-toast"));
      navigate("/auth/login");
    },

    // Error toast
    onError: (error) => {
      toast(error.message);
    },
  });

  return { isPending, error, register: mutate };
}
