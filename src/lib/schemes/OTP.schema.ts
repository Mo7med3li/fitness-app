import { z } from "zod";

// schema validation
export const OTPSchema = z.object({
    resetCode: z.string()
        .min(6, "Must be at least 6 characters")
        .max(6, "Must be at most 6 characters"),
});
