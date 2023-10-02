"use client";

import React, { useState } from "react";
import { Navdata } from "./Navdata";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h-full w-96 bg-white shadow-sm transition-all duration-700 ease-in-out -translate-x-2 relative lg:hidden">
      <div className="absolute top-0 left-0">
        <button onClick={() => setToggleMenu(false)}>
          <AiFillDelete />
        </button>
      </div>
      <ul className="flex justify-between items-center gap-4 flex-col ">
        {Navdata.map((data, i) => {
          return (
            <li key={i} className="cursor-pointer   p-2  ">
              <Link href={data.path} className="relative group  py-2">
                {data.title}
                <div className="absolute  rounded-lg bottom-0 left-0 w-full h-0.5 bg-[#3e64ff] transform scale-x-0 duration-700 delay-100 origin-center transition-transform group-hover:scale-x-100"></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
