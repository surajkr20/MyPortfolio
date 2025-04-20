/* eslint-disable no-unused-vars */
import React from 'react';
import ProjectCard from './Card';
import meetify from "../Project/images/meetify.png";
import portfolio from "../Project/images/portfolio.png";
import youtube_clone from "../Project/images/yt.png";

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
    sourceCode: "https://github.com/surajkr20/MyPortfolio/tree/main/portfolio",
    demoLink: "https://surajkr20-porfolio.vercel.app/",
  },
  {
    img: youtube_clone,
    title: "Youtube-Clone",
    description: "Built a responsive YouTube clone using React.js, Context API, and Tailwind CSS with features like video search, playback, and category-wise browsing.",
    sourceCode: "https://github.com/surajkr20/YoutubeClone",
    demoLink: "https://youtube-clone-made-by-suraj.vercel.app/",
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark dark:text-light px-6 sm:px-20 py-16 sm:py-24 sm:m-0 mt-4 sm:mb-0">
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-800 dark:text-light mb-6">
        Our Work
        <p className='md:text-[20px] text-sm font-thin font-serif text-gray mt-2 dark:text-light'>Practical projects showcasing my development skills.</p>
      </h2>
      <div className="flex md:flex-row flex-col gap-10 items-center">
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
