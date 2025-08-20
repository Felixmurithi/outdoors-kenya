/**
 * Validates a URL against one or more allowed domains
 * @param {string} url - The URL to validate
 * @param {string|string[]} [domains] - Optional. A single domain (e.g., 'twitter') or array of domains (e.g., ['twitter', 'facebook'])
 * @returns {true|string} Returns true if valid, or an error message string if invalid
 *
 * @example
 * // Basic usage (no domain validation)
 * validateUrl('https://example.com'); // true
 *
 * // With domain validation
 * validateUrl('https://twitter.com', 'twitter'); // true
 * validateUrl('https://facebook.com', 'facebook'); // true
 * validateUrl('https://instagram.com', ['instagram', 'facebook']); // true
 *
 * // Invalid examples
 * validateUrl('https://twitter.com', 'twitter.com'); // 'Invalid domain format: "twitter.com" - domain should be a single word without dots or commas'
 * validateUrl('https://twitter.com', 'twitter,com'); // 'Invalid domain format: "twitter,com" - domain should be a single word without dots or commas'
 * validateUrl('https://twitter.org', 'twitter'); // 'URL must be from one of the allowed domains'
 */
export default function validateUrl(
  url: string,
  domains?: string | string[]
): true | string {

  // Input validation
  if (!url || typeof url !== "string") {
    return "URL is required and must be a string";
  }

  const trimmedUrl = url.trim();

  // Protocol validation
  if (!trimmedUrl.startsWith("https://")) {
    return "URL must start with https://";
  }

  // Early check for empty domains array
  if (!domains || (Array.isArray(domains) && domains.length === 0)) {
    return "At least one valid domain must be provided";
  }

  // If no domains provided, just validate the URL format
  if (!domains) {
    try {
      new URL(trimmedUrl);
      return true;
    } catch (error) {
      return "Invalid URL format";
    }
  }

  try {
    const urlObj = new URL(trimmedUrl);

    // Validate and process domains
    const domainsArray = (Array.isArray(domains) ? domains : [domains]).map(
      (domain) => {
        // Check for non-string or empty domains
        if (typeof domain !== "string" || !domain.trim()) {
          return `Invalid domain: Domain must be a non-empty string`;
        }

        // Check for invalid characters
        const invalidChars = /[., ]/;
        if (invalidChars.test(domain)) {
          return `Invalid domain format: "${domain}" - domain should be a single word without dots or commas`;
        }

        // Convert domain to lowercase and trim whitespace
        return domain.trim().toLowerCase();
      }
    );

    // Check if any domain matches any part of the hostname
    if (
      !domainsArray.some((domain) =>
        urlObj.hostname
          .toLowerCase()
          .split(".")
          .some((part) => part === domain)
      )
    ) {
      return `URL must be from one of the allowed domains: ${domainsArray.join(
        ", "
      )}`;
    }

    return true;
  } catch (error) {
    return "Invalid URL format";
  }
}

/*
// INSIGHT: JavaScript URLs (javascript: protocol)
// - Format: 'javascript:code_here' - Executes JavaScript when activated
// - Common patterns:
//  - <a href="javascript:void(0)" onClick={handleClick}>Click</a>
//   - 'javascript:void(0)' - Returns undefined, prevents navigation
//   - 'javascript:someFunction()' - Executes a function
*/
