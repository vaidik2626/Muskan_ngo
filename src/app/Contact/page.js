import React from 'react';
import Image from 'next/image';
import { FaBuilding, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
import { MdConnectWithoutContact } from 'react-icons/md';

export default function ContactCorporateSection() {
  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/chhotisimuskaan_foundation/', linktext: 'Spread joy' },
    { name: 'Facebook', icon: <FaFacebookF />, link: 'https://facebook.com/FACEBOOK_ACCOUNT', linktext: 'Support change' },
    { name: 'X', icon: <FaTwitter />, link: 'https://twitter.com/X_Account', linktext: 'Amplify voices' },
    { name: 'YouTube', icon: <FaYoutube />, link: 'https://youtube.com/YT_Account', linktext: 'See impact' }
  ];

  return (
    <div>
      {/* Contact Form Section */}
      <section className="text-gray-600 body-font relative" style={{ fontFamily: 'BalooBhai2' }}>
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Ahmedabad&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Want to get Touch? We&apos;d love to hear from you.</p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none"></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-500 mt-3">Here&apos;s how you can reach us.</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-[#FDF8EC] py-10 px-4" style={{ fontFamily: 'BalooBhai2' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-18 h-18 bg-blue-500 rounded-full flex items-center justify-center">
              <FaBuilding className='h-9 w-9' />
            </div>
            <h3 className="text-lg font-semibold mt-4">Want to be corporate partner?</h3>
            <p className="mt-2">Email us on</p>
            <p className="text-blue-600 font-medium">Corporate.partner@gmail.com</p>
            <p className="mt-2">Call or message on</p>
            <p className="font-medium">+91 98786 92847</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-18 h-18 bg-blue-500 rounded-full flex items-center justify-center">
              <IoIosContacts className="w-9 h-9" />
            </div>
            <h3 className="text-lg font-semibold mt-4">CONTACT US</h3>
            <p className="mt-2">CALL ON</p>
            <p className="font-medium">+91 98786 92847</p>
            <p className="mt-2">EMAIL ON</p>
            <p className="text-blue-600 font-medium">CHOTISIMUSKAAN@GMAIL.COM</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-18 h-18 bg-blue-500 rounded-full flex items-center justify-center">
              <MdConnectWithoutContact className="w-9 h-9" />
            </div>
            <h3 className="text-lg font-semibold mt-4">SOCIAL MEDIA</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="transition rounded-xl text-center">
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-lg">{social.icon}</span>
                    <p className="font-medium">{social.name}</p>
                  </div>
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    {social.linktext}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black bg-opacity-60 text-white py-12 px-6 md:px-16">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Assets/ourwork/ourproject.png" // <-- Replace with actual background image path
          alt="Corporate Partner Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center" style={{ fontFamily: 'BalooBhai2' }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Become a Corporate Partner
        </h2>

        {/* Vertical Sections */}
        <div className="space-y-10 text-left">
          {/* Why Partner With Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Partner With Us?</h3>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              <li>Strengthen your CSR (Corporate Social Responsibility) initiatives</li>
              <li>Support education, health, and empowerment projects</li>
              <li>Build goodwill and brand reputation through social impact</li>
              <li>Engage your employees through volunteering and donation drives</li>
            </ul>
          </div>

          {/* How You Can Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">How You Can Help:</h3>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              <li>Financial sponsorships for our ongoing projects</li>
              <li>Donating goods, services, or infrastructure</li>
              <li>Co-hosting awareness campaigns or fundraising events</li>
              <li>Employee engagement programs and volunteering opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-cyan-600 text-white py-8 px-6 md:px-16" style={{ fontFamily: 'BalooBhai2' }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Text */}
        <p className="text-lg font-semibold">
          We’re always open to building customized partnership models based on your goals.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-base">
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="w-40 font-medium">Call us at</span>
            <span className="md:ml-2">: &nbsp; +91 92849 39484</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <span className="w-40 font-medium">Our socials</span>
            <span className="md:ml-2 flex items-center space-x-4">
              <span>: </span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-white/80 cursor-pointer" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-white/80 cursor-pointer" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-white/80 cursor-pointer" />
              </a>
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <span className="w-40 font-medium">Mail us at</span>
            <span className="md:ml-2">: &nbsp; Chhotismuskaan@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}