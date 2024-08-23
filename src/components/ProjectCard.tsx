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
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <div className="flex justify-center items-center gap-2 pt-8 pb-2">
        <h3 className="text-2xl font-medium">{title}</h3>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="cursor-pointer text-2xl" />
        </a>
      </div>
      <Image
        src={imageSrc}
        alt={`${title} Home Page`}
        className="rounded-lg shadow-lg object-cover w-full"
        width={1000}
        height={400}
      />
      <p className="pt-2">{description}</p>
      <h4 className="py-2 text-teal-600">Tools I used</h4>
      <div className="flex justify-center gap-4 text-4xl text-gray-800">
        {tools.map((ToolIcon, index) => (
          <ToolIcon key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
