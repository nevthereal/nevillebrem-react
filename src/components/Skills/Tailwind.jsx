import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {SiTailwindcss} from 'react-icons/si'

const Tailwind = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <SiTailwindcss className='text-5xl text-[#37bdf9] mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                        I've been working with TailwindCSS in recent time, and I must admit that it's a real time-saver, so I'm planning to use it more! This Website is also styled with TailwindCSS!
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Summer 2022</p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default Tailwind