"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Profile from "../../../../public/profiles.png";

//color:#3e64ff

const Banner = () => {
  const textToWrite = "React Developer.";
  const speed = 150; // Speed in milliseconds (lower values make it faster)
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIndex < textToWrite.length) {
        setDisplayedText((prevText) => prevText + textToWrite[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset charIndex to 0 to start over
        setCharIndex(0);
        // Clear the displayed text to start over
        setDisplayedText("");
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex]);

  return (
    <div className="relative h-screen  ">
      <div className="  overlay bg-[#d8e0ff] h-screen w-1/2 before:absolute before:w-20 before:h-20 before:bg-[#d8e0ff] before:bottom-20 before:right-1/2 before:translate-x-4 before:transform before:rotate-45 z-10"></div>

      <div className="absolute top-0 left-0  bottom-0 right-0 grid grid-cols-2  bg-transparent w-full h-full ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-[#3e64ff] text-xl font-bold">Hey! I AM</h1>
          <div className="mt-4">
            <h1 className="text-5xl font-bold">Pawan Sapkota</h1>
          </div>
          <h1 className="mt-4 text-2xl font-bold">
            I'm a <span className="text-[#3e64ff]">{displayedText}</span>
          </h1>
        </div>

        {/* <div className="flex justify-center items-center  relative ">
          <div className=" flex justify-center  items-center w-1/2 h-1/2 bg-[#3e64ff] opacity-20 rounded-full  "></div>
          <div className=" flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 w-full h-full">
            <Image src={Profile} alt="profile" className="rounded-full   " />
          </div>
        </div> */}

        <div className="flex justify-center items-center">
          <div className="w-1/2 h-1/2 bg-[#d8e0ff] flex justify-center items-center rounded-full">
            <Image
              src={Profile}
              alt="profile"
              className=" w-full h-full rounded-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* Content after overlay */
}
{
  /* <div className="absolute top-0 left-0  bottom-0 right-0 flex flex-col justify-center items-center bg-transparent w-full h-full ">
        <h1 className="text-[#3e64ff] text-xl font-bold">Hey! I AM</h1>
        <div className="mt-4">
          <h1 className="text-5xl font-bold">Pawan Sapkota</h1>
        </div>
        <h1 className="mt-4 text-2xl font-bold">
          I'm a <span className="text-[#3e64ff]">{displayedText}</span>
        </h1>
      </div> */
}
