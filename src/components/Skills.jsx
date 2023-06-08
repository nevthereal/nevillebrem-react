import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faCrop, faScrewdriverWrench, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {

    // tailwind classes
    const skillCard = `text-black p-2 my-4 md:my-0 card`
    const skillHeading = `font-bold font-[Montserrat] my-2 mx-4`
    const skillList = `font-mono`

    // animation
    const {ref, inView} = useInView({
        threshold: 0.4,
        triggerOnce: "True"
    });

    const slideRight = useAnimation()
    const slideLeft = useAnimation()

    useEffect(() => {
        if(inView){
            slideRight.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1, bounce: 0.2,
                }
            })
        }
        if(!inView){
            slideRight.start({
                x: -200,
            })
        }
    })

    useEffect(() => {
        if(inView){
            slideLeft.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1, bounce: 0.2,
                }
            })
        }
        if(!inView){
            slideLeft.start({
                x: 200,
            })
        }
    }, [inView])

    return (
    <div id='skills' className='text-white px-4 py-16 text-center overflow-x-hidden'>
        <div className="md:flex">
            <h1 className='font-[Montserrat] font-bold uppercase md:mx-auto my-auto'>
                <FontAwesomeIcon icon={faToolbox} /> Skills
            </h1>

            <div className='md:grid md:mx-auto md:grid-cols-2 md:grid-rows-2 md:gap-4' ref={ref}>
                
                <motion.div animate={slideRight} className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faCode} /> Languages</h2>
                    <ul className={skillList}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </motion.div>

                <motion.div animate={slideLeft} className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faCrop} /> Frameworks</h2>
                    <ul className={skillList}>
                        <li>Tailwind CSS</li>
                        <li>React (Routing, DOM)</li>
                    </ul>
                </motion.div>

                <motion.div animate={slideRight} className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faBook} /> Libraries</h2>
                    <ul className={skillList}>
                        <li>Font Awesome</li>
                        <li>Framer Motion</li>
                        <li>Stripe</li>
                        <li>ThreeJS</li>
                    </ul>
                </motion.div>

                <motion.div animate={slideLeft} className={skillCard}>
                    <h2 className={skillHeading}><FontAwesomeIcon icon={faScrewdriverWrench} /> Tools</h2>
                    <ul className={skillList}>
                        <li>Visual Studio Code</li>
                        <li>Firebase (Auth, Firestore, Storage)</li>
                        <li>Git & GitHub</li>
                        <li>Netlify</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Skills