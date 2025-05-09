import { cookies } from "next/headers";
import { cache } from "react";
import { getUserFromSession } from "./session";

export const getCurrentUser = cache(async () => {
  return getUserFromSession(cookies());
});
