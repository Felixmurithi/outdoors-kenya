import { z } from "zod";
import {
  PARK_TYPES,
  KENYA_COUNTIES,
  SOCIAL_PLATFORMS,
  CURRENCIES,
} from "@/app/_lib/constants";

// Schema for social media links
const socialLinkSchema = z
  .object({
    platform: z
      .string()
      .min(1, "Platform is required")
      .max(100, "Platform name is invalid")
      .refine((val) => SOCIAL_PLATFORMS.includes(val as any), {
        message: "Invalid platform",
      }),
    url: z
      .string()
      .url("Must be a valid URL")
      .max(255, "URL is too long")
      .refine((url) => url.startsWith("https://"), {
        message: "URL must start with https://",
      }),
  })
  .refine(
    (data) => {
      try {
        const domain = new URL(data.url).hostname;
        return domain.includes(data.platform);
      } catch {
        return false;
      }
    },
    {
      message: "URL must match the selected platform's domain",
      path: ["url"],
    }
  );

export const entranceFeesSchema = z.object({
  currency: z
    .array(z.enum(CURRENCIES))
    .length(3, "Exactly 3 currencies are required"),
  adult: z
    .array(z.number().min(1, "Amount cannot be less than 1"))
    .length(3, "Exactly 3 adult fees are required"),
  child: z
    .array(z.number().min(1, "Amount cannot be less than 1"))
    .length(3, "Exactly 3 child fees are required"),
});

// MAIN SCHEMA
export const basicDetailsSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name cannot exceed 100 characters"),
  county: z.enum(KENYA_COUNTIES, { message: "Please select a valid county" }),
  type: z.enum(PARK_TYPES, { message: "Please select a valid type" }),

  fees: entranceFeesSchema,
  socialLinks: z
    .array(socialLinkSchema)
    .max(
      SOCIAL_PLATFORMS.length,
      `Maximum of ${SOCIAL_PLATFORMS.length} social links allowed`
    ),
});
export type BasicDetailsFormValues = z.infer<typeof basicDetailsSchema>;
export type EntranceFeesFormValues = z.infer<typeof entranceFeesSchema>;  

// Re-export types for convenience

//INSIGHT-
// after struggling to find ways to customize the enum error message
