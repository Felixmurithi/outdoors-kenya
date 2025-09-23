import validateUrlAndPath from "@/app/_utils/validateUrlAndPath";

/**
 * Validates if a URL belongs to the specified platform.
 *
 * @param url - The URL to validate
 * @param platform - The platform name to validate against
 * @returns {boolean} Returns true if the URL is valid and matches the platform, false otherwise
 */

export default function validateSocialPlatform(
  url: string,
  platform: string
): boolean {
  try {
    const urlObj = new URL(url.trim());

    // For websites, allow any domain
    if (platform === "website") {
      return true;
    }
    const platformName =
      platform === "twitter"
        ? ["twitter", "x"]
        : platform === "facebook"
        ? ["facebook", "fb"]
        : [platform];

    // Check if the second-to-last part of the hostname matches the platform
    const hostnameParts = urlObj.hostname.toLowerCase().split(".");
    const secondLastPart = hostnameParts[hostnameParts.length - 2];

    return platformName.includes(secondLastPart);
  } catch (error) {
    return false;
  }
}
