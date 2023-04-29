import React from 'react'

const Projects = () => {

    const projectHeading = `font-bold font-[Montserrat]`
    const projectButton = `mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl`
    const projectCard = `prj-card card group`
    const projectFlex = `flex justify-between`

  return (
    <div id='projects' className='px-4 bg-white py-16'>
        <h1 className='mx-auto pb-16 uppercase font-bold text-center my-auto font-[Montserrat]'><i className='fa-solid fa-diagram-project text-3xl md:text-4xl'></i> Projects</h1>
        
        <div className='lg:grid lg:grid-cols-3 justify-center md:mx-10'>
            <div className={projectCard}>
                <div>
                    <div className='flex justify-between'>
                        <h3 className={projectHeading}>The[Creators] - NFT Homepage</h3>
                        <h3><i className="fa-solid fa-palette"></i></h3>
                    </div>
                    <p className='py-2'>My first Project was a Homepage, which contains infos about <a href="https://www.janlampert.com" rel="noreferrer" className='link' target="_blank">Jan Lampert's</a> and my NFT Collections. You can find the Link down here 👇.</p>
                </div>
                <div className='flex'>
                    <button className={projectButton}><a href="https://github.com/nevthereal/TheCreators" target="_blank" rel="noreferrer">Github</a></button>
                    <button className={projectButton}><a href="https://the-creators.netlify.app" target='blank'>Website</a></button>
                </div>
            </div>
            <div className={projectCard}>
                <div>
                    <div className={projectFlex}>
                        <h3 className={projectHeading}>Old Portfolio</h3>
                        <h3><i className="fa-solid fa-circle-info"></i></h3>
                    </div>
                    <p className='py-2'>This was my Portfolio before I learned ReactJS. I built it with Vanilla CSS and the only Library I was using, was <a href="https://fontawesome.com" target="_blank" rel='noreferrer' className='link' >Font Awesome</a>. I also used some SVG animations here and there.</p>
                </div>
                <div className='flex'>
                    <button className={projectButton}><a href="https://github.com/nevthereal/personal-website-old" target="_blank" rel="noreferrer">Github</a></button>
                    <button className={projectButton}><a href="https://old.nevillebrem.com" target='blank'>Website</a></button>
                </div>
            </div>
            <div className={projectCard}>
                <div>
                    <div className='flex justify-between'>
                        <h3 className={projectHeading}>Will's Brix - Online Store</h3>
                        <h3><i className="fa-solid fa-cart-shopping"></i></h3>
                    </div>
                    <p className='py-2'>Me and a Friend wanted to sell our own LEGO Creations online, and I made this Website In August 2022, I reworked the whole Website with React.js and it was the first Time, I used React Routing for the multi-page system. I used <a href="https://tailwindcss.com" rel="noreferrer" target='_blank' className='link'>Tailwind CSS</a> to style the Project. For the payment system I used <a href="https://paypal.com/buttons" target='_blank' rel="noreferrer" className='link'>Paypal Buttons</a>.</p>
                </div>
                <div className='flex'>
                    <button className={projectButton}><a href="https://github.com/nevthereal/willsbrix-v2" target="_blank" rel="noreferrer">Github</a></button>
                    <button className={projectButton}><a href="https://willsbrix.com" target='blank'>Website</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects