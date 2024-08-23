"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import { FaPython, FaCss3, FaHtml5, FaReact, FaDocker } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Header />
          <div className="text-5xl flex justify-center gap-14 dark:text-gray-400">
            <a
              href="https://github.com/MateuszGrabarczyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateusz-grabarczyk-361851210/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
          </div>
          <div className="flex justify-center py-10">
            <Image
              src="/me.jpg"
              alt="Picture of the author"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </section>

        <Experience />

        <section>
          <h3 className="text-3xl py-1 dark:text-white">My projects</h3>
          <div className="lg:flex gap-10">
            <ProjectCard
              title="University Reviews App"
              githubLink="https://github.com/MateuszGrabarczyk/UniRecka---University-Reviews-Web-App-in-Django?tab=readme-ov-file"
              imageSrc="/university-app.png"
              description="This project was done for my university thesis, therefore it's made in Polish. The goal of this application is to help future students choose university. Students can browse and search universities, browse the reviews that current students or people who graduated added. This application was made in Django framework. Bootstrap helped to create unified interface. The application is responsive to different screen sizes."
              tools={[FaPython, FaHtml5, FaCss3, BsFiletypeSql]}
            />
            <ProjectCard
              title="Weather App"
              githubLink="https://github.com/MateuszGrabarczyk/weather-app"
              imageSrc="/weather-app.png"
              description="This project helped me to learn how to work with APIs. I used React and Tailwind CSS to create this application. The application is responsive to different screen sizes. The user can search for the weather in any city in the world. The application uses OpenWeatherMap API to get the weather data."
              tools={[SiTypescript, FaReact, TbBrandNextjs]}
            />
            <ProjectCard
              title="Recipe API"
              githubLink="https://github.com/MateuszGrabarczyk/recipe-app-api"
              imageSrc="/recipe-app.png"
              description="The goal of this project was to learn how to create RESTful APIs with Django Rest Framework. The application is a simple recipe API. The user can create, update, delete and view recipes. I also worked with Docker to containerize the application."
              tools={[FaPython, FaDocker, BsFiletypeSql]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
