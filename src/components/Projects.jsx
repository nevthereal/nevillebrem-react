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
                        <p className='py-2'>This was my first Firebase project. I wanted to create this blog to learn the Firebase basics. You can log in, create a post, delete it (if you are the creator) and more. I am planning to implement a like and perhaps even a comment function. But I have other projects that I am working on, so it won't be so soon.</p>
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
                        <p className='py-2'>This was the predecessor of this website. I didn't use any Libraries or Frameworks back then, only Vanilla HTML and CSS. I played around with Animations and Tranisitions and also SVG Animations. I did use the Font Awesome icons already back then, which I still use now!</p>
                </div>
                <div className={cardFlex}>
                    <a href="https://github.com/nevthereal/portfolio-old" target="_blank" rel="noreferrer"><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Github</motion.button></a>
                    <a href="https://old.nevillebrem.com" target='blank'><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Website</motion.button></a>
                </div>
            </div>
            <div className={projectCard}>
                <div>
                    <div className={projectFlex}>
                        <h3 className={projectHeading}>Will's Brix</h3>
                        <h3><FontAwesomeIcon icon={faCartShopping} /></h3>
                    </div>
                        <p className='py-2'>Me and a friend wanted to sell our LEGO Designs online, so I thought I'd code this little website. What used to be just a little project where I didn't put much effort in it, turned out to be one of my most complex projects ever! The implementation of many more advanced technologies and learning how to use Stripe with a cart got the website to the state where it is now!</p>
                </div>
                <div className={cardFlex}>
                    <a href="https://github.com/nevthereal/willsbrix-v3" target="_blank" rel="noreferrer"><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Github</motion.button></a>
                    <a href="https://willsbrix.com" target='blank'><motion.button animate={animation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={projectButton}>Website</motion.button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects