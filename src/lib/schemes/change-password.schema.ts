import { z } from "zod";

// schema validation
export const ChangePasswordSchema = z
    .object({
        email: z.string().email().refine(
            (val) => !!val,
            { message: "Invalid email address" }
        ),
        newPassword: z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .regex(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            ),
        confirmPassword: z.string(),
    })
    .refine(
        (data) => data.newPassword === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    );
