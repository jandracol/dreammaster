import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "./images/desktop/xsmas_poster.jpg",
  "./images/desktop/flying_pearl.jpg",
  // "./images/desktop/golden_Land_poster.jpg",
  "./images/desktop/dancing_air.jpg",
  "./images/desktop/alice_adventure.jpg",
  "./images/desktop/wrong_street.jpg",
  "./images/desktop/ballet_under_sea.jpg",
  // Add more image URLs as needed
];

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const moveLeft = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const moveRight = () => {
    setStartIndex((prevIndex) =>
      prevIndex < images.length - 4 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${startIndex * 25}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/4 flex-shrink-0">
            <div className="aspect-square">
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={moveLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={moveRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

export default ImageCarousel;
