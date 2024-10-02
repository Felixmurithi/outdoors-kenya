"use client";
import { useState } from "react";

export default function FileInput({ name, children, onChange }) {
  const [activeDrag, setActiveDrag] = useState(false);

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type == "dragover") {
      setActiveDrag(true);
      console.log("hi");
    } else if (e.type === "dragleave") {
      setActiveDrag(false);
      console.log("hello");
    }
  }

  return (
    <input
      type="file"
      name={name}
      placeholder={children}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onChange={onChange}
      className={`${
        activeDrag ? "bg-deepSeaweed-tints-500" : "bg-deepSeaweed-tints-200"
      } w-full h-full`}
    />
  );
}
