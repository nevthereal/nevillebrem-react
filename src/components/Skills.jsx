import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaPython, FaReact} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {SiTailwindcss, SiAdobephotoshop, SiAdobepremierepro} from 'react-icons/si'
import {RiBrush4Line} from 'react-icons/ri'

const Skills = () => {

    return (
    <div id='skills' className='text-white px-4 py-16'>
        <div className='md:grid md:grid-cols-2 justify-center'>
            <h1 className='text-4xl md:text-5xl mx-auto pb-8 uppercase font-bold text-center my-auto font-[Montserrat]'><i className='fa-solid fa-list-check text-3xl md:text-4xl'></i> Skills</h1>
            <div className='flex flex-col gap-y-4 md:mx-10'>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                    <AiFillHtml5 className='text-5xl text-[#FF5733] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                        I am an intermediate HTML developer. I'm learning HTML since 2021 and I'm learning constantly more.
                        Learn more down on the <a href="#projects">Projects</a> Section!
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Fall 2021</p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                    <FaCss3Alt className='text-5xl text-[#264de4] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            I am styling with CSS as long as I have benn coding with HTML.
                            I'm especially interested and good in Animation with Keyframes and Transitions.
                            <p className='font-extrabold text-gray-400 text-sm uppercase'>Early 2022</p>
                        </p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                    <DiJavascript className='text-5xl text-[#eed91a] mx-auto' />
                    <div className='text-center text-black'>
                    <p>
                        I've been working with JavaScript for a while now. I mostly use it in ReactJS
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Spring 2022</p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                <FaPython className='text-5xl text-[#2e6d9a] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            I am learning Python in School at the Moment and I am working on my Skills in Object-Oriented Programming
                            <p className='font-extrabold text-gray-400 text-sm uppercase'>Fall 2022</p>
                        </p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                <FaReact className='text-5xl text-[#61dbfb] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            I am in the early stages of learning the JavaScript Framework ReactJS. I am using a few Libraries, such as Framer Motion, React-Typed as well as React-Icons for this project. This is one of my first React projects.
                        </p>
                    <p className='font-extrabold text-gray-400 text-sm uppercase'>Summer 2022</p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                <SiTailwindcss className='text-5xl text-[#37bdf9] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            I've been working with TailwindCSS in recent time, and I must admit that it's a real time-saver, so I'm planning to use it more! This Website is also styled with TailwindCSS!
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Summer 2022</p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                <RiBrush4Line className='text-5xl text-emerald-500 mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            Since 2020, I do Digital Art in Procreate. Find out more on my Instagram.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>late 2020</p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                <SiAdobephotoshop className='text-5xl text-[#001d36] mx-auto icon' />
                    <div className='text-center text-black'>
                    <p>
                        I am in the upper intermediate stage of Photoshop Editing, especially with compositing, lighting and shadowing.
                        I am a Photoshop Editor since Fall 2021.
                    </p>
                    <p className='font-extrabold text-gray-400 text-sm uppercase'>Mid 2021</p>
                    </div>
                </div>
                <div className='mx-auto text-center bg-white p-4 rounded-2xl md: w-4/5 md:hover:scale-105 duration-200 ease-in-out bg-gray-110 border-2 border-gray-300'>
                <SiAdobepremierepro className='text-5xl text-[#02005b] mx-auto' />
                    <div className='text-center text-black'>
                        <p>
                            Since I have a YouTube Channel, I have Intermediate Skill in Adobe Premiere Pro.
                            I am planning to quit Adobe's Premiere though, because I am interested in Blackmagic's DaVinci Resolve.
                        </p>
                        <p className='font-extrabold text-gray-400 text-sm uppercase'>Early 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills