// I, VALIDATE URL
import { z } from "zod";

// Define Zod schema for URL validation with comprehensive rules
const urlSchema = z
  .string()
  .min(1, "URL is required")
  .trim()
  .url("Invalid URL format - must be a valid URL")
  .refine((url) => url.startsWith("https://"), {
    message: "URL must start with https://",
  })
  .refine(
    (url) => {
      try {
        const urlObj = new URL(url);
        return urlObj.pathname !== "/" && urlObj.pathname !== "";
      } catch {
        return false;
      }
    },
    {
      message: "URL must include a path (e.g., https://example.com/username)",
    }
  );

export default function validateUrl(url: string): true | string {
  const result = urlSchema.safeParse(url);
  if (!result.success) {
    return result.error.issues[0].message;
  }
  return true;
}

// II, VALIDATE PLATFORM
// Enhanced platform validation with better domain matching
export function validatePlatform(
  url: string, // The URL to validate
  domains: string | string[] // Single domain or array of allowed domains
): true | string {
  // First validate the URL itself
  const urlValidation = validateUrl(url);
  if (urlValidation !== true) {
    return urlValidation;
  }

  // Check if domains are provided and not empty
  if (!domains || (Array.isArray(domains) && domains.length === 0)) {
    return "At least one valid domain must be provided";
  }

  try {
    const urlObj = new URL(url.trim());

    // Process domains - convert single domain to array and validate each
    const domainsArray = (Array.isArray(domains) ? domains : [domains])
      .map((domain) => domain.trim().toLowerCase())
      .filter((domain) => domain.length > 0);

    if (domainsArray.length === 0) {
      return "At least one valid domain must be provided";
    }

    // Check if any part of the URL's hostname matches any allowed domain
    const hostnameParts = urlObj.hostname.toLowerCase().split(".");
    const isValid = domainsArray.some((domain) =>
      hostnameParts.some((part) => part === domain || part.includes(domain))
    );

    if (!isValid) {
      return `URL must be from one of the allowed domains: ${domainsArray.join(
        ", "
      )}`;
    }

    return true;
  } catch (error) {
    return "Invalid URL format";
  }
}

// III, PLATFORM DOMAIN MAPPING
// Map platforms to their expected domains for better validation
export const platformDomains: Record<string, string[]> = {
  facebook: ["facebook.com"],
  instagram: ["instagram.com"],
  x: ["twitter.com", "x.com"],
  linkedin: ["linkedin.com"],
  youtube: ["youtube.com", "youtu.be"],
  tiktok: ["tiktok.com"],
  website: [], // Allow any domain for websites
};

// IV, VALIDATE PLATFORM URL
// Enhanced validation that uses platform-specific domain mapping
export function validatePlatformUrl(
  url: string,
  platform: string
): true | string {
  // First validate basic URL format
  const urlValidation = validateUrl(url);
  if (urlValidation !== true) {
    return urlValidation;
  }

  // Get expected domains for the platform
  const expectedDomains = platformDomains[platform];
  if (!expectedDomains) {
    return `Unknown platform: ${platform}`;
  }

  // For websites, allow any domain
  if (platform === "website") {
    return true;
  }

  // Validate against platform-specific domains
  return validatePlatform(url, expectedDomains);
}
