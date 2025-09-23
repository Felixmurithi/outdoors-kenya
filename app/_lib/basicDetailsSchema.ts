import { z } from "zod";
import {
  PARK_TYPES,
  KENYA_COUNTIES,
  SOCIAL_PLATFORMS,
  CURRENCIES,
} from "@/app/_lib/constants";
import validateURLAndPath from "@/app/_utils/validateUrlAndPath";
import validateSocialPlatform from "@/app/_lib/validateSocialPlatform";
import { normalize } from "path";

// Schema for social media links
const socialLinkSchema = z
  .object({
    platform: z
      .string()
      .min(1, "Platform is required")
      .max(20, "Platform name is invalid")
      .transform((val) => val.toLowerCase())
      .refine((val) => SOCIAL_PLATFORMS.includes(val as any), {
        message: "Invalid platform",
      }),
    url: z
      .string()
      .normalize()
      .min(15, "Enter Valid URL")
      .max(100, "URL must be 100 characters or less")
      .transform((val) => val.toLowerCase())
      .refine(
        (url: string) => {
          const result = validateURLAndPath(url);
          return result === true;
        },
        {
          message: "URL must be valid and include a path",
        }
      ),
  })
  .refine(
    (data) => {
      if (data.platform === "website") return true;

      return validateSocialPlatform(data.url, data.platform);
    },
    {
      message: `URL must be from the selected platform`,
      path: ["platform"],
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
    .max(100, "Name cannot exceed 100 characters")
    .transform((val) => val.toLowerCase()),
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
