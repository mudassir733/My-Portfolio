import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import React from "react";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center itesm-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] relative">
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500 absolute right-[9px]"></div>
          </div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Mudassir Ali</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Enter a world where 3D websites and animated creativity flourish. As
            a web developer, I blend innovation with flawless UI design to
            develop captivating digital experiences. Join me in redefining
            online engagement through seamless form and function.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-[-30px] bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] flex justify-center items-start rounded-3xl border-secondary border-2 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
