import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "./img/img1 .png",
    "./img/img2.png",
    "./img/img3.png",
    "./img/img4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000); // Change image every 3 seconds (3000ms)

    return () => clearInterval(interval);
  }, [images.length]); // Include images.length as a dependency

  return (
    <div className="mt-10 p-10  ">
      {images.map((image, index) => (
        <div>
          <img
            key={index}
            src={require(`${image}`)} // Corrected image path
            alt={`Slide ${index + 1}`}
            className={`absolute right-0 w-full h-full transition-opacity py-10 px-2 rounded-lg duration-1000 ease-in ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
