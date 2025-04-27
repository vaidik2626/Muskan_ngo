import React from "react";
import ValuesCarousel from "../../Components/valuecarousal";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div>
      <section className="bg-[#f4f2ed] py-12 px-4 md:px-12 lg:px-24 text-gray-800" style={{ fontFamily: 'BalooBhai2' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Our Story</h2>
        <p className="text-center text-lg mb-8 text-gray-600">Spreading Smiles, One Small Step at a Time</p>

        <p className="mb-6">
          In 2022, five friends were walking home one evening when they saw a group of street kids shivering in the cold, begging for food.
          It wasn’t the first time they had witnessed such a heartbreaking sight, but that night, something changed. Instead of just
          feeling bad, they decided to do something about it.
        </p>

        <p className="mb-6">
          They started setting aside a small portion of their earnings each month—not much, just whatever they could manage.
          With this money, they bought meals, school supplies, and even helped specially-abled children get the support they needed.
          Every time they saw a child smile because of their small effort, they felt a sense of purpose growing inside them.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-2">A Simple Idea That Can Change Lives</h3>
        <p className="mb-6">
          One day, as they reflected on their journey, a thought struck them—What if more people joined in?
          What if thousands of responsible individuals contributed just ₹25 a month? The amount was small,
          about the price of a pack of chips or a cigarette, but if 1,000 people came together,
          it could create a massive impact—providing food, education, and opportunities to countless
          underprivileged children and specially-abled students.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-2">From Small Beginnings to a Big Mission</h3>
        <p className="mb-6">
          Inspired by this vision, in 2024, they officially established <strong>Chhoti Si Muskaan</strong>,
          a name that represents the happiness that even the smallest act of kindness can bring.
          Their mission is simple: to create a community of people who believe that a small contribution,
          when multiplied by thousands, can change countless lives.
        </p>

        <p className="mb-6">
          Today, Chhoti Si Muskaan is not just an NGO; it&apos;s a movement. A movement where anyone can be a part
          of the change, where ₹25 is not just money—it’s hope, food, and education for a child in need.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-2">Join Us in Spreading Smiles!</h3>
        <p className="mb-4">
          Start with just ₹25 a month or contribute more if you can. Together, we can ensure that no child goes to
          bed hungry or misses an education.
        </p>

        
      </div>
    </section>
      <ValuesCarousel />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/Assets/Aboutus/ourmission.png"
          alt=""
          fill
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          priority
        />

        {/* Background Shape 1 */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        {/* Background Shape 2 */}
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ fontFamily: 'Bayon' }}>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Our Mission
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            At Chhoti Si Muskaan, our mission is to bring hope, education, and essentials to underprivileged and specially-abled children. We believe that small contributions can create a big impact, and by uniting people, we can transform lives.
            </p>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            We envision a future where no child goes hungry or misses out on education. Through collective efforts, we strive to educate, feed, and empower those in need. Even a small monthly contribution, starting at ₹25, can help us build a brighter tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
