import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="text-center p-10">
      <h2
        className={`text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400 transform transition-transform duration-1000 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        Mateusz Grabarczyk
      </h2>
      <h3
        className={`text-2xl py-2 md:text-3xl dark:text-white transform transition-transform duration-1000 delay-300 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Typewriter
          words={["Fullstack Developer."]}
          loop={false}
          typeSpeed={200}
          deleteSpeed={100}
        />
        &nbsp;
      </h3>
      <p
        className={`text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto lg:max-w-xl xl:max-w-2xl transition-opacity duration-[1s] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        I&apos;m interested in Backend Development with Python, but I also like
        Frontend technologies, especially React! I love to learn new things and
        I&apos;m a big cycling fan. Currently I&apos;m learning German as well!
      </p>
    </div>
  );
}

export default Header;
