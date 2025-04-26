"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About Us", path: "/aboutus" },
    { name: "Our Work", path: "/Projects" },
    { name: "Recognition", path: "/recognition" },
    { name: "Contact Us", path: "/Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      
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
            <span className="hidden sm:block pr-2">+91 98989 98989</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <Link href="#"><FaFacebookF /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaLinkedinIn /></Link>
        </div>

      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-lg relative">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/navbar/full-logo-dark.svg" // make sure the path and casing are correct
              alt="Logo"
              width={150}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} className="hover:text-yellow-600">
              {item.name}
            </Link>
          ))}
          <Link href="/donate">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
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
        {open && (
          <div className="absolute top-20 left-0 right-0 bg-white flex flex-col items-center gap-6 py-6 shadow-lg md:hidden z-50">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} onClick={() => setOpen(false)} className="text-gray-900 hover:text-yellow-600">
                {item.name}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setOpen(false)}>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded w-3/4">
                Donate Now
              </button>
            </Link>
          </div>
        )}

      </nav>
    </header>
  );
}
