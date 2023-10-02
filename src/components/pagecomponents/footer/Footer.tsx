import React from "react";

const Footer = () => {
  return (
    <div className="h-screen bg-black text-white ">
      <div className="w-10/12 h-full mx-auto mt-8 grid grid-cols-12 items-center gap-6">
        <div className="col-span-3">
          <h1 className="text-2xl font-bold">About</h1>
          <p className="mt-8 text-sm">
            My expertise in React, coupled with a keen eye for design and a
            commitment to delivering top-notch results, makes me the ideal
            candidate to help your team build remarkable web applications. Let's
            create something extraordinary together.
          </p>
        </div>
        <div className="col-span-3 bg-red-500">
          <h1 className="text-2xl font-bold">Links</h1>
          <div></div>
        </div>
        <div className="col-span-3 bg-red-500">
          <h1 className="text-xl font-bold">About</h1>
        </div>
        <div className="col-span-3 bg-red-500">
          <h1 className="text-xl font-bold">About</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
