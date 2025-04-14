"use server";

import { cookies } from "next/headers";

import { hashPassword, generateSalt } from "@/app/_lib/auth";
import { createUserSession } from "./session";

export async function signup() {
  const password = "password";
  const salt = generateSalt();

  //check if user exits

  //hashpassowrd

  const hashedPassword = await hashPassword(password, salt);

  //insert user , hash, salt

  //create userSession
  // const cookie = await cookies() ; //NEXT.JS 15 implementation
  // await createUserSession(user, cookie);
  return await createUserSession(hashPassword, cookies());
}

export async function signin(password) {
  // parse Schema
  // if false rewturn true
  //check if user exits
  // const user={ hashedPassword, salt }
  //check if password matches
  // verifyPassword(password, salt, hashedPassword);
  //create userSession
  // await createUserSession(user, cookies());
}
