import React from 'react'
import Herosection from './Herosection'
import Believe from './pages/Believe'
import Gallery from './pages/Gallery'
const HomePage = () => {
    const stats = [
        { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
        { id: 2, name: 'Assets under holding', value: '$119 trillion' },
        { id: 3, name: 'New users annually', value: '46,000' },
      ]
  
    return (
    <div>
        <Herosection />
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <Believe />
    <Gallery />
    </div>
  )
}

export default HomePage