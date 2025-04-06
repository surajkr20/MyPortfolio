/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ img, title, description, sourceCode, demoLink }) => {
  return (
    <div className="sm:w-[90%] w-full h-full bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-95 border-primaryDark border-r-8 border-b-8 border-t-2 border-l-2">
      {/* Image Section */}
      <div className="relative flex flex-col gap-2">
        <h2 className="font-bold text-gray-800 dark:text-light text-center md:text-2xl text-lg text-gray font-serif mt-2">{title}</h2>
        <a href={demoLink}>
        <img
          src={img}
          alt={`${title} Screenshot`}
          className="w-full h-48 object-fill p-2"
        />
        </a>
      </div>

      {/* Project Details */}
      <div className="p-4 flex flex-col items-center text-center">
        <p className="text-sm text-gray-600 mt-1 font-mono dark:text-primaryDark">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-evenly gap-3 w-full mt-4">
          {sourceCode && (
            <Link to={sourceCode} target="_blank">
              <button className="flex items-center gap-2 bg-gray-800 text-white dark:bg-light dark:text-dark px-3 py-1 rounded-md font-medium font-mono transition duration-300 hover:bg-gray-700 bg-dark text-light">
                <FaGithub className="text-lg" /> Source Code
              </button>
            </Link>
          )}
          {demoLink && (
            <Link to={demoLink} target="_blank">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-light dark:text-dark px-3 py-1 rounded-md font-medium font-mono transition duration-300 bg-dark text-light">
                <FaExternalLinkAlt className="text-lg" /> Live Demo
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
