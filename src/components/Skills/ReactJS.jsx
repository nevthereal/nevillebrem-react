import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {FaReact} from 'react-icons/fa'

const ReactJS = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <FaReact className='text-5xl text-[#61dbfb] mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                        I am in the early stages of learning the JavaScript Framework ReactJS. I am using a few Libraries, such as Framer Motion, React-Typed as well as React-Icons for this project. This is one of my first React projects.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Summer 2022</p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default ReactJS