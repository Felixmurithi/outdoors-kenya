"use server";

type BasicDetails = {
  name: string;
  county: string;
  locality: string;
  fees: number[][];
};

export async function createBasicDetailsAction(basicDetails: BasicDetails) {
  console.log(basicDetails);
}

//INSIGHTS
