import { z } from "zod";

// schema validation
export const ForgetPassSchema = z.object({
    email: z.string().email("Invalid email address")
});
