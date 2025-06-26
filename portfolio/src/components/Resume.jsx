/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Resume = ({className=''}) => {
  return (
    <div className={`flex flex-row mt-4 sm:items-center md:justify-start gap-10 items-center justify-center ${className}` }>
      {/* Resume section */}
      <a href={'https://drive.google.com/file/d/1ozJ1f2zd7sJDlM65nSTPOnNMCFxUzXyr/view?usp=sharing'} target={"_blank"} 
      className="bg-white text-black p-2 rounded-md w-[130px] text-center hover:bg-black border-2 border-black
      dark:border-2 dark:border-light hover:bg-dark hover:text-light dark:text-light dark:hover:bg-light dark:hover:text-dark
      hover:scale-110 transition-all">
        Resume
      </a>
      <a
        href="mailto:your-suraj71308kumar@gmail.com"
        className="text-[17px] text-blue-600 underline cursor-pointer dark:text-primary hover:scale-105 transition-all"
      >
        Mail me?
      </a>
    </div>
  );
};

export default Resume;
