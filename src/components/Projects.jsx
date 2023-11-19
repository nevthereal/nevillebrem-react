import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faNetworkWired,
  faCookieBite,
} from "@fortawesome/free-solid-svg-icons";
import { faWolfPackBattalion } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const style = {
    projectHeading: `font-bold font-[Montserrat]`,
    projectButton: `mx-auto rounded-3xl font-bold bg-nevBlue shadow-nevBlue/50 hover:shadow-nevBlue/75 shadow-lg md:py-4 py-2 md:px-6 px-3 text-xl`,
    projectCard: `prj-card card group mx-auto`,
    projectFlex: `flex justify-between`,
    cardFlex: `flex justify-center gap-4 my-2`,
  };

  return (
    <div id='projects' className='px-4 bg-white py-16'>
      <h1 className='pb-16 uppercase font-bold text-center my-auto font-[Montserrat]'>
        <FontAwesomeIcon icon={faSave} /> Projects
      </h1>

      <div className='md:mx-10 md:flex md:justify-center'>
        <div className={style.projectCard}>
          <div>
            <div className={style.projectFlex}>
              <h3 className={style.projectHeading}>Wolffe Bricks</h3>
              <h3>
                <FontAwesomeIcon icon={faWolfPackBattalion} />
              </h3>
            </div>
            <p className='py-2'>
              Me and a friend wanted to sell our LEGO Designs online, so I
              thought I'd code this little website. What used to be just a
              boring static HTML page turned into my first full stack app. I
              used Stripe for checkout with JavaScript in the backend and some
              other cool functionalities.
            </p>
          </div>
          <div className={style.cardFlex}>
            <a
              href='https://github.com/nevthereal/willsbrix-v3'
              target='_blank'
              rel='noreferrer'
            >
              <motion.button
                initial={{ y: 100, opacity: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 100,
                  transition: {
                    type: "spring",
                    duration: "0.7",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={style.projectButton}
              >
                Github
              </motion.button>
            </a>
            <a href='https://wolffebricks.store' target='blank'>
              <motion.button
                initial={{ y: 100, opacity: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 100,
                  transition: {
                    type: "spring",
                    duration: "0.7",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={style.projectButton}
              >
                Website
              </motion.button>
            </a>
          </div>
        </div>
        <div className={style.projectCard}>
          <div>
            <div className={style.projectFlex}>
              <h3 className={style.projectHeading}>Blog</h3>
              <h3>
                <FontAwesomeIcon icon={faNetworkWired} />
              </h3>
            </div>
            <p className='py-2'>
              This was my first Firebase project. I wanted to create this blog
              to learn the Firebase basics. You can log in, create a post,
              delete it (if you are the creator) and more. I am planning to
              implement a like and perhaps even a comment function. But I have
              other projects that I am working on, so it won't be so soon.
            </p>
          </div>
          <div className={style.cardFlex}>
            <a
              href='https://github.com/nevthereal/blog'
              target='_blank'
              rel='noreferrer'
            >
              <motion.button
                initial={{ y: 100, opacity: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 100,
                  transition: {
                    type: "spring",
                    duration: "0.7",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={style.projectButton}
              >
                Github
              </motion.button>
            </a>
            <a href='https://blog.nevillebrem.com' target='blank'>
              <motion.button
                initial={{ y: 100, opacity: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 100,
                  transition: {
                    type: "spring",
                    duration: "0.7",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={style.projectButton}
              >
                Website
              </motion.button>
            </a>
          </div>
        </div>
        <div className={style.projectCard}>
          <div>
            <div className={style.projectFlex}>
              <h3 className={style.projectHeading}>BarMates</h3>
              <h3>
                <i className='fa-solid fa-user'></i>
                <FontAwesomeIcon icon={faCookieBite} />
              </h3>
            </div>
            <p className='py-2'>
              A landing page for a start-up. I really experimented with
              Framer-Motion and their animations and transitions. I also used
              ConvertKit's API for a newsletter form. It is also my first larger
              scale TypeScript project. I plan to convert it to Next once I
              learn it and integrate an e-commerce functionality.
            </p>
          </div>
          <div className={style.cardFlex}>
            <a
              href='https://github.com/nevthereal/school_pdf_filehub'
              target='_blank'
              rel='noreferrer'
            >
              <motion.button
                initial={{ y: 100, opacity: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 100,
                  transition: {
                    type: "spring",
                    duration: "0.7",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={style.projectButton}
              >
                Github
              </motion.button>
            </a>
            <a href='https://1h-files.netlify.app' target='blank'>
              <motion.button
                initial={{ y: 100, opacity: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 100,
                  transition: {
                    type: "spring",
                    duration: "0.7",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={style.projectButton}
              >
                Website
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
