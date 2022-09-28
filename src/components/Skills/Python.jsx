import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {FaPython} from 'react-icons/fa'

const Css = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <FaPython className='text-5xl text-[#2e6d9a] mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                            I am learning Python in School at the Moment and I am working on my Skills in Object-Oriented Programming
                            <p className='font-extrabold text-gray-400 text-sm uppercase'>Fall 2022</p>
                        </p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default Css