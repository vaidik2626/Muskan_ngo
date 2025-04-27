"use client";
import Image from "next/image";

const slide = {
  src: "/Assets/homePage/hero-desktop.png", // your static image
  alt: "Hero Image",
};

export default function HeroSection() {
  return (
    <div className="relative w-full h-[70vh] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Responsive Image */}
      <Image
        src={slide.src}
        alt={slide.alt}
        layout="fill"
        objectFit="cover"
        priority
        sizes="100vw"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/50" style={{ fontFamily: 'BalooBhai2' }}>
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
  );
}
