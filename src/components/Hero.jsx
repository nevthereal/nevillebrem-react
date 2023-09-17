import React from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const professions = useRef(null);

  useEffect(() => {
    const typed = new Typed(professions.current, {
      strings: [
        "Web Developer",
        "Video Editor",
        "Motion Designer",
        "Content Creator",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='h-screen px-4 text-white wave-white'>
      <div className='mt-[-6rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-lg mx-auto font-bold uppercase text-nevBlue'>
          Hello World. my name is
        </p>
        <p className='text-5xl md:text-6xl font-bold'>Neville Brem</p>
        <p className='text-gray-400 font-bold text-lg md:text-xl'>
          I am a <span ref={professions}></span>{" "}
        </p>
        <motion.button
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 500,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='rounded-3xl font-bold bg-nevBlue mx-auto py-2 px-4 my-4 md:text-lg shadow-nevBlue/30 shadow-lg hover:animate-pulse'
        >
          <a href='#about'>Let's Start!</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
