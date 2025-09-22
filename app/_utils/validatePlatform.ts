import validateUrlAndPath from "@/app/_utils/validateUrlAndPath";

/**
 * Validates a URL and its path against a given platform name.
 *
 * @param url - The URL to validate.
 * @param platform - The platform name to validate against.
 * @return {true | string} Returns true if the URL is valid and the path contains the platform name, otherwise returns a string with the error message.
 */

export function validatePlatform(
  url: string, // The URL to validate
  platform: string // The platform name
): true | string {
  // First validate the URL itself
  const urlValidation = validateUrlAndPath(url);
  if (urlValidation !== true) {
    return urlValidation;
  }

  try {
    const urlObj = new URL(url.trim());

    // For websites, allow any domain
    if (platform === "website") {
      return true;
    }

    // Check if the second-to-last part of the hostname matches the platform
    const hostnameParts = urlObj.hostname.toLowerCase().split(".");
    const secondLastPart = hostnameParts[hostnameParts.length - 2];
    const isValid = platform == secondLastPart;

    if (!isValid) {
      return `URL must be from the ${platform} platform`;
    }

    return true;
  } catch (error) {
    return "Invalid URL format";
  }
}
