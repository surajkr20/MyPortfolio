/* eslint-disable no-unused-vars */
import React from 'react';
import ProjectCard from './Card';
import meetify from "../Project/images/meetify.png";
import portfolio from "../Project/images/portfolio.png";

const projects = [
  {
    img: meetify,
    title: "Meetify - Video Conferencing App",
    description: "A video conferencing web application with real-time communication features.",
    sourceCode: "https://github.com/surajkr20/Meetify-App",
    demoLink: "https://meetify-app.vercel.app/",
  },
  {
    img: portfolio,
    title: "My Portfolio",
    description: "A personal portfolio showcasing my projects and skills.",
    sourceCode: "https://github.com/surajkr20/suraj-portfolio",
    demoLink: "https://yourportfolio.com",
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark dark:text-light px-6 sm:px-20 py-16 sm:py-24">
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-800 dark:text-light mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            sourceCode={project.sourceCode}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
