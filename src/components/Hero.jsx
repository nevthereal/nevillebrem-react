import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  
 // loop typeSpeed={80} backSpeed={60}

  return (
    <div className='h-screen px-4 text-white wave-white'>
        <div className='mt-[-6rem] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='md:text-lg mx-auto font-bold uppercase text-nevBlue'>Hello World. my name is</p>
            <p className='text-5xl md:text-6xl font-bold'>Neville Brem</p>
            <p className='text-gray-400 font-bold text-lg md:text-xl'>I am a </p>
            <a href="#about"><motion.button initial={{ scale: 0, rotate: 180 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, duration: 500}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-3xl font-bold bg-nevBlue mx-auto py-2 px-4 my-4 md:text-lg shadow-nevBlue/30 shadow-lg">Let's Start!</motion.button></a>
        </div>
    </div>
  )
}

export default Hero