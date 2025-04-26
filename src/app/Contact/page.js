import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
export default function ContactSection() {
    return (
      <div>
      <section className="text-gray-600 body-font relative" style={{ fontFamily: 'BalooBhai2' }}>
      <div className="absolute inset-0 bg-gray-300">
  <iframe
    width="100%"
    height="100%"
    marginHeight="0"
    marginWidth="0"
    title="map"
    scrolling="no"
    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Surat&ie=UTF8&t=&z=14&iwloc=B&output=embed"
    style={{
      filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
    }}
  />
</div>

 
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Want to get Touch ? We&apos;d love to hear from you.</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Here how can you reach us.</p>
    </div>
  </div>
</section>
      <section className="bg-[#FDF8EC] py-10 px-4" style={{ fontFamily: 'BalooBhai2' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Corporate Partner */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <FaBuilding  className='h-8 w-8'/>
            </div>
            <h3 className="text-lg font-semibold mt-4">Want to be corporate partner?</h3>
            <p className="mt-2">Email us on</p>
            <p className="text-blue-600 font-medium">Corporate.partner@gmail.com</p>
            <p className="mt-2">Call or message on</p>
            <p className="font-medium">+91 98786 92847</p>
          </div>
  
          {/* Contact Us */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <IoIosContacts className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mt-4">CONTACT US</h3>
            <p className="mt-2">CALL ON</p>
            <p className="font-medium">+91 03958 39485</p>
            <p className="mt-2">EMAIL ON</p>
            <p className="text-blue-600 font-medium">CHHOTI SI MUSKAAN@GMAIL.COM</p>
          </div>
  
          {/* Social Media */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <MdConnectWithoutContact className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mt-4">SOCIAL MEDIA</h3>
            <p className="mt-2 font-medium">INSTAGRAM</p>
            <p className="text-blue-600">Chhotisimuskaan</p>
            <p className="mt-2 font-medium">FACEBOOK</p>
            <p className="text-blue-600">FACEBOOK ACCOUNT</p>
            <p className="mt-2 font-medium">X</p>
            <p className="text-blue-600">X Account</p>
            <p className="mt-2 font-medium">YOUTUBE</p>
            <p className="text-blue-600">YT Account</p>
          </div>
        </div>

      </section>
      </div>
    );
  }
  