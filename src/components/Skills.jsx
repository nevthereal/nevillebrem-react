import React from 'react'
import Html from './Skills/Html'
import Css from './Skills/Css'
import ReactJS from './Skills/ReactJS'
import Tailwind from './Skills/Tailwind'
import DigitalArt from './Skills/DigitalArt'
import Photoshop from './Skills/Photoshop'
import Premiere from './Skills/Premiere'
import Javascript from './Skills/Javascript'
import Python from './Skills/Python'

const Skills = () => {

    return (
    <div id='skills' className='text-white px-4 py-16'>
        <div className='md:grid md:grid-cols-2 justify-center'>
            <h1 className='text-4xl md:text-5xl mx-auto pb-8 uppercase font-bold text-center my-auto font-[Montserrat]'><i className='fa-solid fa-list-check text-3xl md:text-4xl'></i> Skills</h1>
            <div>
                <Html />
                <Css />
                <Javascript />
                <Python />
                <ReactJS />
                <Tailwind />
                <DigitalArt />
                <Photoshop />
                <Premiere />
            </div>
        </div>
    </div>
  )
}

export default Skills