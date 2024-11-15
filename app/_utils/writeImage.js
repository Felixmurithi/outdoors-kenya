export default async function writeImage(imageFile, imageFilename, folder) {
  const ext = imageFile.name.split(".")[1];
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await fsp.writeFile(`./public${folder}/${imageFilename}.${ext}`, buffer);

  return `{folder}/${imageFilename}.${ext}`;
}
