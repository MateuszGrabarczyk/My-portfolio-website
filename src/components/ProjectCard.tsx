import React from "react";
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
    <div className="text-center shadow-lg p-8 rounded-xl my-10 dark:bg-white flex-1 transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-center items-center gap-2 pt-6 pb-4">
        <h3 className="text-2xl font-medium">{title}</h3>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="cursor-pointer text-2xl hover:text-teal-600 transition-colors" />
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
      <p className="pt-4 text-gray-700 dark:text-gray-800 leading-relaxed">
        {description}
      </p>
      <h4 className="py-4 text-teal-600">Tools I used</h4>
      <div className="flex justify-center gap-6 text-4xl text-gray-800 dark:text-gray-600">
        {tools.map((ToolIcon, index) => (
          <ToolIcon
            key={index}
            className="hover:text-teal-600 transition-colors"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
