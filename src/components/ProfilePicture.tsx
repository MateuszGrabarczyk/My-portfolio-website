import Image from "next/image";

function ProfilePicture() {
  return (
    <div className="flex justify-center py-10">
      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={600}
        height={400}
        className="rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        priority
      />
    </div>
  );
}

export default ProfilePicture;
