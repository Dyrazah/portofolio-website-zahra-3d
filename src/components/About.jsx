import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { style } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { cv } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I have an interest in application development, analysis, and planning activities. 
        I’m passionate about developing experience and knowledge. Attention to detail has become my forte. 
        I’m an inquisitive person that enjoys learning new things and finding solutions to existing situations. 
        I’m ability to adapt and build a stable atmosphere. I’m a fast phase person who can work precisely under pressure.
      </motion.p>

      <div className="bg-tertiary rounded-md mt-4 min-h-[50px] max-w-3xl flex justify-evenly items-center flex-col">
        <a href={cv} download>Download CV</a>
      </div>

      <div className='mt-20 flex flex-wrap gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");