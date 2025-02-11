import React, { useState } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col text-center justify-center">
      <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} className="mx-auto rounded-lg shadow-lg w-80 h-80 object-cover" />

      <div className="flex flex-row justify-center mt-4">
        <button onClick={prevImage} className="px-4 py-2 bg-gray-500 text-white rounded-l-lg">Previous</button>
        <button onClick={nextImage} className="px-4 py-2 bg-gray-500 text-white rounded-r-lg ml-2">Next</button>
      </div>
    </div>
  );
}
