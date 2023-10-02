"use client";

import React, { useEffect, useState } from "react";
import { Navdata } from "./Navdata";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Toolbar = () => {
  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", scrollfixed);
    return () => {
      window.removeEventListener("scroll", scrollfixed);
    };
  }, []);

  const scrollfixed = () => {
    if (window.scrollY > 200) {
      console.log(scrollY);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevValue) => !prevValue);
  };

  return (
    <div>
      {/*Toolbar  */}
      <header
        className={`${
          show ? "bg-white shadow-lg  " : "bg-transparent "
        } fixed top-0 left-0 right-0 z-50 transition-all duration-700 delay-150 origin-top w-full  `}
      >
        <div className="flex items-center justify-between w-10/12 mx-auto py-4 relative  ">
          <Link href={"/"}>
            <div className="  flex items-center justify-center   ">
              <span className="w-10  h-10 flex items-center justify-center text-2xl  font-bold  rounded-full text-white bg-[#3e64ff]">
                P
              </span>
              <h1 className="-m-3 text-2xl font-bold z-10">awan</h1>
            </div>
          </Link>

          <div
            onClick={handleToggleSidebar}
            className="lg:hidden absolute right-2 top-4 toggle-sidebar"
          >
            {isSidebarOpen ? (
              <AiOutlineClose className="text-2xl font-bold" />
            ) : (
              <AiOutlineMenu className="text-xl font-bold" />
            )}
          </div>

          <ul className="hidden lg:flex gap-6 justify-center items-center mr-16 ">
            {Navdata.map((data, i) => {
              return (
                <li key={i} className="cursor-pointer   p-2  ">
                  <Link href={data.path} className="relative group  py-2">
                    {data.title}
                    <div
                      className={`absolute  rounded-lg bottom-0 left-0 w-full h-0.5 bg-[#3e64ff] transform scale-x-0 duration-700 delay-100 origin-center transition-transform group-hover:scale-x-100 ${
                        pathname === data.path ? "bg-[#3e64ff]" : ""
                      }`}
                    ></div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${
          isSidebarOpen ? "right-0" : "-right-full"
        } z-50 bg-black text-white h-screen w-full transition-all ease-in-out duration-500 lg:hidden `}
      >
        <AiOutlineClose
          className="text-2xl font-bold toggle-sidebar"
          onClick={handleToggleSidebar}
        />
        <ul className="flex flex-col gap-4 justify-center items-center text-start 0">
          {Navdata.map((val, i) => {
            return (
              <Link href={val.path} key={i}>
                <li className="w-fit toggle-sidebar">{val.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
