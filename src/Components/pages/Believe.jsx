import React from 'react'

export default function Believe() {
    const beliefs = [
      {
        title: "LET NO CHILD LEFT BEHIND",
        description:
          "We provide free education, learning materials, and mentorship to underprivileged children, helping them build a brighter future.",
        image: "/images/education.png",
      },
      {
        title: "EVERY CHILD DESERVES A FULL PLATE",
        description:
          "Ensuring that no child sleeps hungry, we provide nutritious meals to children in need, supporting their health and growth.",
        image: "/images/food.png",
      },
      {
        title: "ABILITY OVER DISABILITY",
        description:
          "We assist children with disabilities by providing special care, mobility aids, and educational resources to help them thrive.",
        image: "/images/disability.png",
      },
      {
        title: "DIGNITY IN EVERY THREAD",
        description:
          "We collect and distribute clothes, shoes, and daily essentials to children, ensuring they live with dignity and comfort.",
        image: "/images/clothes.png",
      },
      {
        title: "EMPOWER TODAY, TRANSFORM TOMORROW",
        description:
          "Through workshops and training, we equip children with skills that empower them to become self-sufficient and independent.",
        image: "/images/workshops.png",
      },
    ];
  
    return (
      <section className="bg-[#FCF8F2] py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          What We Believe?
        </h2>
        
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              {/* Left Image (Odd: Left | Even: Right) */}
              {index % 2 === 0 ? (
                <>
                  <img src={belief.image} alt={belief.title} className="w-28 h-28 md:w-36 md:h-36" />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold">{belief.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{belief.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold">{belief.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{belief.description}</p>
                  </div>
                  <img src={belief.image} alt={belief.title} className="w-28 h-28 md:w-36 md:h-36" />
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }