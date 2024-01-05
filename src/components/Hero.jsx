import React from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const professions = useRef(null);

  useEffect(() => {
    const typed = new Typed(professions.current, {
      strings: ["Web Developer", "Tech Enthusiast", "Digital Creator"],
      typeSpeed: 80,
      backSpeed: 60,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const nevilleBrem = [
    "N",
    "e",
    "v",
    "i",
    "l",
    "l",
    "e",
    " ",
    "B",
    "r",
    "e",
    "m",
  ];

  return (
    <div className='h-screen px-4 text-white wave-white'>
      <div className='mt-[-6rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-lg mx-auto font-bold uppercase text-white'>
          Hello World. my name is
        </p>
        <div className='relative mx-auto group'>
          <div className='absolute inset-0 bg-nevBlue blur-xl rounded-full opacity-25 group-hover:opacity-50 ease-in-out duration-200'></div>
          <p className='text-nevBlue relative text-5xl md:text-6xl font-black'>
            {nevilleBrem.map((letter, index) => {
              return (
                <span
                  className='hover:text-white duration-200 ease-in-out'
                  key={index}
                >
                  {letter}
                </span>
              );
            })}
          </p>
        </div>
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
          className='rounded-3xl font-bold bg-nevBlue mx-auto py-2 px-4 my-4 md:text-lg shadow-nevBlue/50 hover:shadow-nevBlue/75 shadow-lg'
        >
          <a href='#about'>Dive in!</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
