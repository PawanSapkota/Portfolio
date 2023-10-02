import React from "react";
import Education from "./education/Education";
import Skill from "./skill/Skill";
import Experience from "./experience/Experience";
import { BsDashLg } from "react-icons/bs";

const Resume = () => {
  return (
    <div className="grid md:grid-cols-12  w-10/12 mx-auto  mt-8 relative ">
      <div className=" col-span-4 hidden md:flex sticky top-0 left-0 ">
        <div className=" flex flex-col  gap-4 ">
          <h1 className=" font-semibold flex  items-center gap-2">
            <BsDashLg />
            Education
          </h1>
          <h1 className=" font-semibold flex items-center gap-2">
            <BsDashLg />
            Skills
          </h1>
          <h1 className=" font-semibold flex  items-center gap-2">
            {" "}
            <BsDashLg />
            Experience
          </h1>
        </div>
      </div>

      <div className=" md:col-span-8  ">
        <Education />
        <Skill />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
