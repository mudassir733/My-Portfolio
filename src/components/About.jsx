import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index)}
        className="w-full bg-gradient-to-tr from-green-500 to-pink-500 p-[1px] rounded-lg shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] bg-tertiary py-5 px-7 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-[17px] text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        I'm Mudassir Ali,a web developer with a passion for development
        extraordinary digital experiences. With nearly four years of expertise,
        I specialize in JavaScript, React JS, Three JS, Next JS, UI frameworks,
        and WordPress, harnessing these tools to create websites that stand out
        from the crowd. From dynamic JavaScript interactions to captivating 3D
        environments using Three JS, I thrive on pushing the boundaries of web
        development. With React JS, I sculpt elegant and intuitive user
        interfaces that engage and delight users, while my proficiency in UI
        frameworks ensures seamless functionality and stunning aesthetics.
        Moreover, my mastery of WordPress empowers me to deliver versatile and
        scalable solutions tailored to your needs. With each project, I am
        committed to excellence, striving to exceed expectations and redefine
        the standards of web development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
