"use client";
import React from "react";
import { Skilldata } from "./Skilldata";
import { GiSkills } from "react-icons/gi";
import { AiFillHtml5 } from "react-icons/ai";
import Image from "next/image";
import { Progress } from "flowbite-react";

const Skill = () => {
  return (
    <div className="my-16  ">
      <h1 className="text-[#3e64ff] text-4xl font-bold">Skills</h1>

      <div className=" gap-6 w-full grid grid-cols-4  ">
        {Skilldata.map((val, i) => {
          return (
            <div key={i} className="">
              <div className="mt-8 h-full flex flex-col justify-center items-center gap-4 shadow-md hover:translate-x-2  scale-105 transition-all duration-300">
                <Image src={val.image} alt="fsdghj" className="w-fit h-fit" />
                <h1 className="font-bold">{val.skill}</h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
        {Skilldata.map((value, index) => {
          return (
            <div key={index} className="mt-8 ">
             
              <div>
                <Progress
                  labelProgress
                  labelText
                  color="purple"
                  progress={value.completed}
                  progressLabelPosition="inside"
                  size="lg"
                  textLabel={value.skill}
                  textLabelPosition="outside"
                />
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Skill;
