import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div id='about' className='bg-white px-4 py-16'>
        <div className='justify-center md:mx-40'>
            <h1 className='mx-auto mb-8 uppercase font-bold text-center font-[Montserrat]'>
              <FontAwesomeIcon icon={faInfoCircle} bounce /> About
            </h1>
            <p>
              I am a Web Developer, Video Editor and Motion designer based in Zurich, Switzerland. I am 15 years old and I am a student at the <a href="https://mng.ch" className='link'>MNG Rämibühl</a>.
            </p>
            <p className='mt-2'>
              I love creating content and sharing it. For this, I use products like Premiere Pro, After Effects, Illustrator and more from the Adobe Creative Cloud.
            </p>
            <p>
              My other interests are tech in general, productivity, self-improvement, rowing and I play the piano.
            </p>
        </div>
    </div>
  )
}

export default About