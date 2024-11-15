"use server";

import fsp from "fs/promises";
import path from "path";

import readFileData from "@/app/_lib/readFileData";
import writeImage from "../_utils/writeImage";

// export async function signup(signupData) {
//   const dataFilePath = path.join(process.cwd(), "/app/_lib/users.json");

//   const jsonData = await readFileData("/app/_lib/users.json");

//   const writeData = {
//     ...jsonData,
//     [`${signupData.firstName}_${signupData.lastName}`.toLowerCase()]: {
//       signupData,
//     },
//   };

//   await fsp.writeFile(dataFilePath, JSON.stringify(writeData));

//   // return "user sign up success";
// }

export async function uploadEventImage(image) {
  //imag set at formData
  const imageFilename = await writeImage(
    image.get("image"),
    image.get("name"),
    "events"
  );

  const dataFilePath = path.join(process.cwd(), "/app/_lib/events.json");
  const jsonData = await readFileData("/app/_lib/users.json");

  const writeData = {
    ...jsonData,
    [user]: {
      ...jsonData[user],
      profileImage: `${imageFilename}`,
    },
  };

  await fsp.writeFile(dataFilePath, JSON.stringify(writeData));
}

export async function deleteEventImage({ profileImage, user }) {
  // console.log(profileImage);
  await fsp.rm(`./public/events/${profileImage}`, {
    recursive: true,
    force: true,
  });

  //fix json data
  const dataFilePath = path.join(process.cwd(), "/app/_lib/users.json");
  const jsonData = await readFileData("/app/_lib/users.json");

  const writeData = {
    ...jsonData,
    [user]: {
      ...jsonData[user],
      profileImage: "",
    },
  };

  await fsp.writeFile(dataFilePath, JSON.stringify(writeData));
}

export async function updateProfile(updateData) {
  const dataFilePath = path.join(process.cwd(), "/app/_lib/users.json");
  const jsonData = await readFileData("/app/_lib/users.json");

  const writeData = {
    ...jsonData,
    [updateData.user]: {
      ...jsonData[updateData.user],
      [updateData.item]: updateData.data,
    },
  };

  console.log(updateData);
  await fsp.writeFile(dataFilePath, JSON.stringify(writeData));
}
// in the node process

// TO DO
// u cant use num,bers as object keys
