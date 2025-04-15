"use server";
import crypto from "crypto";

type Cookies = {
  set: (
    key: string,
    value: string,
    options: {
      secure?: boolean;
      httpOnly?: boolean;
      sameSite?: "strict" | "lax";
      expires: number;
    }
  ) => void;
  get: (key: string) => { name: string; value: string } | undefined;
  delete: (key: string) => void;
};

const SESSION_EXPIRES_SECONDS = 60 * 60 * 24 * 7;
const COOKIE_SESSION_KEY = "session-id";

export function getUserFromSession(cookies: Pick<Cookies, "get">) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;

  if (sessionId == null) return null;

  //return user details using sessionId- return id and role
  return getUserBySessionId(sessionId);
}

export async function createUserSession(
  user: any,
  cookies: Pick<Cookies, "set">
) {
  const sessionId = crypto.randomBytes(512).toString("hex").normalize();

  setCookie(sessionId, cookies);

  console.log(sessionId);
}

function setCookie(sessionId: string, cookies: Pick<Cookies, "set">) {
  //expiration in cookies must b a timestamp not date string
  cookies.set(COOKIE_SESSION_KEY, sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    expires: Date.now() + SESSION_EXPIRES_SECONDS * 1000,
  });
}

function getUserBySessionId(sessionId: string) {
  // get user frtom DB based on the sessionId
  //u can verify sess
}

export async function removeUserFromSession(
  cookies: Pick<Cookies, "get" | "delete">
) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;

  if (sessionId == null) return null;

  // remove from DB // TODO

  cookies.delete(COOKIE_SESSION_KEY);
}

export async function updateUserSessionExpiration(
  cookies: Pick<Cookies, "get" | "set">
) {
  //get user using teh existing session ID
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;
  const user = getUserBySessionId(sessionId);
  if (user == null) return;

  // write session to DB

  //set session cookie
  setCookie(sessionId, cookies);
}
