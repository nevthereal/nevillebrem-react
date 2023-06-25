import React from 'react'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faUser, faCartShopping, faNetworkWired } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {

    const projectHeading = `font-bold font-[Montserrat]`
    const projectButton = `mx-auto rounded-3xl font-bold bg-nevBlue shadow-nevBlue/30 shadow-lg md:py-4 py-2 md:px-6 px-3 text-xl`
    const projectCard = `prj-card card group mx-auto`
    const projectFlex = `flex justify-between`
    const cardFlex = `flex justify-center gap-4 my-2`
    const projectGrayText = `text-gray-500`

    const {ref, inView} = useInView({
        threshold: 0.9,
        triggerOnce: "True"
    });
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                y: 0,
                opacity: 100,
                transition: {
                    type: 'spring', duration: '0.7', bounce: 0.3
                }
            });
        }
        if(!inView){
            animation.start({y: 100, opacity: 50 })
        }
    }, [inView])

  return (
    <div id='projects' className='px-4 bg-white py-16'>
        <h1 className='pb-16 uppercase font-bold text-center my-auto font-[Montserrat]'>
            <FontAwesomeIcon icon={faSave} /> Projects
        </h1>
        
        <div className='md:mx-10 md:flex md:justify-center' >
            <div className={projectCard} ref={ref}>
                <div>
                    <div className={projectFlex}>
                        <h3 className={projectHeading}>Blog</h3>
                        <h3><FontAwesomeIcon icon={faNetworkWired} /></h3>
                    </div>
                        <p className='py-2'>This was my first Firebase project. I am constantly adding new stuff to the blog. Feel free to leave a post! There is a lot planned, so keep up to date.</p>
                </div>
                <div className={cardFlex}>
                <a href="https://github.com/nevthereal/blog" target="_blank" rel="noreferrer"><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Github</motion.button></a>
                <a href="https://blog.nevillebrem.com" target='blank'><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Website</motion.button></a>
                </div>
            </div>
            <div className={projectCard}>
                <div>
                    <div className={projectFlex}>
                        <h3 className={projectHeading}>Old Portfolio</h3>
                        <h3><i className="fa-solid fa-user"></i><FontAwesomeIcon icon={faUser} /></h3>
                    </div>
                        <p className='py-2'>This used to be my very first Personal Website. Back then, I used Vanilla CSS to style the Website. I got to play with some SVG Animations. I used the Font Awesome Icons back then, like I still do now!.</p>
                </div>
                <div className={cardFlex}>
                    <a href="https://github.com/nevthereal/personal-website-old" target="_blank" rel="noreferrer"><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Github</motion.button></a>
                    <a href="https://old.nevillebrem.com" target='blank'><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Website</motion.button></a>
                </div>
            </div>
            <div className={projectCard}>
                <div>
                    <div className={projectFlex}>
                        <h3 className={projectHeading}>Will's Brix</h3>
                        <h3><FontAwesomeIcon icon={faCartShopping} /></h3>
                    </div>
                        <p className='py-2'>Me and a Friend wanted to sell our own LEGO Creations online, so I made this Website with React. I used React Routing for the first time for a multi-page system. I used Tailwind CSS to style the Project. For the payment system I used <a href="https://paypal.com/buttons" target='_blank' rel="noreferrer" className='link'>Paypal Buttons</a>.</p>
                </div>
                <div className={cardFlex}>
                    <a href="https://github.com/nevthereal/willsbrix-v2" target="_blank" rel="noreferrer"><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Github</motion.button></a>
                    <a href="https://willsbrix.com" target='blank'><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Website</motion.button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects