import ProjectCard from "../../Components/ProjectCard";
import Image from "next/image";

export default function Projectspages() {
  const projects = [
    {
      title: "Educating Street Kids",
      description:
        "We believe education is the key to breaking the cycle of poverty. Our program helps street children get access to schools, essential learning materials, and mentorship. We also conduct evening classes and skill-based workshops to enhance their future opportunities.",
      image: "/Assets/ourwork/meal.png",
    },
    {
      title: "Meal Distribution",
      description:
        "Many children struggle with hunger daily. Our meal distribution program ensures that underprivileged kids receive nutritious meals regularly. We partner with local volunteers and food donors to provide breakfast and lunch drives in underserved areas.",
      image: "/Assets/ourwork/education.png",
    },
    {
      title: "Supporting Specially-Abled Students",
      description:
        "Every child deserves a chance to thrive, regardless of their physical abilities. We provide assistive devices, therapy support, and personalized educational aid to specially-abled children.",
      image: "/Assets/ourwork/special.png",
    },
  ];

  return (
    <div className="bg-gray-300" style={{ fontFamily: "BalooBhai2" }}>
      {/* Banner Section */}
      <div className="relative h-124 w-full">
        <Image
          src="/Assets/ourwork/ourproject.png"
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
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 bg-gray-300">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
