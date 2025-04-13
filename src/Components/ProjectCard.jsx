import Image from "next/image";

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-lg">
      {/* Project Image */}
      <div className="md:w-1/3 w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Project Text */}
      <div className="md:w-2/3 w-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
