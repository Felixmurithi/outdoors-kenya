"use server";

export async function addEvent(formData) {
  const img1 = formData.get("img-1");
  console.log(img1);
}

{
  /* <input type="file" />
    
    <script>
        // Get a reference to our file input
        const fileInput = document.querySelector('input[type="file"]');
    
        // Create a new File object
        const myFile = new File(['Hello World!'], 'myFile.txt', {
            type: 'text/plain',
            lastModified: new Date(),
        });
    
        // Now let's create a DataTransfer to get a FileList
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(myFile);
        fileInput.files = dataTransfer.files;
    </script> */
}

// import { NextResponse } from "next/server";
// import path from "path";
// import { writeFile } from "fs/promises";

// export const POST = async (req, res) => {
//   const formData = await req.formData();

//   const file = formData.get("file");
//   if (!file) {
//     return NextResponse.json({ error: "No files received." }, { status: 400 });
//   }

//   const buffer = Buffer.from(await file.arrayBuffer());
//   const filename = Date.now() + file.name.replaceAll(" ", "_");
//   console.log(filename);
//   try {
//     await writeFile(
//       path.join(process.cwd(), "public/uploads/" + filename),
//       buffer
//     );
//     return NextResponse.json({ Message: "Success", status: 201 });
//   } catch (error) {
//     console.log("Error occured ", error);
//     return NextResponse.json({ Message: "Failed", status: 500 });
//   }
// };
