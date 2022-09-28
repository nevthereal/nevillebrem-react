import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {FaCss3Alt} from 'react-icons/fa'

const Css = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <FaCss3Alt className='text-5xl text-[#264de4] mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                            I am styling with CSS as long as I have benn coding with HTML.
                            I'm especially interested and good in Animation with Keyframes and Transitions.
                            <p className='font-extrabold text-gray-400 text-sm uppercase'>Early 2022</p>
                        </p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default Css