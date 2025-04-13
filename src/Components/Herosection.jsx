"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="w-full h-full" />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black bg-opacity-50">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          Partner with Us, Change Lives!
        </h2>
        <p className="text-white text-sm md:text-lg mt-2 max-w-2xl">
          Empower the future by supporting education, food, and care for underprivileged children.
          <br />
          Together, we can create lasting change.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base flex items-center gap-2">
          Join as corporate partner
        </button>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full">
        <FaArrowLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full">
        <FaArrowRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
    </div>
  );
}
