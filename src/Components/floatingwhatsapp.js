"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <a
        href="https://chat.whatsapp.com/your-whatsapp-community-link"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center transition-all duration-300
          bg-green-500 text-white rounded-full shadow-lg
          ${isScrolled ? "w-12 h-12" : "w-16 h-16"}`}
      >
        <FaWhatsapp className={`transition-all ${isScrolled ? "text-xl" : "text-2xl"}`} />
      </a>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bottom-1/2 translate-y-1/2 whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Join Community
      </span>
    </div>
  );
}
