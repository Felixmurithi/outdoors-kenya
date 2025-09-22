// I, VALIDATE URL
export default function validateURL(url: string): true | string {
  try {
    const urlObj = new URL(url);
    if (urlObj.protocol !== "https:") {
      return "URL must start with https://";
    }
    if (urlObj.pathname === "/" || urlObj.pathname === "") {
      return "URL must include a path (e.g., https://example.com/username)";
    }
    return true;
  } catch {
    return "Invalid URL format";
  }
}
