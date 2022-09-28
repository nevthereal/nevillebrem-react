import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {SiAdobephotoshop} from 'react-icons/si'

const Photoshop = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <SiAdobephotoshop className='text-5xl text-[#001d36] mx-auto icon' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                        I am in the upper intermediate stage of Photoshop Editing, especially with compositing, lighting and shadowing.
                        I am a Photoshop Editor since Fall 2021.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Mid 2021</p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default Photoshop