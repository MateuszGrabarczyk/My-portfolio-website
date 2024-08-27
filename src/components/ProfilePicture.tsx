import { useEffect, useState } from "react";
import Image from "next/image";

function ProfilePicture() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 700);
  }, []);

  return (
    <div
      className={`flex justify-center py-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={600}
        height={400}
        className="rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transform transition-transform duration-500 hover:scale-105"
        priority
      />
    </div>
  );
}

export default ProfilePicture;
