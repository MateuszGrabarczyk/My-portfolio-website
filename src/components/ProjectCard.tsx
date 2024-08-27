import Image from "next/image";
import { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";

interface ProjectCardProps {
  title: string;
  githubLink: string;
  imageSrc: string;
  description: string;
  tools: IconType[];
}

function ProjectCard({
  title,
  githubLink,
  imageSrc,
  description,
  tools,
}: ProjectCardProps) {
  return (
    <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-white dark:bg-gray-800 flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-teal-500/50 dark:hover:bg-gray-700">
      <div className="flex justify-center items-center gap-2 pt-6 pb-4">
        <h3 className="text-2xl font-medium text-gray-800 dark:text-white">
          {title}
        </h3>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="cursor-pointer text-2xl text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
        </a>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={`${title} Home Page`}
          className="rounded-lg shadow-lg object-cover w-full transition-transform duration-300 hover:scale-110"
          width={1000}
          height={400}
        />
      </div>
      <p className="pt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
      <h4 className="py-4 text-teal-600 dark:text-teal-400">Tools I used</h4>
      <div className="flex justify-center gap-6 text-4xl text-gray-800 dark:text-gray-300">
        {tools.map((ToolIcon, index) => (
          <ToolIcon
            key={index}
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
