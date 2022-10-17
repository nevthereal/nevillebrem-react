import React from 'react'
import oldLogo from '../assets/n.png'
import tcLogo from '../assets/TheCreatorsLogo.png'
import wbLogo from '../assets/wb_logo.png'
import artLogo from '../assets/art.png'

const Projects = () => {


  return (
    <div id='projects' className='px-4 bg-white py-16'>
        <h1 className='text-4xl md:text-5xl mx-auto pb-8 uppercase font-bold text-center my-auto font-[Montserrat]'><i className='fa-solid fa-diagram-project text-3xl md:text-4xl'></i> Projects</h1>
        <div className='md:flex justify-center'>
            <div className='flex flex-col justify-between m-2 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg max-w-md shadow-xl mx-auto md:mx-4 duration-150 group'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-xl font-[Montserrat]'>The[Creators] - NFT Homepage</h1>
                        <a href="https://thecreatorsnft.com" target='_blank' rel="noreferrer"><img src={tcLogo} alt="thecreatorslogo" className='w-14 hover:rotate-12 duration-150' /></a>
                    </div>
                    <p className='py-2'>My first Project was a Homepage, which contains infos about <a href="https://www.janlampert.com" rel="noreferrer" className='link' target="_blank">Jan Lampert's</a> and my NFT Collections. You can find the Link down here 👇.</p>
                </div>
                <div className='flex md:opacity-0 md:scale-75 md:group-hover:opacity-100 md:group-hover:scale-100 duration-300'>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://github.com/nevthereal/TheCreators" target="_blank" rel="noreferrer">Github</a></button>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://thecreatorsnft.com" target='blank'>Website</a></button>
                </div>
            </div>
            <div className='flex flex-col justify-between m-2 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg max-w-md shadow-xl mx-auto md:mx-4 duration-150 group'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-xl font-[Montserrat]'>Artwork Gallery</h1>
                        <a href="https://thecreatorsnft.com" target='_blank' rel="noreferrer"><img src={artLogo} alt="art Logo" className='w-14 hover:rotate-12 duration-150' /></a>
                    </div>
                    <p className='py-2'>For my <a href="https://instagram.com/neville_artwork" target="_blank" rel="noreferrer" className='link'>Art-Instagram-Page</a> I wanted to make a website with a little overview for all my favourite Artworks! Made with React x Tailwind.</p>
                </div>
                <div className='flex md:opacity-0 md:scale-75 md:group-hover:opacity-100 md:group-hover:scale-100 duration-300'>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://github.com/nevthereal/artpage" target="_blank" rel="noreferrer">Github</a></button>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://art.nevillebrem.com" target='blank'>Website</a></button>
                </div>
            </div>
            <div className='flex flex-col justify-between m-2 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg max-w-md shadow-xl mx-auto md:mx-4 duration-150 group'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-xl font-[Montserrat]'>Old Portfolio</h1>
                        <a href="https://old.nevillebrem.com" target='_blank' rel="noreferrer"><img src={oldLogo} alt="old portfolio logo" className='w-14 rounded-xl hover:rotate-12 duration-150'/></a>
                    </div>
                    <p className='py-2'>This was my Portfolio before I learned ReactJS. I built it with Vanilla CSS and the only Library I was using, was <a href="https://fontawesome.com" target="_blank" rel='noreferrer' className='link' >Font Awesome</a>. I also used some SVG animations here and there.</p>
                </div>
                <div className='flex md:opacity-0 md:scale-75 md:group-hover:opacity-100 md:group-hover:scale-100 duration-300'>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://github.com/nevthereal/personal-website-old" target="_blank" rel="noreferrer">Github</a></button>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://old.nevillebrem.com" target='blank'>Website</a></button>
                </div>
            </div>
            <div className='flex flex-col justify-between m-2 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg max-w-md shadow-xl mx-auto md:mx-4 duration-150 group'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-xl font-[Montserrat]'>Will's Brix - Online Store</h1>
                        <a href="https://willsbrix.com" target='_blank' rel="noreferrer"><img src={wbLogo} alt="wills brix logo" className='w-14 hover:rotate-12 duration-150'/></a>
                    </div>
                    <p className='py-2'>Me and a Friend wanted to sell our own ®LEGO Creations online, and I made this Website In August 2022, I reworked the whole Website with React.js and it was the first Time, I used React Routing for the multi-page system. I used <a href="https://tailwindcss.com" rel="noreferrer" target='_blank' className='link'>Tailwind CSS</a> to style the Project. For the payment system I used <a href="https://paypal.com/buttons" target='_blank' rel="noreferrer" className='link'>Paypal Buttons</a>.</p>
                </div>
                <div className='flex md:opacity-0 md:scale-75 md:group-hover:opacity-100 md:group-hover:scale-100 duration-300'>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://github.com/nevthereal/willsbrix-v2" target="_blank" rel="noreferrer">Github</a></button>
                    <button className='mx-auto rounded-xl bg-nevBlue hover:shadow-lg duration-300 py-4 px-6 font-bold text-xl'><a href="https://willsbrix.com" target='blank'>Website</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects