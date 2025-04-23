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
      <nav className="flex h-auto w-auto justify-between items-center bg-white shadow-lg py-3 md:h-16">
        <div className="flex w-full justify-between px-4">
<div className={`flex items-center font-semibold text-xl md:w-1/5 ${open ? "hidden" : "flex"}`}>
  <Link href="/">
    <div className="cursor-pointer">
      {/* Mobile Logo */}
      <Image
        src="/Assets/Navbar/Full logo Dark.svg" // <- Make sure this file exists
        width={250}
        height={150}
        priority
      />
    </div>
  </Link>
</div>


          {/* ✅ Mobile Menu */}
          {open && (
            <div className="flex flex-col w-full h-auto md:hidden bg-white absolute top-14 left-0 right-0 shadow-lg">
              <div className="flex flex-col items-center justify-between gap-2 py-4">
                {menuItems.map((item) => (
                  <button 
                    key={item.path} 
                    onClick={() => router.push(item.path)} 
                    className={`text-gray-900 hover:text-yellow-600 ${router.pathname === item.path ? "text-yellow-600 font-bold" : ""}`}>
                    {item.name}
                  </button>
                ))}
                <button className="bg-yellow-500 text-white px-4 py-2 rounded w-3/4">Donate Now</button>
              </div>
            </div>
          )}

          {/* ✅ Desktop Menu */}
          <div className="hidden w-3/5 items-center justify-evenly font-semibold md:flex">
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

          {/* ✅ Desktop Donate Button */}
          <div className="hidden w-1/5 items-center justify-evenly font-semibold md:flex">
            <button onClick={() => router.push("/donate")} className="bg-yellow-500 text-white px-4 py-2 rounded">Donate Now</button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white md:hidden" onClick={() => setOpen(!open)}>
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "opacity-0" : ""}`}></span>
              <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
