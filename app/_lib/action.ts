"use server";

import z from "zod";
import { basicDetailsSchema } from "./basicDetailsSchema";

export async function createUpdateBasicDetailsAction(basicDetails: any) {
  console.log(basicDetails);
  const result = basicDetailsSchema.safeParse(basicDetails);

  return result;

  if (!result.success) {
    // Handle validation errors
    const errorMessages = result?.error?.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("\n");

    console.log(errorMessages);

    return false;
  }
}

//INSIGHTS
