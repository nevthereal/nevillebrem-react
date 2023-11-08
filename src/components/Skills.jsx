import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCode,
  faCrop,
  faDesktop,
  faScrewdriverWrench,
  faServer,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Skills = () => {
  const style = {
    skillCard: `text-black p-2 my-4 md:my-0 card`,
    skillHeading: `font-bold font-[Montserrat] my-2 mx-4`,
    skillList: `font-mono`,
  };

  return (
    <div
      id='skills'
      className='text-white px-4 py-16 text-center overflow-x-hidden'
    >
      <div className='md:flex'>
        <h1 className='font-[Montserrat] font-bold uppercase md:mx-auto my-auto'>
          <FontAwesomeIcon icon={faToolbox} /> Skills
        </h1>
        <div className='relative md:mx-auto'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className='absolute inset-0 bg-white blur-2xl rounded-3xl'
          ></motion.div>
          <div className='relative md:grid  md:grid-cols-2 md:grid-rows-2 md:gap-4'>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  bounce: 0.2,
                },
              }}
              viewport={{ once: true }}
              className={style.skillCard}
            >
              <h2 className={style.skillHeading}>
                <FontAwesomeIcon icon={faDesktop} /> Frontend
              </h2>
              <ul className={style.skillList}>
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 200 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  bounce: 0.2,
                },
              }}
              viewport={{ once: true }}
              className={style.skillCard}
            >
              <h2 className={style.skillHeading}>
                <FontAwesomeIcon icon={faServer} /> Backend
              </h2>
              <ul className={style.skillList}>
                <li>Express</li>
                <li>CORS</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: -200 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  bounce: 0.2,
                },
              }}
              viewport={{ once: true }}
              className={style.skillCard}
            >
              <h2 className={style.skillHeading}>
                <FontAwesomeIcon icon={faBook} /> Libraries
              </h2>
              <ul className={style.skillList}>
                <li>Framer Motion</li>
                <li>typed.js</li>
                <li>Font Awesome</li>
                <li>Stripe</li>
                <li>Tailwind CSS</li>
                <li>Firebase</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 200 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  bounce: 0.2,
                },
              }}
              viewport={{ once: true }}
              className={style.skillCard}
            >
              <h2 className={style.skillHeading}>
                <FontAwesomeIcon icon={faScrewdriverWrench} /> Tools
              </h2>
              <ul className={style.skillList}>
                <li>Visual Studio Code</li>
                <li>Git + GitHub</li>
                <li>Netlify</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
