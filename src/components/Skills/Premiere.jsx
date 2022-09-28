import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {SiAdobepremierepro} from 'react-icons/si'

const Premiere = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <SiAdobepremierepro className='text-5xl text-[#02005b] mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                        Since I have a YouTube Channel, I have under Intermediate Skill in Adobe Premiere Pro.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Early 2022</p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default Premiere