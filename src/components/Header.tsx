import React from "react";

function Header() {
  return (
    <div className="text-center p-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
        Mateusz Grabarczyk
      </h2>
      <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
        Fullstack developer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto lg:max-w-xl xl:max-w-2xl">
        I'm interested in Backend Development with Python, but I also like
        Frontend technologies, especially React! I love to learn new things and
        I'm a big cycling fan. Currently I'm learning German as well!
      </p>
    </div>
  );
}

export default Header;
