import React from "react";
import { motion } from "framer-motion";

import { style } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectsCard = ({ index, notes, name, year, work, image, projects_image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>

      <div className="relative w-full h-[230px] mb-4">
        <img 
            src={projects_image} 
            alt="project_image" 
            className='w-full h-full object-cover rounded-2xl'
          />
      </div>

      <p className='text-white tracking-wider text-[18px]'>{notes}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {year} | {work}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${style.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={style.sectionSubText}>What I Works</p>
          <h2 className={style.sectionHeadText}>Projects.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${style.paddingX} flex flex-wrap gap-7`}>
        {projects.map((projects, index) => (
          <ProjectsCard key={projects.name} index={index} {...projects} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "");