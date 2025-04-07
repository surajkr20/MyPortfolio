/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { skills, experiences } from "../constants/index";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div className=" flex flex-col flex-wrap items-center mx-auto px-8 sm:px-20 sm:py-20 py-20 gap-6 dark:bg-dark dark:text-light border-t-2">
      {/* introduction section */}
      <div className="flex flex-col items-center gap-4 p-2">
        <h2 className="text-red-600 text-xl text-center">
          <span className="font-serif font-semibold">𝒜𝒷𝑜𝓊𝓉 𝓂𝑒..</span>
        </h2>
        <span
          className="sm:text-[17px] dark:text-light font-thin font-serif shadow-lg p-3 rounded-xl text-center border-b-8 border-r-8 border-primaryDark border-2
          dark:boder-2 dark:border-light hover:scale-95 transition-all"
        >
          I’m a full-stack web developer and passionate problem solver, with a
          strong interest in building real-world applications using the MERN
          stack and Java.Currently, I’m sharpening my Data Structures and
          Algorithms (DSA) skills in Java while aiming to contribute to
          innovative projects at reputed tech companies.
        </span>
        <span
          className="sm:text-[17px] dark:text-light font-thin font-serif shadow-lg p-3 rounded-xl text-center border-b-8 border-r-8 border-primaryDark border-2
          dark:boder-2 dark:border-light hover:scale-95 transition-all"
        >
          I maintain strong academic performance and actively engage in tech
          events to expand my experience and showcase my skills. As a quick
          learner and hardworking individual, I thrive in both team and solo
          environments. I&apos;m fluent in English and Hindi, and always eager
          to learn and grow.
        </span>
      </div>

      {/* skills section */}
      <div className="flex flex-col flex-wrap gap-5 w-full p-4 shadow-lg dark:boder-light dark:border-b-2">
        <h1 className="sm:text-2xl text-3xl font-serif font-semibold text-blue-600 dark:text-primary text-center ">
          My Skills
        </h1>
        <div className="flex flex-wrap gap-6 justify-between transition-all">
          {skills.map((skill) => (
            <div className="w-14 h-14 hover:scale-105 flex items-center justify-center box shadow-lg border-r-4 border-b-4 dark:border-light rounded-md">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Eductation section */}
      <div className="py-4 w-full">
        <div className="flex flex-col gap-3 shadow-lg p-4 dark:border-light dark:border-b-2 ">
          <h3 className="text-3xl font-semibold font-serif text-blue-600 text-center dark:text-primary">
            Eduction
          </h3>
          <p className="text-center hover:scale-105 transition-all">
            I’ve been on a journey of learning, building a strong foundation in
            technology and problem-solving. Here’s the rundown:
          </p>
        </div>

        <div className="flex text-dark">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full hover:scale-105 transition-all">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[100%] h-[100%] object-contain rounded-full border-dark border-2 p-1"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-black text-xl font-sans font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <a
                    className="text-primary font-semibold"
                    style={{ margin: 0 }}
                    href={experience.schoolInfoLink}
                  >
                    Institute InfoLink
                  </a>
                </div>

                <ul className="my-5 ml-5 shadow-lg items-start justify-center p-4 flex flex-col gap-3 font-serif border-b-4 border-dark">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
