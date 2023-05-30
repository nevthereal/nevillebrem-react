import React from 'react'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ig_profile_pic from '../assets/insta_post/profile_pic.jpeg'
import postImage from '../assets/insta_post/post.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faPaperPlane, faThumbsUp } from '@fortawesome/free-regular-svg-icons'



const Social = () => {

  const instaIcon = `mr-1 text-xl md:text-2xl`
  const postLink = `https://www.instagram.com/p/CpDu7WqsKjv/`
  const socialHeading = `font-bold font-[Montserrat] mt-4`

  const {ref, inView} = useInView({
    threshold: 0.3,
    triggerOnce: "True"
  })

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
    <div id='social' className='px-4 py-16 text-center'>
        <h1 className='font-[Montserrat] font-bold text-white pb-16'>
          <FontAwesomeIcon icon={faVideo} /> SOCIAL
        </h1>

        
        <div className='md:flex flex-wrap md:flex-nowrap gap-4 place-content-center md:w-[60%] mx-auto'>
          <div className='px-4 pb-2 my-4 card basis-1/2' ref={ref}>
            <h2 className={socialHeading}>Instagram</h2>
            <p>I occasionally post stuff on <a className='link' href="https://instagram.com/nevillebrem" target='_blank' rel='noreferrer'>Instagram</a>.</p>

            <motion.div animate={animation} id='post' className='text-left border-2 border-gray-300 rounded-xl mt-4 mb-8 md:w-72 mx-auto'>
              <div className='grid'>
                <div className='flex m-2'>
                  <a href="https://instagram.com/nevillebrem" target='_blank' rel='noreferrer'><img src={ig_profile_pic} alt="instagram pp" className='rounded-full h-[2.75rem]' /></a>
                  <p className='my-auto ml-2 font-bold'><a href="https://instagram.com/nevillebrem"  target='_blank' rel='noreferrer'>@nevillebrem</a></p>
                </div>
                <a href={postLink} target='_blank' rel='noreferrer'><img src={postImage} alt="grossmeunster zurich" /></a>
              </div>
              <div className='flex gap-4 m-2'>
                  <a href={postLink} target='_blank' rel='noreferrer'><h3 className={instaIcon}><FontAwesomeIcon icon={faThumbsUp} /></h3></a>
                  <a href={postLink} target='_blank' rel='noreferrer'><h3 className={instaIcon}><FontAwesomeIcon icon={faMessage} /></h3></a>
                  <a href={postLink} target='_blank' rel='noreferrer'><h3 className={instaIcon}><FontAwesomeIcon icon={faPaperPlane} /></h3></a>
                </div>
            </motion.div>
          </div>

          <div className='my-4 card basis-1/2'>
            <h2 className={socialHeading}>YouTube</h2>
            <p>I try to upload once a week on my YouTube <a className='link' href="https://youtube.com/@nevbrm">YouTube</a> Channel.</p>
            <motion.iframe animate={animation} className='rounded-xl mx-auto md:mx-4 my-4 border-2 border-gray-300 sm:w-[320px] sm:h-[180px] md:w-[640px] md:h-[360px] w-auto' src="https://www.youtube.com/embed/0FZmu6khOBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></motion.iframe>
          </div>
        </div>
    </div>
  )
}

export default Social