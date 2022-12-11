import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-white px-4 py-16'>
        <div className='grid md:grid-cols-2 justify-center'>
            <h1 className='text-4xl md:text-5xl mx-auto p-16 md:my-auto uppercase font-bold text-center font-[Montserrat]'><i className='fa-solid fa-circle-info text-3xl md:text-4xl'></i> About me</h1>
            <p className='my-auto'>
                My Name is <span className='important'>Neville Brem</span> and I am a student at the MNG Rämibühl in <span className='important'>Zurich, Switzerland</span>. I am 15 years old.
                My life is focused on Tech, <span className='important'>Computer Science</span> and Content Creation since <span className='important'>2019</span>. More down below.
                <br />
                <br />
                My main Interests are <span className='important'>Web Development</span>, Crypto (especially <span className='important'>NFTs</span>), Content Creation, Music and I am playing the <span className='important'>Piano</span>. <br />
                I <span className='important'>love creating</span> stuff and <span className='important'>editing</span> videos or photos. I am familiar with the <span className='important'>Adobe Creative Cloud</span> (more later).  <br />
                I am planning to revive my YouTube channel soon, so be ready for this.
            </p>
        </div>
    </div>
  )
}

export default About