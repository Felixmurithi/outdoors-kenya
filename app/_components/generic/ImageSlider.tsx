"use client";
import { useState } from "react";

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setTranslateX(translateX + 100); // adjust the value to match the width of the images
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setTranslateX(translateX - 100); // adjust the value to match the width of the images
  };

  // the image is lider by the fact that the tanslateX value is 100% the width of the image which is inhited from the parent. The Image is mapped to a number of elements all with the same width as the parent. On translating 100% the next element is shown and the   next element is displayed and the prev hidden because of the oveflow hidden property. translating is like scrrolling.

  return (
    <div className="relative w-80 overflow-hidden">
      <div
        className="flex transition-transform duration-500 relative"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={`/imgs/${image}`}
            alt={image.split(".")[0]}
            className="w-full aspect-video object-cover object-top"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border-none p-4 text-lg cursor-pointer"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border-none p-4 text-lg cursor-pointer"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
