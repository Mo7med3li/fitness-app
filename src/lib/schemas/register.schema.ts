import { z } from "zod";

export const useRegisterSchema = () => {
  return z
    .object({
      firstName: z.string().min(2, "First name must be at least 2 characters"),
      lastName: z.string().min(2, "Last name must be at least 2 characters"),
      email: z.email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      rePassword: z.string().min(6, "Confirm password is required"),
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
    })
    .refine((data) => data.password === data.rePassword, {
      message: "Passwords do not match",
      path: ["repassword"],
    });
};

export type RegisterFieleds = z.infer<ReturnType<typeof useRegisterSchema>>;
