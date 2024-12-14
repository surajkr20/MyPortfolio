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
    <div className=" flex flex-col flex-wrap items-center mx-auto px-12 py-24 gap-6">
      {/* introduction section */}
      <div className="flex flex-col gap-4 shadow-lg p-6 w-full">
        <div className="flex gap-2 justify-between items-center">
          <h1 className="text-2xl text-left">
            Hello, I&apos;m{" "}
            <span
              className="text-blue-600 font-semibold
            drop-shadow"
            >
              Suraj
            </span>
          </h1>
          {/* <div className="h-6 w-1 bg-black"/> */}
          <h2 className="text-red-600 text-xl">
            <span className="font-serif font-semibold">Thanks</span> for
            visiting my portfolio!🙂
          </h2>
        </div>
        <p>
          I&apos;m a fullstack web developer, Want to join many companies in
          future for contributing a lot of projects related to MERN stack.
          I&apos;m very well in academics and do participate in many kinds of
          events for gaining the experience and to show my skills.Apart from it
          I&apos;m a quick learner and a hardworking student. I&apos;m proficient in
          English and Hindi.
        </p>
      </div>

      {/* skills section */}
      <div className="flex flex-col flex-wrap gap-6 w-full p-6 shadow-lg">
        <h1 className="text-2xl font-serif font-semibold text-blue-600">
          My Skills
        </h1>
        <div className="flex flex-wrap gap-6 justify-between">
          {skills.map((skill) => (
            <div className="w-14 h-14 border-2 flex items-center justify-center box shadow-lg rounded-md">
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

        <div className="flex flex-col gap-3 shadow-lg p-6">
          <h3 className="text-2xl font-semibold font-serif text-blue-600 text-left">
            Eduction
          </h3>
          <p>
            I&apos;ve worked with all sorts of companies, leveling up my skills
            and teaming up with smart people. Here&lsquo;s the rundown:
          </p>
        </div>

        <div className="flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
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
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 ml-5 list-none shadow-lg items-center justify-center p-4">
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
