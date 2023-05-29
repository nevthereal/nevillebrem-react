import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faCrop, faScrewdriverWrench, faToolbox } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {


    const skillCard = `text-black p-2 my-4 md:my-0 card`
    const skillHeading = `font-bold font-[Montserrat] my-2 mx-4`
    const skillList = `font-mono`

    return (
    <div id='skills' className='text-white px-4 py-16 text-center'>
        <div className="md:flex">
            <h1 className='font-[Montserrat] font-bold uppercase md:mx-auto my-auto'>
                <FontAwesomeIcon icon={faToolbox} /> Skills
            </h1>

            <div className='md:grid md:mx-auto grid-cols-2 grid-rows-2 gap-4'>
                <div className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faCode} /> Languages</h2>
                    <ul className={skillList}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>MySQL</li>
                    </ul>
                </div>

                <div className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faCrop} /> Frameworks</h2>
                    <ul className={skillList}>
                        <li>Tailwind CSS</li>
                        <li>React (Routing, DOM)</li>
                        <li>Django</li>
                    </ul>
                </div>

                <div className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faBook} /> Libraries</h2>
                    <ul className={skillList}>
                        <li>Font Awesome <i class="fa-solid fa-icons"></i></li>
                        <li>Framer Motion</li>
                    </ul>
                </div>

                <div className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faScrewdriverWrench} /> Tools</h2>
                    <ul className={skillList}>
                        <li>Visual Studio Code</li>
                        <li>Notion</li>
                        <li>Git</li>
                        <li>TablePlus</li>
                        <li>Hostinger</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills