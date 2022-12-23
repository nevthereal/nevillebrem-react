import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom} from 'react-icons/si'
import {RiBrush4Line} from 'react-icons/ri'

const Skills = () => {

    return (
    <div id='skills' className='text-white px-4 py-16'>
        <div className='md:grid md:grid-cols-2 justify-center'>
            <h1 className='text-4xl md:text-5xl mx-auto pb-8 uppercase font-bold text-center my-auto font-[Montserrat]'><i className='fa-solid fa-list-check text-3xl md:text-4xl'></i> Skills</h1>
            <div className='flex flex-col gap-y-4 md:mx-10'>
                <div className='mx-auto text-center p-4 md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 card'>
                    <AiFillHtml5 className='text-5xl text-[#FF5733] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                        I am an intermediate HTML developer. I'm learning HTML since 2021 and I'm learning constantly more.
                        Learn more down on the <a href="#projects">Projects</a> Section!
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Fall 2021</p>
                    </div>
                </div>
                <div className='mx-auto text-center p-4 md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 card'>
                    <FaCss3Alt className='text-5xl text-[#264de4] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            I am styling with CSS as long as I have benn coding with HTML.
                            I like to use it for transitions and animation, whatever, I tend to use <a className='link' href="https://tailwindcss.com" target='_blank' rel='noreferrer'>Tailwind CSS</a> nowadays, since it's far more convenient and more comfortable to use.
                            <p className='font-extrabold text-gray-400 text-sm uppercase'>Early 2022</p>
                        </p>
                    </div>
                </div>
                <div className='mx-auto text-center p-4 md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 card'>
                    <DiJavascript className='text-5xl text-[#eed91a] mx-auto' />
                    <div className='text-center text-black'>
                    <p>
                        I've been working with JavaScript for a while now. I've also learned a framework, React.JS, which this website was built with. I have some experiences with node.js, but I am planning to improve them.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Spring 2022</p>
                    </div>
                </div>
                <div className='mx-auto text-center p-4 md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 card'>
                <SiAdobelightroom className='text-5xl text-[#001d36] mx-auto icon' />
                    <div className='text-center text-black'>
                    <p>
                        Since I am a casual photographer, I am editing these photos in Lightroom. I can do everything, from Light adjustments to Color Grading/Correction. But I am still learning. You can find out more on the <a className='link' href="#social">Social</a> Section.
                    </p>
                    <p className='font-extrabold text-gray-400 text-sm uppercase'>Mid 2021</p>
                    </div>
                </div>
                <div className='mx-auto text-center p-4 md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 card'>
                <SiAdobephotoshop className='text-5xl text-[#001d36] mx-auto icon' />
                    <div className='text-center text-black'>
                    <p>
                        I am in the intermediate stage of Photoshop Editing, especially with compositing, lighting and shadowing.
                    </p>
                    <p className='font-extrabold text-gray-400 text-sm uppercase'>Mid 2021</p>
                    </div>
                </div>
                <div className='mx-auto text-center p-4 md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 card'>
                <SiAdobepremierepro className='text-5xl text-[#02005b] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            Since I had a YouTube Channel, I have Intermediate Skill in Adobe Premiere Pro.
                            I love to edit Videos and create stuff in Premiere. I am again planing to make videos on my <a className='link' href="https://www.youtube.com/channel/UC8ZQP0c8D5sHkfAPzL9jNBA" target='_blank' rel='noreferrer'>YouTube</a>.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Early 2022</p>
                    </div>
                </div>
                <div className='mx-auto text-center p-4 md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 card'>
                    <RiBrush4Line className='text-5xl text-emerald-500 mx-auto' />
                        <div className='text-center text-black'>
                            <p>
                                Since 2020, I do Digital Art in Procreate. Find out more on my Instagram.
                            </p>
                            <p className='font-extrabold text-gray-400 text-sm uppercase'>late 2020</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Skills