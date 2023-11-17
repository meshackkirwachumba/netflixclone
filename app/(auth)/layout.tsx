import Image from "next/image";
import React from "react";

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
       relative
       flex
       h-screen
       w-screen
       flex-col
       bg-black
       md:items-center
       md:justify-center
       md:bg-transparent
     "
    >
      {/* background image */}
      <Image
        src="/login_background.jpg"
        fill
        priority
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        alt="backgroundimage"
      />
      {/* logo */}
      <Image
        src="/netflix_logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="absolute left-4 top-4 md:left-10 md:top-6"
        priority
      />
      {/* signup and login pages */}
      {children}
    </div>
  );
};

export default authLayout;
