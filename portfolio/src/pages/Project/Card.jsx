/* eslint-disable no-unused-vars */
import React from "react";
import meetify from "../Project/images/meetify.png";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <img
          src={meetify}
          title="Meetify - Video Conferencing App"
          alt="Meetify Project Screenshot"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-lg font-bold text-gray-800">Meetify - Video Conferencing App</h2>
        <p className="text-sm text-gray-600 mt-1">An intuitive and seamless video calling platform with screen sharing and chat integration.</p>

        {/* Action Buttons */}
        <div className="flex justify-between w-full mt-3">
          <Link to="https://github.com/surajkr20/Meetify-App" target="_blank">
            <button className="flex items-center gap-2">
              <FaGithub className="text-lg" /> Source Code
            </button>
          </Link>
          <Link to="https://meetify-app.vercel.app/" target="_blank">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <FaExternalLinkAlt className="text-lg" /> Live Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
