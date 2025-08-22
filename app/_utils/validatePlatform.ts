export function validatePlatform(
  url: string,
  domains: string | string[]
): true | string {
  if (!domains || (Array.isArray(domains) && domains.length === 0)) {
    return "At least one valid domain must be provided";
  }

  try {
    const urlObj = new URL(url.trim());

    const domainsArray = (Array.isArray(domains) ? domains : [domains]).map(
      (domain) => {
        if (typeof domain !== "string" || !domain.trim()) {
          return `Invalid domain: Domain must be a non-empty string`;
        }

        const invalidChars = /[., ]/;
        if (invalidChars.test(domain)) {
          return `Invalid domain format: "${domain}" - domain should be a single word without dots or commas`;
        }

        return domain.trim().toLowerCase();
      }
    );

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
