"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter(); // ✅ Use Next.js Router

  // ✅ Menu Items with Dynamic Routing
  const menuItems = [
    { name: "About Us", path: "/aboutus" },
    { name: "Our Work", path: "/Projects" },
    { name: "Recognization", path: "/recognizaion" },
    { name: "Contact us", path: "/Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* ✅ Top Bar */}
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

      {/* ✅ Main Navbar */}
      {/* ✅ Main Navbar */}
<nav className="flex items-center justify-between px-4 py-3 md:py-0 bg-white shadow-lg">
  {/* Left side: Logo */}
  <div className="flex items-center">
    <Link href="/">
      <div className="cursor-pointer">
        <img
          src="/Assets/Navbar/Full logo Dark.svg"
          width={250}
          height={150}
          alt="Logo"
          priority
        />
      </div>
    </Link>
  </div>

  {/* Right side: Menu and Buttons */}
  <div className="flex items-center gap-6">
    {/* Desktop Menu */}
    <div className="hidden md:flex gap-6 font-semibold">
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => router.push(item.path)}
          className={`hover:text-yellow-600 ${router.pathname === item.path ? "text-yellow-600 font-bold" : ""}`}
        >
          {item.name}
        </button>
      ))}
    </div>

    {/* Desktop Donate Button */}
    <div className="hidden md:flex">
      <button
        onClick={() => router.push("/donate")}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Donate Now
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">Open main menu</span>
      <div className="block w-5">
        <span className={`block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}`}></span>
        <span className={`block h-0.5 w-5 bg-current my-1 transition duration-500 ease-in-out ${open ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}`}></span>
      </div>
    </button>
  </div>

  {/* Mobile Menu Dropdown */}
  {open && (
    <div className="flex flex-col w-full h-auto md:hidden bg-white absolute top-20 left-0 right-0 shadow-lg z-50">
      <div className="flex flex-col items-center gap-4 py-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => {
              setOpen(false);
              router.push(item.path);
            }}
            className="text-gray-900 hover:text-yellow-600"
          >
            {item.name}
          </button>
        ))}
        <button
          onClick={() => {
            setOpen(false);
            router.push("/donate");
          }}
          className="bg-yellow-500 text-white px-4 py-2 rounded w-3/4"
        >
          Donate Now
        </button>
      </div>
    </div>
  )}
</nav>
    </header>
  );
}
