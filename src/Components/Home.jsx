import React from 'react'
import Herosection from './Herosection'
import Believe from './pages/Believe'
import Gallery from './pages/Gallery'
const HomePage = () => {
  const stats = [
    {
      count: "200+",
      title: "Street Children",
      description: "Received books for education",
    },
    {
      count: "20+",
      title: "Handicapped Students",
      description: "Received essential supplies",
    },
    {
      count: "150+",
      title: "Street Children",
      description: "Provided with nutritious meals",
    },
  ];
  
    return (
    <div>
        <Herosection />
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Chhoti Si Muskaan is a non-profit organization dedicated to transforming the lives of street children and children with disabilities. Our mission is to provide education, nutritious food, medical support, and essential care to those in need. We believe that every child deserves a safe and nurturing environment where they can learn, grow, and thrive.</p>
            </div>
          </div>
        </section>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/Assets/homePage/how_can_you_help.png"
            alt="Donate"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How can you help us?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Starting from just <span className="font-semibold">₹20 a month</span> - the cost of two wafer packets
            or a cup of tea - you can help{" "}
            <span className="font-bold">
              provide food, education, and care for street children
            </span>{" "}
            and the <span className="font-bold">Differently Abled</span>. When thousands come together,
            small contributions create a big impact.
          </p>

          {/* Donate Button */}
          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium px-6 py-3 rounded-full shadow-md transition"
            >
              Donate to 20₹ movement now →
            </a>
          </div>
        </div>
      </div>
      <section className="bg-gray-700 text-white py-12 px-4 my-3 font-bayon">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-bayon">
        Together, We Are Making a Difference!
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-5xl font-bold text-lime-400">{stat.count}</p>
            <p className="text-cyan-400 text-xl font-semibold uppercase mt-2">{stat.title}</p>
            <p className="text-white font-medium mt-1">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
    <Believe />
    <Gallery />
    </div>
  )
}

export default HomePage