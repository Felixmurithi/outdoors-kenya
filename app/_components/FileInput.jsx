"use client";
import { useRef, useState } from "react";

export default function FileInput({
  id,
  num,
  children,
  reactHooKFormValidate,
  handleChange,
  cover = false,
}) {
  const [activeDrag, setActiveDrag] = useState(false);
  const imageInput = useRef(null);

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type == "dragover") {
      setActiveDrag(true);
    } else if (e.type === "dragleave") {
      setActiveDrag(false);
    }
  }

  function onDrop(e) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const imgURL = URL.createObjectURL(e.dataTransfer.files[0]);
      // handleChange(num, e.dataTransfer.files[0]);

      console.log(imgURL);

      // setBlobs((imgUrls) => {
      //   return (imgUrls[i] = imgURL);
      // });
      //;
    }
  }
  function handleImageChange(e, i) {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      console.log(imgURL);
      // setBlobs((imgUrls) => {
      //   return (imgUrls[i] = imgURL);
      // });
      //;
    }
  }

  return (
    <div
      onClick={() => document.getElementById("selectImage").click()}
      className={`${
        activeDrag ? "bg-deepSeaweed-tints-500" : "bg-deepSeaweed-tints-200"
      } w-full h-full`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e)}
    >
      {cover ? (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <span>➕</span>
        </div>
      )}

      <input
        ref={imageInput}
        type="file"
        hidden
        // accept="image/*"
        id={"selectImage"}
        onChange={(e) => handleImageChange(e)}
        // onChange={(e) => handleChange(e, num)}
        // {...reactHooKFormValidate}
      />
      {children}
    </div>
  );
}
