import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import Particles from "react-tsparticles";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full sm:w-[360px] perspective-1000"
    >
      <Tilt
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
        scale={1.08}  // Increase scale for "bulgier" effect
        transitionSpeed={2000}
        tiltReverse={false}
        perspective={1000}
        onEnter={() => setIsHovered(true)}
        onLeave={() => setIsHovered(false)}
      >
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }}
          className="bg-tertiary p-5 rounded-2xl h-full transform transition-all duration-300 hover:shadow-2xl"
        >
          <motion.div 
            className="relative w-full h-[230px] overflow-hidden rounded-2xl"
            animate={{ rotate: isHovered ? 2 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl transform transition-transform duration-300"
              whileHover={{ scale: 1.07 }}
            />

            <motion.div 
              className="absolute inset-0 flex justify-end m-3 card-img_hover"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer backdrop-blur-sm"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-5"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-white font-bold text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">
              {description}
            </p>
          </motion.div>

          <motion.div 
            className="mt-4 flex flex-wrap gap-2"
            animate={{ y: isHovered ? -1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {tags.map((tag) => (
              <motion.p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} px-2 py-1 rounded-full backdrop-blur-sm`}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                #{tag.name}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

// Particles configuration
const particlesInit = async (main) => {
  await loadFull(main);
};

const Works = () => {
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 1,
            },
            opacity: {
              value: 0.2,
            },
            line_linked: {
              enable: true,
              opacity: 0.1,
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.div 
        className="w-full flex"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>

      <motion.div 
        className="mt-20 flex flex-wrap gap-7 justify-center sm:justify-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
