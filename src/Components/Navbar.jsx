"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- Import this
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // <-- Current active route

  const menuItems = [
    { name: "About Us", path: "/aboutus" },
    { name: "Our Work", path: "/Projects" },
    { name: "Recognition", path: "/recognition" },
    { name: "Contact Us", path: "/Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md" style={{ fontFamily: 'BalooBhai2' }}>
      
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span className="hidden sm:block">ChhotiSiMuskaan@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span className="hidden sm:block pr-2">+91 98786 92847</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <Link href="#"><FaFacebookF /></Link>
          <Link href="https://www.instagram.com/chhotisimuskaan_foundation/"><FaInstagram /></Link>
          <Link href="#"><FaLinkedinIn /></Link>
        </div>

      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 py-1 bg-white relative">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-36 h-10 md:w-48 md:h-14">
              <Image
                src="/Assets/navbar/full-logo-dark.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`pb-1 transition-all duration-300 ${
                pathname === item.path 
                  ? "border-b-4 border-yellow-500 text-yellow-600" 
                  : "hover:border-b-4 hover:border-yellow-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/donate">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-all duration-300">
              Donate Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5">
            <span className={`block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}`} />
            <span className={`block h-0.5 w-5 bg-current my-1 transition duration-500 ease-in-out ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out bg-white flex flex-col items-center gap-6 py-2 shadow-lg md:hidden ${open ? "max-h-[500px]" : "max-h-0 py-0"}`}>
          {open && menuItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              onClick={() => setOpen(false)}
              className={`text-gray-900 hover:text-yellow-600 transition-colors duration-300 ${
                pathname === item.path ? "border-b-4 border-yellow-500 pb-1" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          {open && (
            <Link href="/donate" onClick={() => setOpen(false)}>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded w-2xl hover:bg-yellow-600 transition-all duration-300">
                Donate Now
              </button>
            </Link>
          )}
        </div>

      </nav>
    </header>
  );
}
