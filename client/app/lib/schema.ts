import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid email!"),
  password: z.string().min(6, "password is required!"),
});

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid email!"),
    password: z.string().min(8, "password must be at least 8 characters"),
    name: z.string().min(3, "name must be at least 3 characters"),
    confirmPassword: z
      .string()
      .min(8, "password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match, please try again!!",
    path: ["confirmPassword"],
  });
