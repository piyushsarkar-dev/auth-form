import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(5, { error: "The Full Name MiniMum 5 Charcter" })
    .max(35, { error: "Full Name Must Be Under 35 Charcter" }),

  email: z.email({ error: "Invalid Email Adress" }),
  password: z
    .string()
    .min(8, { error: "The Password Should Be 8 Charcter" })
    .max(25, { error: "Must Be the Password Under 25 Charcter" }),
});

export type registerSchemaType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email({ error: "Invalid Email Adress" }),
  password: z
    .string()
    .min(8, { error: "The Password Should Be 8 Charcter" })
    .max(25, { error: "Must Be the Password Under 25 Charcter" }),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
