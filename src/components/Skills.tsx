import { FaPython, FaCss3, FaHtml5, FaReact, FaDocker } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiTypescript, SiNextdotjs, SiFastapi } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "Python",
    icon: <FaPython size={40} className="text-blue-500 hover:animate-pulse" />,
  },
  {
    name: "Django",
    icon: <TbBrandDjango size={40} className="hover:animate-bounce" />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={40} className="text-blue-500 hover:animate-pulse" />,
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript size={40} className="text-blue-600 hover:animate-bounce" />
    ),
  },
  {
    name: "React",
    icon: <FaReact size={40} className="text-blue-400 hover:animate-spin" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} className="text-black hover:animate-bounce" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={40} className="text-orange-500 hover:animate-pulse" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3 size={40} className="text-blue-600 hover:animate-bounce" />,
  },
  {
    name: "Docker",
    icon: <FaDocker size={40} className="text-blue-400 hover:animate-pulse" />,
  },
  {
    name: "SQL",
    icon: (
      <BsFiletypeSql
        size={40}
        className="text-green-500 hover:animate-bounce"
      />
    ),
  },
];

function Skills() {
  return (
    <section className="my-12">
      <h3 className="text-3xl py-1 dark:text-white">Skills & Technologies</h3>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-28 h-28 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          >
            {skill.icon}
            <span className="mt-2 text-sm dark:text-black">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
