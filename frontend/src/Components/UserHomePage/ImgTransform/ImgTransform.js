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
    <div className="mt-16">
      {images.map((image, index) => (
        <img
          key={index}
          src={require(`${image}`)} // Corrected image path
          alt={`Slide ${index + 1}`}
          className={`absolute w-fit h-fit transition-opacity  duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
