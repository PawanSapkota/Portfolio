"use client";
import React, { useEffect, useRef, useState } from "react";
import gallery1 from "../../../../public/gallery1.jpeg";
import gallery2 from "../../../../public/gallery2.jpeg";
import gallery3 from "../../../../public/gallery3.jpeg";
import gallery4 from "../../../../public/gallery4.jpeg";
import gallery5 from "../../../../public/gallery5.jpeg";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carausal = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery5];
  const [Index, setIndex] = useState(0);

  const increases = () => {
    if (Index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((pre) => pre + 1);
    }
  };
  const decreases = () => {
    if (Index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((pre) => pre - 1);
    }
  };

  const increase = () => {
    const newIndex = Index + 1;
    if (newIndex < images.length - 2) {
      setIndex((pre) => pre + 1); // setIndex (newIndex)
    } else {
      setIndex(0);
    }
  };

  const decrease = () => {
    const newIndex = Index - 1;
    if (newIndex >= 0) {
      setIndex(newIndex);
    } else {
      setIndex(images.length - 3);
    }
  };
  return (
    <div className="w-full h-full mt-8 mx-auto shadow-2xl relative ">
      <div
        className=" flex items-center h-full w-full p-12 gap-6 relative  "
        // style={{
        //   transform: `translateX(-${Index * 33.33}%)`,
        // }}
      >
        {images.slice(Index, Index + 3).map((value, i) => {
          return (
            <div key={i} className="w-full h-full flex items-center">
              <Image src={value} alt="projects" className="w-full" />
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center absolute top-0 left-0  h-full w-full ">
        <button
          onClick={decrease}
          className="  bg-black text-white h-10 w-10 rounded-full text-2xl font-bold pl-2 opacity-50   "
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={increase}
          className="  bg-black text-white h-10 w-10 rounded-full text-2xl font-bold pl-2 opacity-50  "
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carausal;
