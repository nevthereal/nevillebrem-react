import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-white px-4 py-16'>
        <div className='grid md:grid-cols-2 justify-center'>
            <h1 className='text-4xl md:text-5xl mx-auto p-16 uppercase font-bold text-center font-[Montserrat]'><i className='fa-solid fa-circle-info text-3xl md:text-4xl'></i> About me</h1>
            <p className='mb-16 my-auto'>
                My Name is <span className='text-nevBlue'>Neville Brem</span> and I am a student at the MNG Rämibühl in <span className='text-nevBlue'>Zurich, Switzerland</span>. I now am 14 years old.
                I am interested in Tech and Computer Science since <span className='text-nevBlue'>2019</span>. More down below.
                <br />
                <br />
                My main Interests are <span className='text-nevBlue'>Web Development</span>, Crypto (especially NFTs) and Content Creation as well as Editing.
            </p>
        </div>
    </div>
  )
}

export default About