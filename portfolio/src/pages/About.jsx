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
    <div className=" flex flex-col flex-wrap items-center mx-auto px-8 sm:px-20 sm:py-24 py-20 gap-6 dark:bg-dark dark:text-light">
      {/* introduction section */}
      <div className="flex flex-col justify-between gap-3 shadow-lg dark:border-light dark:border-b-2 p-4 w-full">
        <div className="flex gap-2 sm:justify-between justify-center  items-center">
          <h1 className="sm:text-2xl text-3xl">
            Hello, I&apos;m{" "}
            <span className="text-blue-600 font-semibold dark:text-primary drop-shadow">
              Suraj
            </span>
          </h1>
          {/* <div className="h-6 w-1 bg-black"/> */}
          <h2 className="text-red-600 text-xl sm:block hidden">
            <span className="font-serif font-semibold">Thanks</span> for
            visiting my portfolio!🙂
          </h2>
        </div>

        <p className="sm:text-left text-center text-balance flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-4">
            <span>
              I’m a full-stack web developer and a problem solver with
              aspirations to contribute to projects involving the MERN stack and
              Java by collaborating with reputed companies in the future.
              Currently, I am enhancing my DSA skills using Java.
            </span>
            <span className="sm:text-left text-center text-balance">
              I excel in academics and actively participate in various events to
              gain experience and showcase my skills. Apart from that, I’m a
              quick learner, a hardworking student, and proficient in English
              and Hindi.
            </span>
          </p>
      </div>

      {/* skills section */}
      <div className="flex flex-col flex-wrap gap-5 w-full p-4 shadow-lg dark:boder-light dark:border-b-2">
        <h1 className="sm:text-2xl text-3xl font-serif font-semibold text-blue-600 dark:text-primary text-center ">
          My Skills
        </h1>
        <div className="flex flex-wrap gap-6 justify-between">
          {skills.map((skill) => (
            <div className="w-14 h-14 flex items-center justify-center box shadow-lg border-r-4 border-b-4 dark:border-light rounded-md">
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
        <div className="flex flex-col gap-3 shadow-lg p-4 dark:border-light dark:border-b-2">
          <h3 className="text-3xl font-semibold font-serif text-blue-600 text-center dark:text-primary">
            Eduction
          </h3>
          <p className="text-center">
            I’ve been on a journey of learning, building a strong foundation in
            technology and problem-solving. Here’s the rundown:
          </p>
        </div>

        <div className="flex text-dark ">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
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
