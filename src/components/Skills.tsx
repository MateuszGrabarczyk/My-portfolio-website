import React from "react";
import Skill from "@/components/Skill";
import { FaPython, FaCss3, FaHtml5, FaReact, FaDocker } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiTypescript, SiNextdotjs, SiFastapi } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";

export const skills = [
  {
    name: "Python",
    icon: (
      <FaPython
        size={40}
        className="text-blue-500 hover:animate-pulse"
        data-testid="python-icon"
      />
    ),
  },
  {
    name: "Django",
    icon: (
      <TbBrandDjango
        size={40}
        className="hover:animate-pulse"
        data-testid="django-icon"
      />
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <SiFastapi
        size={40}
        className="text-blue-500 hover:animate-pulse"
        data-testid="fastapi-icon"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        size={40}
        className="text-blue-600 hover:animate-pulse"
        data-testid="typescript-icon"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <FaReact
        size={40}
        className="text-blue-400 hover:animate-spin"
        data-testid="react-icon"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs
        size={40}
        className="text-black hover:animate-pulse"
        data-testid="next.js-icon"
      />
    ),
  },
  {
    name: "HTML5",
    icon: (
      <FaHtml5
        size={40}
        className="text-orange-500 hover:animate-pulse"
        data-testid="html5-icon"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3
        size={40}
        className="text-blue-600 hover:animate-pulse"
        data-testid="css3-icon"
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <FaDocker
        size={40}
        className="text-blue-400 hover:animate-pulse"
        data-testid="docker-icon"
      />
    ),
  },
  {
    name: "SQL",
    icon: (
      <BsFiletypeSql
        size={40}
        className="text-green-500 hover:animate-pulse"
        data-testid="sql-icon"
      />
    ),
  },
];

function Skills() {
  return (
    <section id="skills" className="my-12">
      <h3 className="text-3xl py-1 dark:text-white">Skills & Technologies</h3>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
