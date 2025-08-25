// I, VALIDATE URL

export default function validateUrl(url: string): true | string {
  if (!url || typeof url !== "string") {
    return "URL is required and must be a string";
  }

  const trimmedUrl = url.trim();

  if (!trimmedUrl.startsWith("https://")) {
    return "URL must start with https://";
  }

  try {
    const url = new URL(trimmedUrl);
    // Ensure URL has a path (not just domain)
    if (url.pathname === "/" || !url.pathname) {
      return "URL must include a path (e.g., https://example.com/username)";
    }
    return true;
  } catch (error) {
    return "Invalid URL format";
  }
}

// II, VALIDATE PLATFORM
// Validates if a URL belongs to one of the allowed domains
export function validatePlatform(
  url: string, // The URL to validate
  domains: string | string[] // Single domain or array of allowed domains
): true | string {
  // Returns true if valid, or an error message if invalid
  // Check if domains are provided and not empty
  if (!domains || (Array.isArray(domains) && domains.length === 0)) {
    return "At least one valid domain must be provided";
  }

  //I,  Create URL object and trim whitespace from the input URL
  const urlObj = new URL(url.trim());

  //II,  Process domains - convert single domain to array and validate each
  const domainsArray = (Array.isArray(domains) ? domains : [domains]).map(
    (domain) => {
      // a, Check if domain is a valid non-empty string
      if (!domain.trim()) {
        return `Invalid domain: Domain must be a non-empty string`;
      }

      // b, Check for invalid characters in domain
      const invalidChars = /[., ]/;
      if (invalidChars.test(domain)) {
        return `Invalid domain format: "${domain}" - domain should be a single word without dots or commas`;
      }

      // Return normalized domain (trimmed and lowercase)
      return domain.trim().toLowerCase();
    }
  );

  //III, Check if any part of the URL's hostname matches any allowed domain
  const isValid = domainsArray.some((domain) =>
    urlObj.hostname
      .toLowerCase()
      .split(".")
      .some((part) => part === domain)
  );

  if (!isValid) {
    return `URL must be from one of the allowed domains: ${domainsArray.join(
      ", "
    )}`;
  }

  return true;
}

/*
// INSIGHT: JavaScript URLs (javascript: protocol)
// - Format: 'javascript:code_here' - Executes JavaScript when activated
// - Common patterns:
//  - <a href="javascript:void(0)" onClick={handleClick}>Click</a>
//   - 'javascript:void(0)' - Returns undefined, prevents navigation
//   - 'javascript:someFunction()' - Executes a function
*/
