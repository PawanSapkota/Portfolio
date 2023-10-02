import Image from "next/image";
import React from "react";
import Profile from "../../../../public/profile.jpg";

const About = () => {
  return (
    <div className="w-10/12   grid grid-cols-2  mx-auto gap-4 mt-8  items-center justify-center ">
      {/* <div className="flex justify-center items-center w-full">
        <Image
          src={Profile}
          alt="profile"
          className="rounded-full w-fit h-fit "
        />
      </div> */}
      <div className="flex  items-center">
        <h1 className="text-4xl sm:text-5xl font-bold mt-4 ">About Me</h1>
      </div>
      <div className="   flex  items-center justify-center w-full ">
        <p className="mt-4 text-sm sm:text-base">
          I'm Pawan Sapkota, a passionate React developer with a knack for
          creating stunning user interfaces and exceptional web experiences. My
          expertise in React, coupled with a keen eye for design and a
          commitment to delivering top-notch results, makes me the ideal
          candidate to help your team build remarkable web applications. Let's
          create something extraordinary together.
        </p>
      </div>
    </div>
  );
};

export default About;
