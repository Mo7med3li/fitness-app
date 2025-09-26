import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useRegisterValuesSchema = () => {
  // Translation
  const { t } = useTranslation();

  return z
    .object({
      firstName: z
        .string({ error: t("first-name-required") })
        .min(1, t("first-name-required"))
        .min(2, t("first-name-error"))
        .max(10, t("first-name-error-max")),

      lastName: z
        .string({ error: t("last-name-required") })
        .min(1, t("last-name-required"))
        .min(2, t("last-name-erorr"))
        .max(10, t("last-name-max")),

      email: z
        .string({ error: t("email-required") })
        .min(1, t("email-required"))
        .email(t("enter-valid-email")),

      password: z
        .string({ error: t("password-required") })
        .min(1, t("password-required"))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/,
          t("password-regex"),
        ),
      rePassword: z.string({ error: t("repassword") }).min(1, t("repassword")),
    })
    .refine((data) => data.password === data.rePassword, {
      message: t("not-match"),
      path: ["rePassword"],
    });
};

export type RegisterValues = z.infer<ReturnType<typeof useRegisterValuesSchema>>;

export const useRegisterSchema = () => {
  return useRegisterValuesSchema().safeExtend({
    gender: z.enum(["male", "female"]),
    age: z.number().min(10).max(100),
    weight: z.number().min(20).max(400),
    height: z.number().min(50).max(400),
    goal: z.enum([
      "gain weight",
      "lose weight",
      "get fitter",
      "gain more flexible",
      "learn the basic",
    ]),
    activityLevel: z.enum(["level1", "level2", "level3", "level4", "level5"]),
  });
};

export type RegisterFields = z.infer<ReturnType<typeof useRegisterSchema>>;
