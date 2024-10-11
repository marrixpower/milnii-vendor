import { string, z } from "zod";

const stringValidation = (field: string) =>
  z
    .string({ required_error: "This field is required" })
    .min(4, "This field is required")
    .refine((check) => /^[a-zA-Z0-9\s.,!?-_а-яА-ЯёЁїЇєЄіІґҐ]*$/.test(check), {
      message: `The ${field} should contain only valid characters`,
    });

export const createVendorSchema = z.object({
  name: stringValidation("name"),
  address: z.string().optional(),
  city: stringValidation("city"),
  postalCode: string().optional(),
  phone: z
    .string({ required_error: "This field is required" })
    .min(4, "This field is required")
    .refine((check) => /^[\d\s()+-]+$/.test(check), {
      message: "The phone number should only contain digits",
    }),
  category: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .refine((data) => data.label !== "" && data.value !== "", {
      message: "Category is required",
    }),
  booking: z.union(
    [
      z.string().url({ message: "Enter valid email or url" }),
      z.string().email({ message: "Enter valid email or url" }),
    ],
    {
      required_error: "Booking is required",
    }
  ),
  site: z.string({ required_error: "This field is required" }).url(),
  description: stringValidation("description"),
  price: z.number().optional(),
  coordinates: z.object({
    lng: z.number(),
    lat: z.number(),
  }),
  email: z
    .string()
    .email({ message: "Invalid Email" })
    .optional()
    .or(z.literal("")),
});

export const createUserSchema = z.object({
  name: stringValidation("name"),
  email: z
    .string({ required_error: "This field is required" })
    .email("Invalid e-mail")
    .min(4, "This field is required"),
  password: z
    .string({ required_error: "This field is required" })
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must include uppercase and lowercase letters, a number, and a special character."
    ),
  country: stringValidation("country"),
  countryCode: z.string(),
  city: stringValidation("city"),
  category: z.object({
    label: z.string(),
    value: z.string(),
  }),
  privacyPolicy: z.boolean().refine((value) => value === true, {
    message: "You must accept the Terms of Use and Privacy Policy",
  }),
});

export const loginUserSchema = z.object({
  email: z
    .string({ required_error: "This field is required" })
    .email("Invalid e-mail")
    .min(4, "This field is required"),
  password: z
    .string({ required_error: "This field is required" })
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must include uppercase and lowercase letters, a number, and a special character."
    ),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "This field is required" })
    .email("Invalid e-mail")
    .min(4, "This field is required"),
});

export const confirmationCodeSchema = z.object({
  code: z.string({ required_error: "This field is required" }),
  newPassword: z
    .string({ required_error: "This field is required" })
    .min(8, "New password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "New password must include uppercase and lowercase letters, a number, and a special character."
    ),
});
