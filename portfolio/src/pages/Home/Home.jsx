// import React from 'react'
import "../Home/Home.css";
import man from "../../assets/profilepic.jpg";
import TypingEffect from "react-typing-effect";
import Icons from "../../components/SocialMediaIcons/Icons";
import AnimeText from "../../components/AnimeText/AnimeText";
import Resume from "../../components/Resume";

const Home = () => {
  return (
    <div
      id="home"
      className="flex sm:flex-row flex-col items-center justify-between px-12 py-14 sm:py-0 mx-auto bg-light dark:bg-dark"
    >
      {/* left section */}
      <div className="left-home sm:w-1/3 w-full h-screen flex items-center justify-center flex-col gap-6">
        <img
          id="img"
          src={man}
          alt="suraj kr"
          className="sm:w-[300px] w-[250px] rounded-lg border-[1px] border-r-8 border-b-4 border-b-black border-r-black shadow-lg p-3
          dark:border-light"
        />
        
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="sm:text-[12px] text-[12px] font-semibold flex flex-col items-center justify-center">
            <span className="span1 dark:text-primary">Hello, i&apos;m</span>
            <span className="span2 sm:text-xl text-primary dark:text-light">Suraj Kumar</span>
          </h1>
          <Icons />
          <TypingEffect
            className="text-2xl font-semibold font-serif dark:text-light"
            text={[
              "FullStack Dev",
              "Software Engineer",
              "Programmer",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
          
          <p className="sm:hidden font-serif shadow-lg p-3 rounded-xl text-center text-balance border-b-8 border-dark border-2
          dark:boder-2 dark:border-light dark:text-light">
          As a proficient MERN stack developer and problem solver, I specialize
          in crafting innovative web applications. My expertise lies in React,
          Next.js, and modern web development, showcased through dynamic
          projects that bring ideas to life.
          </p>
          <Resume className="left-resume" /> 
        </div>
      </div>

      {/* right section */}
      <div className="right-home sm:w-1/2 w-full h-screen flex flex-col justify-center gap-6 ">
        <AnimeText
          Text="Transforming Ideas into Functional Realities through Modern Development, Clean Code, and Logical Problem-Solving"
          className="!text-left dark:text-light"
        />

        <p className="sm:text-[15px] dark:text-primary">
          As a proficient MERN stack developer and problem solver, I specialize
          in crafting innovative web applications. My expertise lies in React,
          Next.js, and modern web development, showcased through dynamic
          projects that bring ideas to life.
        </p>

        <Resume />
      </div>
    </div>
  );
};

export default Home;
