"use client";
import { useState } from "react";
// the image is lider by the fact that the tanslateX value is 100% the width of the image which is inhited from the parent. The Image is mapped to a number of elements all with the same width as the parent. On translating 100% the next element is shown and the   next element is displayed and the prev hidden because of the oveflow hidden property. translating is like scrrolling.

// the translating happens because the wid

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

  return (
    <div className="relative image-slider overflow-hidden">
      <div
        className="flex transition-transform duration-500 relative  "
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={`/imgs/${image}`}
            alt={image.split(".")[0]}
            className="object-cover object-top aspect-[3/2]"
          />
        ))}
      </div>
      <SliderButton onClick={handlePrevClick} icon="/icons/arrow-left.svg" />
      <SliderButton
        onClick={handleNextClick}
        icon="/icons/arrow-right.svg"
        direction="right-0"
      />
    </div>
  );
}

export default ImageSlider;

function SliderButton({
  onClick,
  icon,
  direction = "left-0",
}: {
  onClick: () => void;
  icon: string;
  direction?: string;
}) {
  return (
    <button
      className={`absolute top-1/2 ${direction} transform -translate-y-1/2 bg-neutral-800 bg-opacity-60 rounded-full border-none p-2 text-lg cursor-pointer opacity-0  slider-button`}
      onClick={onClick}
    >
      <img src={icon} alt="arrow right button" />
    </button>
  );
}

//TODO- how does the image able to tell what width to take up in the slider + how to increase on outside of those buttons
