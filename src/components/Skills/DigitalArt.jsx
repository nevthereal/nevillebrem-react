import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {RiBrush4Line} from 'react-icons/ri'

const DigitalArt = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='p-2 max-w-md'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout onClick={() => setIsOpen(!isOpen)} className='mx-auto text-center bg-white p-4 rounded-2xl cursor-pointer'>
                    <motion.h2 layout>
                    <RiBrush4Line className='text-5xl text-emerald-500 mx-auto' />
                    </motion.h2>
                    {isOpen && (
                    <motion.div className='text-center text-black'>
                        <p>
                        Since 2020, I do Digital Art in Procreate. Find out more on my Instagram.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>late 2020</p>
                    </motion.div>
                    )}
                </motion.div>
        </div>
  )
}

export default DigitalArt