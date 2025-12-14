import { z } from "zod";

const emailSchema = z.string().email("Invalid email address");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(32, "Password must not exceed 32 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[@$!%*?&]/, "Password must contain at least one special character");

const textSchema = z.string().min(2, "This field is required");

const phoneSchema = z.string().min(6, "This field is required");

export {
  emailSchema,
  passwordSchema,
  textSchema,
  phoneSchema,
}; 