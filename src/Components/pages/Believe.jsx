import React from 'react';
import Image from 'next/image';

export default function Believe() {
  const beliefs = [
    {
      title: "LET NO CHILD LEFT BEHIND",
      description:
        "We provide free education, learning materials, and mentorship to underprivileged children, helping them build a brighter future.",
      image: "/assets/homepage/what-we-believe/education.png",
    },
    {
      title: "EVERY CHILD DESERVES A FULL PLATE",
      description:
        "Ensuring that no child sleeps hungry, we provide nutritious meals to children in need, supporting their health and growth.",
      image: "/assets/homepage/what-we-believe/clothes.png",
    },
    {
      title: "ABILITY OVER DISABILITY",
      description:
        "We assist children with disabilities by providing special care, mobility aids, and educational resources to help them thrive.",
      image: "/assets/homepage/what-we-believe/vitamins.png",
    },
    {
      title: "DIGNITY IN EVERY THREAD",
      description:
        "We collect and distribute clothes, shoes, and daily essentials to children, ensuring they live with dignity and comfort.",
      image: "/assets/homepage/what-we-believe/disability.png",
    },
    {
      title: "EMPOWER TODAY, TRANSFORM TOMORROW",
      description:
        "Through workshops and training, we equip children with skills that empower them to become self-sufficient and independent.",
      image: "/assets/homepage/what-we-believe/books.png",
    },
  ];

  return (
    <section className="bg-[#FCF8F2] py-16 px-4" style={{ fontFamily: 'Baumans' }}>
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
                <div className="relative w-24 md:w-32 h-24 md:h-32">
                  <Image
                    src={belief.image}
                    alt={belief.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
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
                <div className="relative w-24 md:w-32 h-24 md:h-32">
                  <Image
                    src={belief.image}
                    alt={belief.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
