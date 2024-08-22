import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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
          <a href="https://github.com/MateuszGrabarczyk" target="_blank">
            <AiFillGithub className="cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/mateusz-grabarczyk-361851210/"
            target="_blank"
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
    </main>
  );
}
