import React from 'react'

export default function Believe() {
    const beliefs = [
      {
        title: "LET NO CHILD LEFT BEHIND",
        description:
          "We provide free education, learning materials, and mentorship to underprivileged children, helping them build a brighter future.",
        image: "/Assets/homePage/What we believe/12234005_4886286 1.png",
      },
      {
        title: "EVERY CHILD DESERVES A FULL PLATE",
        description:
          "Ensuring that no child sleeps hungry, we provide nutritious meals to children in need, supporting their health and growth.",
        image: "/Assets/homePage/What we believe/13446891_5222040 1.png",
      },
      {
        title: "ABILITY OVER DISABILITY",
        description:
          "We assist children with disabilities by providing special care, mobility aids, and educational resources to help them thrive.",
        image: "/Assets/homePage/What we believe/13841487_2010.i402.018..Vitamins in products flat 4x1 1.png",
      },
      {
        title: "DIGNITY IN EVERY THREAD",
        description:
          "We collect and distribute clothes, shoes, and daily essentials to children, ensuring they live with dignity and comfort.",
        image: "/Assets/homePage/What we believe/23974703_6885296 1.png",
      },
      {
        title: "EMPOWER TODAY, TRANSFORM TOMORROW",
        description:
          "Through workshops and training, we equip children with skills that empower them to become self-sufficient and independent.",
        image: "/Assets/homePage/What we believe/44998885_9134164 1.png",
      },
    ];
  
    return (
      <section className="bg-[#FCF8F2] py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
        What We Believe?
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {beliefs.map((belief, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:p-10 rounded-2xl border-2 border-dotted border-gray-400"
          >
            {/* Optional dot at the top-right like in the image */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-gray-400 rounded-full" />

            {index % 2 === 0 ? (
              <>
                <img
                  src={belief.image}
                  alt={belief.title}
                  className="w-24 md:w-32 h-auto"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-extrabold mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {belief.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-extrabold mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {belief.description}
                  </p>
                </div>
                <img
                  src={belief.image}
                  alt={belief.title}
                  className="w-24 md:w-32 h-auto"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
    );
  }