import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{ position: 'relative' }}
      animate={{
        z: isHovered ? 50 : 0,
        scale: isHovered ? 1.1 : 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
          duration: 0.3
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full sm:w-[250px]" // Responsive width
    >
      <Tilt
        className="w-full"
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        perspective={800}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white pointer-events-none"
                  style={{ zIndex: 20 }}
                />
              )}
            </AnimatePresence>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative z-10"
            >
              <img
                src={icon}
                alt="web-development"
                className="w-16 h-16 object-contain"
              />
            </motion.div>

            <motion.h3
              className="text-white text-[22px] font-bold text-center relative z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                opacity: 0.1,
              }}
            />
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a tech enthusiast passionate about transforming complex problems 
        into creative solutions. With a solid foundation in Computer Science 
        and a curiosity for the evolving tech landscape, I blend programming, 
        cloud technologies, and design to craft impactful digital experiences. 
        Driven by innovation, I continuously learn and strive to shape a future 
        where technology empowers and transforms!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
