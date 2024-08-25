"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import SocialLink from "@/components/SocialLink";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors duration-300">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Header />
          <div className="text-5xl flex justify-center gap-14 dark:text-gray-400">
            <SocialLink
              href="https://github.com/MateuszGrabarczyk"
              Icon={AiFillGithub}
            />
            <SocialLink
              href="https://www.linkedin.com/in/mateusz-grabarczyk-361851210/"
              Icon={AiFillLinkedin}
            />
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
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default Home;
