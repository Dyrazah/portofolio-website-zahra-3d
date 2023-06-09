import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { style } from "../style";
import { school } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const SchoolCard = ({ school }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={school.date}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{school.name}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {school.major}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {school.achievement.map((achievement, index) => (
          <li
            key={`school-achievement-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {achievement}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const School = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${style.sectionSubText} text-center`}>
          Where I'm Study
        </p>
        <h2 className={`${style.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {school.map((school, index) => (
            <SchoolCard
              key={`school-${index}`}
              school={school}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(School, "work");