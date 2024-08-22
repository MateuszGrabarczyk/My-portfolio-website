import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaPython, FaCss3, FaHtml5, FaReact, FaDocker } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-bold">CodeByMateuszGrabarczyk</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Mateusz Grabarczyk
          </h2>
          <h3 className="text-2xl py-2">Fullstack developer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            I'm interested in Backend Development with Python, but I also like
            Frontend technologies, especially React! I love to learn new things
            and I'm a big cycling fan. Currently I'm learning German as well!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-14 ">
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

      <section>
        <div>
          <h3 className="text-3xl py-1">Experience</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            I graduated from Silesian University of Technology in Gliwice. I
            studied Computer Science with a specialization in Web Development.
            During university I started my career as Web Developer and I'm still
            working in this field as it's my passion. My favourite frameworks
            are Django and React. If you want to learn more about my experience,
            check out my Linkedin!
          </p>
        </div>
      </section>
      <section>
        <h3 className="text-3xl py-1">My projects</h3>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <div className="flex justify-center items-center gap-2 pt-8 pb-2">
              <h3 className="text-2xl font-medium">University Reviews App</h3>
              <a
                href="https://github.com/MateuszGrabarczyk/UniRecka---University-Reviews-Web-App-in-Django?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="cursor-pointer text-2xl" />
              </a>
            </div>
            <Image
              src="/university-app.png"
              alt="University App Home Page"
              className="rounded-lg shadow-lg object-cover w-full"
              width={1000}
              height={400}
            />
            <p className="pt-2">
              This project was done for my university thesis, therefore it's
              made in Polish. The goal of this application is to help future
              students choose university. Students can browse and search
              universities, browse the reviews that current students or people
              who graduated added. This application was made in Django
              framework. Bootstrap helped to create unified interface. The
              application is responsive to different screen sizes.
            </p>
            <h4 className="py-2 text-teal-600">Tools I used</h4>
            <div className="flex justify-center gap-4 text-4xl text-gray-800">
              <FaPython title="Python" />
              <FaHtml5 title="HTML5" />
              <FaCss3 title="CSS3" />
              <BsFiletypeSql title="SQL" />
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <div className="flex justify-center items-center gap-2 pt-8 pb-2">
              <h3 className="text-2xl font-medium">Weather App</h3>
              <a
                href="https://github.com/MateuszGrabarczyk/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="cursor-pointer text-2xl" />
              </a>
            </div>
            <Image
              src="/weather-app.png"
              alt="Weather App Home Page"
              className="rounded-lg shadow-lg object-cover w-full"
              width={1000}
              height={400}
            />
            <p className="pt-2">
              This project helped me to learn how to work with APIs. I used
              React and Tailwind CSS to create this application. The application
              is responsive to different screen sizes. The user can search for
              the weather in any city in the world. The application uses
              OpenWeatherMap API to get the weather data.
            </p>
            <h4 className="py-2 text-teal-600">Tools I used</h4>
            <div className="flex justify-center gap-4 text-4xl text-gray-800">
              <SiTypescript title="TypeScript" />
              <FaReact title="React" />
              <TbBrandNextjs title="NextJS" />
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <div className="flex justify-center items-center gap-2 pt-8 pb-2">
              <h3 className="text-2xl font-medium">Recipe API</h3>
              <a
                href="https://github.com/MateuszGrabarczyk/recipe-app-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="cursor-pointer text-2xl" />
              </a>
            </div>
            <Image
              src="/recipe-app.png"
              alt="Recipe API"
              className="rounded-lg shadow-lg object-cover w-full"
              width={1000}
              height={400}
            />
            <p className="pt-2">
              The goal of this project was to learn how to create RESTful APIs
              with Django Rest Framework. The application is a simple recipe
              API. The user can create, update, delete and view recipes. I also
              worked with Docker to containerize the application.
            </p>
            <h4 className="py-2 text-teal-600">Tools I used</h4>
            <div className="flex justify-center gap-4 text-4xl text-gray-800">
              <FaPython title="Python" />
              <FaDocker title="Docker" />
              <BsFiletypeSql title="SQL" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
