/* eslint-disable no-unused-vars */
import React from 'react';
import ProjectCard from './Card';

const Projects = () => {
  return (
    <div className='w-full md:w-full min-h-screen flex flex-wrap gap-10 justify-between items-center mx-auto px-6 sm:px-20 py-16 sm:py-24 bg-gray-100 dark:bg-dark dark:text-light'>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default Projects;
