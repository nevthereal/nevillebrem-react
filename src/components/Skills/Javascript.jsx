import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {DiJavascript} from 'react-icons/di'

const Javascript = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <DiJavascript className='text-5xl text-[#eed91a] mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                        I know all the basics of JavaScript. I mostly use it in ReactJS.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Spring 2022</p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default Javascript