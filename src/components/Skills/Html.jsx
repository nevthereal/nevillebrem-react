import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {AiFillHtml5} from 'react-icons/ai'

const Html = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <AiFillHtml5 className='text-5xl text-[#FF5733] mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                        I am an intermediate HTML developer. I'm learning HTML since 2021 and I'm learning constantly more.
                        Learn more down on the <a href="#projects">Projects</a> Section!
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Fall 2021</p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default Html