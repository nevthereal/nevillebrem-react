import React from 'react'

const Skills = () => {


    const skillCard = `text-black p-2 my-4 md:my-0 card`
    const skillHeading = `font-bold font-[Montserrat] my-2 mx-4`
    const skillList = `font-mono mb-2`

    return (
    <div id='skills' className='text-white px-4 py-16 text-center'>
        <div className="md:flex">
            <h1 className='font-[Montserrat] font-bold uppercase md:mx-auto my-auto'><i className="fa-solid fa-toolbox"></i> Skills</h1>

            <div className='md:grid md:mx-auto grid-cols-2 grid-rows-2 gap-4'>
                <div className={skillCard}>
                    <h2 className={skillHeading}><i className="fa-solid fa-code"></i> Languages</h2>
                    <ul className={skillList}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>MySQL</li>
                    </ul>
                </div>

                <div className={skillCard}>
                    <h2 className={skillHeading}><i className="fa-solid fa-crop"></i> Frameworks</h2>
                    <ul className={skillList}>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                        <li>Django</li>
                    </ul>
                </div>

                <div className={skillCard}>
                    <h2 className={skillHeading}><i className="fa-solid fa-book"></i> Libraries</h2>
                    <ul className={skillList}>
                        <li>Font Awesome <i class="fa-solid fa-icons"></i></li>
                        <li>Firebase</li>
                        <li>Framer Motion</li>
                    </ul>
                </div>

                <div className={skillCard}>
                    <h2 className={skillHeading}> <i className="fa-solid fa-screwdriver-wrench"></i> Tools</h2>
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