import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-white px-4 py-16'>
        <div className='justify-center md:mx-40'>
            <h1 className='mx-auto mb-8 uppercase font-bold text-center font-[Montserrat]'><i className='fa-solid fa-circle-info text-3xl md:text-4xl'></i> About</h1>
            <p className='my-auto'>
                My Name is Neville Brem and I am a student at the MNG Rämibühl in Zurich, Switzerland. I am 15 years old.
                My life is focused on Tech, Computer Science and Content Creation since 2019. More down below.
                <br />
                <br />
                My main Interests are Web Development, Crypto (especially NFTs), Content Creation, Music and I am playing the Piano. <br />
                I love creating stuff and editing videos or photos. I am familiar with the Adobe Creative Cloud (more later).  <br />
                I am planning to start with <a className='link' href="#social">YouTube</a>, so stay tuned, you don't want to miss that!
            </p>
        </div>
    </div>
  )
}

export default About