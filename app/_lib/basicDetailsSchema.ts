import { z } from "zod";
import { PARK_TYPES } from "./constants";
import { KENYA_COUNTIES } from "./constants";

const socialPlatforms = [
  "facebook",
  "twitter",
  "instagram",
  "linkedin",
  "youtube",
  "tiktok",
] as const;

// Schema for social media links
const socialLinkSchema = z
  .object({
    platform: z.enum(socialPlatforms),
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

// Main form schema
export const basicDetailsSchema = z.object({
  // Basic info
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name cannot exceed 100 characters"),
  county: z.enum(KENYA_COUNTIES),
  type: z.enum(PARK_TYPES),
  // Social media
  socialLinks: z.array(socialLinkSchema),
});

// Type inference for TypeScript
export type BasicDetailsFormData = z.infer<typeof basicDetailsSchema>;
