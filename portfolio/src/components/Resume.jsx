/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Resume = ({className=''}) => {
  return (
    <div className={`flex flex-row items-center gap-6 ${className}`}>
      {/* Resume section */}
      <a href={'/'} target={"_blank"} className="bg-white text-black p-2 rounded-md w-[130px] text-center hover:bg-black border-2 border-black hover:text-white">
        Resume
      </a>
      <a
        href="mailto:your-suraj71308kumar@gmail.com"
        className="text-xl text-blue-600 underline cursor-pointer"
      >
        Mail me?
      </a>
    </div>
  );
};

export default Resume;
