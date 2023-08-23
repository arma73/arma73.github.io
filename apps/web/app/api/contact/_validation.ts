import * as z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Email must be valid." }),
    message: z
        .string()
        .min(5, { message: "Message must be at least 5 characters" }),
});
