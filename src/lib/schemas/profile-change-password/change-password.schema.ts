import { useTranslation } from "react-i18next";
import z from "zod";

const useChangePasswordSchema = () => {
  // Translation
  const { t } = useTranslation();
  // Validation schema
  return z.object({
    password: z.string().min(8, t("auth.password-must-be-at-least-8-characters-long")),
    newPassword: z
      .string()
      .min(8, t("auth.password-must-be-at-least-8-characters-long"))
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        t("auth.regex-login"),
      ),
  });
};
export type ChangePasswordSchema = z.infer<ReturnType<typeof useChangePasswordSchema>>;
export default useChangePasswordSchema;
