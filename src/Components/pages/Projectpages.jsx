import ProjectCard from "../ProjectCard";
import Image from "next/image";

export default function Projectspages() {
  const projects = [
    {
      title: "Educating Street Kids",
      description:
        "We believe education is the key to breaking the cycle of poverty. Our program helps street children get access to schools, essential learning materials, and mentorship. We also conduct evening classes and skill-based workshops to enhance their future opportunities.",
      image: "/images/education.jpg",
    },
    {
      title: "Meal Distribution",
      description:
        "Many children struggle with hunger daily. Our meal distribution program ensures that underprivileged kids receive nutritious meals regularly. We partner with local volunteers and food donors to provide breakfast and lunch drives in underserved areas.",
      image: "/images/meal.jpg",
    },
    {
      title: "Supporting Specially-Abled Students",
      description:
        "Every child deserves a chance to thrive, regardless of their physical abilities. We provide assistive devices, therapy support, and personalized educational aid to specially-abled children.",
      image: "/images/disability.jpg",
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-64 w-full">
        <Image
          src="/images/banner.jpg"
          alt="Our Projects"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          Our Projects
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
