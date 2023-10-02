"use client";
import React from "react";
import { TbUserStar } from "react-icons/tb";
import { Experiencedata } from "./Experiencedata";

const Experience = () => {
  return (
    <div className="mt-24 ">
      <h1 className="text-[#3e64ff] text-4xl font-bold">Experience</h1>
      {Experiencedata.map((val, i) => {
        return (
          <div key={i}>
            <div className="flex   gap-4 mt-8">
              <div className=" w-20 ">
                <div className="w-12 h-12 rounded-full bg-[#3e64ff] flex items-center justify-center ">
                  <TbUserStar className="text-white text-2xl" />
                </div>
              </div>

              <div className="flex flex-col ">
                <h1 className="text-[#3e64ff] font-bold">{val.startedDate}</h1>
                <p className="font-bold text-xl">{val.companyName}</p>
                <h1 className="mt-4 font-bold">{val.job}</h1>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-4"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
