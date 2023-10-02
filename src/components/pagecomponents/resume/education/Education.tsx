import Image from "next/image";
import React from "react";
import Edu from "../../../../../public/edu.png";
import { MdCastForEducation } from "react-icons/md";
import { Educationdata } from "./Educationdata";

const Education = () => {
  return (
    <div className="mt-8">
      <h1 className="text-[#3e64ff] text-4xl font-bold">Education</h1>

      {Educationdata.map((val, i) => {
        return (
          <div key={i}>
            <div className="flex   gap-4 mt-8">
              <div className=" w-20 ">
                <div className="w-12 h-12 rounded-full bg-[#3e64ff] flex items-center justify-center ">
                  <MdCastForEducation className="text-white text-2xl" />
                </div>
              </div>

              <div className="flex flex-col ">
                <h1 className="text-[#3e64ff] font-bold">{val.completion}</h1>
                <p className="font-bold text-xl">{val.course}</p>
                <h1 className="mt-4 font-bold">{val.college}</h1>
              </div>
            </div>
            <div className="w-full h-px bg-gray-100 mt-4"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
