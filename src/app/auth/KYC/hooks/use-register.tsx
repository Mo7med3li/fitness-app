import { useMutation } from "@tanstack/react-query";
import type { RegisterFieleds } from "@/lib/schemas/register.schema";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  // Translation
  const { t } = useTranslation();

  // Navigation
  const navigate = useNavigate();

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: RegisterFieleds) => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      // If response failed or has an error
      if (!res.ok) throw new Error(t("something-went-wrong"));

      return res.json();
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
