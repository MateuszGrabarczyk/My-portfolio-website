import ProjectCard from "@/components/ProjectCard";
import { FaPython, FaCss3, FaHtml5, FaReact, FaDocker } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { IconType } from "react-icons";

type Project = {
  title: string;
  githubLink: string;
  imageSrc: string;
  description: string;
  tools: IconType[];
};

const projects: Project[] = [
  {
    title: "University Reviews App",
    githubLink:
      "https://github.com/MateuszGrabarczyk/UniRecka---University-Reviews-Web-App-in-Django?tab=readme-ov-file",
    imageSrc: "/university-app.png",
    description:
      "This project was done for my university thesis, therefore it's made in Polish. The goal of this application is to help future students choose university. Students can browse and search universities, browse the reviews that current students or people who graduated added. This application was made in Django framework. Bootstrap helped to create unified interface. The application is responsive to different screen sizes.",
    tools: [FaPython, FaHtml5, FaCss3, BsFiletypeSql],
  },
  {
    title: "Weather App",
    githubLink: "https://github.com/MateuszGrabarczyk/weather-app",
    imageSrc: "/weather-app.png",
    description:
      "This project helped me to learn how to work with APIs. I used React and Tailwind CSS to create this application. The application is responsive to different screen sizes. The user can search for the weather in any city in the world. The application uses OpenWeatherMap API to get the weather data.",
    tools: [SiTypescript, FaReact, SiNextdotjs],
  },
  {
    title: "Recipe API",
    githubLink: "https://github.com/MateuszGrabarczyk/recipe-app-api",
    imageSrc: "/recipe-app.png",
    description:
      "The goal of this project was to learn how to create RESTful APIs with Django Rest Framework. The application is a simple recipe API. The user can create, update, delete and view recipes. I also worked with Docker to containerize the application.",
    tools: [FaPython, FaDocker, BsFiletypeSql],
  },
];

function Projects() {
  return (
    <section>
      <h3 className="text-3xl py-1 dark:text-white">My Projects</h3>
      <div className="lg:flex gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            githubLink={project.githubLink}
            imageSrc={project.imageSrc}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
