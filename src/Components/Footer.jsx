import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 px-6" style={{ fontFamily: 'BalooBhai2' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Impact</li>
            <li>Our Story</li>
            <li>Our Mission</li>
            <li>Official Documents</li>
          </ul>
          <div className="mt-4 space-y-1 text-sm text-gray-300">
            <p>Email us at : ouremail@gmail.com</p>
            <p>Call us at : +91 98989 89898</p>
            <p>Chat with us : +91 82783 93837</p>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-4">Projects</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Education to street kids</li>
            <li>Food for needed</li>
            <li>Supporting specially abled</li>
          </ul>
        </div>

        {/* Contribute */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-4">Contribute</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Donate</li>
            <li>Corporate Partner</li>
          </ul>
        </div>

        {/* Join Us */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-4">Join us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Instagram</li>
            <li>FaceBook</li>
            <li>Youtube</li>
            <li>X</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer