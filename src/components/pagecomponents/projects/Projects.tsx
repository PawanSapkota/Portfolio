import Image from "next/image";
import React from "react";
import profile from "../../../../public/profile.jpg";
import Carousel from "./Carausal";

const Projects = () => {
  return (
    <div className="mt-16 w-10/12 mx-auto ">
      <h1 className="text-[#3e64ff] text-4xl font-bold text-center">
        Projects
      </h1>
      <Carousel />

      {/* <div className="mt-8">
        <div className="w-72 h-72 shadow-xl border-black">
          <Image src={profile} alt="fsdg" className="hover:bg-[#3e64ff]" />
          <h1 className="font-bold mt-4">Food Website</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
