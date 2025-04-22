"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const values = [
  {
    title: "Compassion",
    description:
      "We believe in the power of kindness. Every child deserves love, care, and a chance to dream, and we strive to bring that into their lives.",
    image: "/Assets/Aboutus/compassion.png",
  },
  {
    title: "Community",
    description:
      "Change is not an individual effort—it’s a collective movement. By bringing people together, we create a network of support that uplifts children in need.",
    image: "/Assets/Aboutus/community.png",
  },
  {
    title: "Education for All",
    description:
      "Education is the key to breaking the cycle of poverty. We are committed to providing access to learning opportunities for a better future.",
    image: "/Assets/Aboutus/EducationForAll.png",
  },
  {
    title: "Compassion",
    description:
      "We believe in the power of kindness. Every child deserves love, care, and a chance to dream, and we strive to bring that into their lives.",
    image: "/Assets/Aboutus/compassion.png",
  },
  {
    title: "Community",
    description:
      "Change is not an individual effort—it’s a collective movement. By bringing people together, we create a network of support that uplifts children in need.",
    image: "/Assets/Aboutus/community.png",
  },
  {
    title: "Education for All",
    description:
      "Education is the key to breaking the cycle of poverty. We are committed to providing access to learning opportunities for a better future.",
    image: "/Assets/Aboutus/EducationForAll.png",
  },
];

export default function ValuesCarousel() {
  return (
    <div className="bg-[#3E7373] py-10">
      {/* Section Title */}
      <div className="text-center text-white mb-6">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <p className="text-lg">The Heart of Chhoti Si Muskaan</p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-6xl mx-auto"
      >
        {values.map((value, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-white rounded-lg shadow-lg p-6 h-60 flex items-end text-white"
              style={{
                backgroundImage: `url(${value.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" bg-opacity-60 p-4 rounded-lg w-full">
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="text-sm">{value.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
