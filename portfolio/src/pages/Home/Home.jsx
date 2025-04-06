// import React from 'react'
import "../Home/Home.css";

import img1 from "../../assets/portfolio pic.jpg";
import img2 from './profile-images/github2.jpg';
import img4 from './profile-images/ghibli.jpg';
import img5 from './profile-images/iitp.jpg';

import TypingEffect from "react-typing-effect";
import Icons from "../../components/SocialMediaIcons/Icons";
import AnimeText from "../../components/AnimeText/AnimeText";
import Resume from "../../components/Resume";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img4, img1, img5, img2];

  return (
    <div
      id="home"
      className="flex sm:flex-row flex-col items-center justify-between px-12 py-24 sm:py-0 mx-auto bg-light dark:bg-dark"
    >
      {/* left section */}
      <div className="left-home flex items-center justify-center flex-col gap-6 sm:w-1/3 w-full h-screen">
        {/* image section */}
        <div className="relative">
          <img
            id="img"
            src={images[currentIndex]}
            alt="suraj kr"
            className="sm:w-[280px] w-[250px] sm:h-[300px] h-[250px] rounded-lg border-[1px] border-r-8 border-b-8 shadow-lg p-3 border-primaryDark dark:border-light object-fill hover:scale-105 transition-all"
          />
          {/* Left Button */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg dark:bg-light hover:scale-110 transition-all"
          >
            <FaArrowLeft/>
          </button>

          {/* Right Button */}
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % images.length)
            }
            className="absolute dark:bg-light shadow-lg right-[-30px] top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:scale-110 transition-all"
          >
            <FaArrowRight/>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <Icons/>
          <TypingEffect
            className="text-2xl font-semibold font-serif dark:text-light"
            text={["FullStack Dev", "Software Engineer", "Programmer"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />

          <p
            className="sm:hidden font-serif shadow-lg p-3 rounded-xl text-center border-b-8 border-dark border-2
          dark:boder-2 dark:border-light dark:text-light hover:scale-105 transition-all"
          >
            MERN Stack developer skilled in building scalable web applications
            using React.js, Node.js, Express.js, and MongoDB. Strong
            problem-solving skills. Passionate about optimizing backend
            performance, developing real-time applications, and writing clean,
            maintainable code. Seeking opportunities to contribute and grow in a
            challenging tech-driven environment.
          </p>
          
          <Resume className="left-resume hidden mb-6" />
        </div>
      </div>

      {/* right section */}
      <div className="right-home sm:w-1/2 w-full h-screen flex flex-col justify-center gap-6 ">
        <AnimeText
          Text="𝖳𝗋𝖺𝗇𝗌𝖿𝗈𝗋𝗆𝗂𝗇𝗀 𝖨𝖽𝖾𝖺𝗌 𝗂𝗇𝗍𝗈 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇𝖺𝗅 𝖱𝖾𝖺𝗅𝗂𝗍𝗂𝖾𝗌 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝖬𝗈𝖽𝖾𝗋𝗇 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝗆𝖾𝗇𝗍, 𝖢𝗅𝖾𝖺𝗇 𝖢𝗈𝖽𝖾, 𝖺𝗇𝖽 𝖫𝗈𝗀𝗂𝖼𝖺𝗅 𝖯𝗋𝗈𝖻𝗅𝖾𝗆-𝖲𝗈𝗅𝗏𝗂𝗇𝗀"
          className="text-left shadow-lg p-2 rounded-xl dark:text-light transition-all font-semibold"
        />

        <p className="sm:text-[15px] dark:text-light font-thin font-mono shadow-lg p-3 rounded-xl text-center border-b-8 border-r-8 border-dark border-2
          dark:boder-2 dark:border-light hover:scale-95 transition-all">
          ⮚ MERN Stack developer skilled in building scalable web applications
          using React.js, Node.js, Express.js, and MongoDB. Strong
          problem-solving skills. Passionate about optimizing backend
          performance, developing real-time applications, and writing clean,
          maintainable code. Seeking opportunities to contribute and grow in a
          challenging tech-driven environment.
        </p>

        <div className="flex items-center justify-between">
          <Resume/>
          <div className="tab-icons hidden"><Icons/></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
