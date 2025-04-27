"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    src: "/assets/homepage/hero-desktop.png",
    alt: "Slide 1",
  },
  {
    src: "/assets/homepage/how_can_you_help.png",
    alt: "Slide 2",
  },
  {
    src: "/assets/homepage/here_mobile.png",
    alt: "Slide 3",
  },
];

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-opacity-50" style={{ fontFamily: 'BalooBhai2' }}>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-20">
        <FaArrowLeft />
      </button>
      <button className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-20">
        <FaArrowRight />
      </button>
    </div>
  );
}
