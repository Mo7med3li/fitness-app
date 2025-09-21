import { z } from "zod";

export const useRegisterValuesSchema = () => {
  return z
    .object({
      firstName: z
        .string({ error: "First Name is required" })
        .min(1, "First Name is required")
        .min(2, "First Name must be more than two characters ")
        .max(10, "First Name must be at most 10 characters"),

      lastName: z
        .string({ error: "Last Name is required" })
        .min(1, "Last Name is required")
        .min(2, "Last Name must be more than two characters ")
        .max(10, "Last Name must be at most 10 characters"),

      email: z
        .string({ error: "Email is required" })
        .min(1, "Email is required")
        .email("Enter valid email"),

      password: z
        .string({ error: "Password is required" })
        .min(1, "Password is required")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/,
          "Password must be at least 8 characters include at least 1 upper, 1 lower, and number.",
        ),
      rePassword: z.string({ error: "Re-enter your password" }).min(1, "Re-enter your password"),
    })
    .refine((data) => data.password === data.rePassword, {
      message: "Passwords do not match",
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
