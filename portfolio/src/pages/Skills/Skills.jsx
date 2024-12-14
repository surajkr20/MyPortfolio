// import React from 'react'
import "./skills.css";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="skills-text flex items-center justify-center rounded-full font-semibold bg-white text-black shadow-black
        py-3 px-6 cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.5}}
      // viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="mt-4">
      <h2 className="skills-h2 font-bold text-4xl text-center text-white">
        Skills
      </h2>
      <div className="radical-circular relative flex items-center justify-center rounded-full mt-6">
        <motion.div
          className="center-skill flex justify-center rounded-full text-2xl font-semibold bg-red-700 text-white 
          py-2 px-5 shadow-black cursor-pointer mt-[-55px] mr-4"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>

        <Skill name="C/C++" x='-30vw' y='-10vw'/>
        <Skill name="HTML" x='-5vw' y='-19vw'/>
        <Skill name="CSS" x='-32vw' y='0vw'/>
        <Skill name="Tailwind CSS" x='6vw' y='14vw'/>
        <Skill name="Javascript" x='22vw' y='10vw'/>
        <Skill name="Typescript" x='30vw' y='-6vw'/>
        <Skill name="React.js" x='-12vw' y='14vw'/>
        <Skill name="Next.js" x='-21vw' y='-18vw'/>
        <Skill name="Node.js" x='10vw' y='-19vw'/>
        <Skill name="Express.js" x='25vw' y='-16vw'/>
        <Skill name="MongoDB" x='30vw' y='4vw'/>
        <Skill name="Firebase" x='-27vw' y='10vw'/>

      </div>
    </div>
  );
};

export default Skills;
