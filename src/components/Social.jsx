import React from "react";
import ig_profile_pic from "../assets/insta_post/profile_pic.jpeg";
import postImage from "../assets/insta_post/post.jpeg";
import logo from "../assets/logo-circle.png";
import podcast from "../assets/logo-podcast.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";

const Social = () => {
  const instaIcon = `mr-1 text-xl md:text-2xl`;
  const postLink = `https://www.instagram.com/p/CpDu7WqsKjv/`;
  const socialHeading = `font-bold font-[Montserrat] mt-4`;

  return (
    <div id='social' className='px-4 py-16 text-center'>
      <h1 className='font-[Montserrat] font-bold text-white pb-16'>
        <FontAwesomeIcon icon={faVideo} /> SOCIAL
      </h1>

      <div className='grid lg:grid-cols-2 gap-4 mx-4 md:mx-20'>
        <div className='px-4 pb-2 my-4 card'>
          <h2 className={socialHeading}>Instagram</h2>
          <p>
            I post photography stuff on{" "}
            <a
              className='link'
              href='https://instagram.com/nevillebrem'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
            .
          </p>

          <div
            id='post'
            className='text-left border-2 border-gray-300 rounded-xl my-4 mx-auto'
          >
            <div className='grid'>
              <div className='flex m-2'>
                <a
                  href='https://instagram.com/nevillebrem'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={ig_profile_pic}
                    alt='instagram pp'
                    className='rounded-full h-[2.75rem]'
                  />
                </a>
                <p className='my-auto ml-2 font-bold'>
                  <a
                    href='https://instagram.com/nevillebrem'
                    target='_blank'
                    rel='noreferrer'
                  >
                    @nevillebrem
                  </a>
                </p>
              </div>
              <a href={postLink} target='_blank' rel='noreferrer'>
                <img src={postImage} alt='grossmeunster zurich' />
              </a>
            </div>
            <div className='flex gap-4 m-2'>
              <a href={postLink} target='_blank' rel='noreferrer'>
                <h3 className={instaIcon}>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </h3>
              </a>
              <a href={postLink} target='_blank' rel='noreferrer'>
                <h3 className={instaIcon}>
                  <FontAwesomeIcon icon={faMessage} />
                </h3>
              </a>
              <a href={postLink} target='_blank' rel='noreferrer'>
                <h3 className={instaIcon}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </h3>
              </a>
            </div>
          </div>
        </div>

        <div className='grid grid-rows-2 gap-4 my-4'>
          <div className='card px-4'>
            <h2 className={socialHeading}>Podcast</h2>
            <p>
              I recently started my Podcast{" "}
              <a href='https://spoti.fi/3CdxMKU' className='link'>
                Coffe and Code
              </a>
              .
            </p>
            <p className='mx-10 my-4'></p>

            <a href='https://spoti.fi/3CdxMKU' target='_blank'>
              <div className='mx-auto text-left card shadow-2xl p-4 bg-gradient-to-b from-blue-900 to-black text-white my-4'>
                <div className='flex flex-col md:flex-row gap-5'>
                  <img
                    src={podcast}
                    className='rounded-xl'
                    alt='podcast logo'
                  />
                  <div className='my-auto'>
                    <h3 className='font-semibold'>
                      Coffee and Code - The Neville Brem Podcast
                    </h3>
                  </div>
                </div>
                <motion.button
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 500,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <p className='border px-4 py-2 rounded-xl my-4 hover:scale-105 ease-in-out duration-100'>
                    Follow
                  </p>
                </motion.button>
              </div>
            </a>
          </div>

          <div id='youtube' className='card px-4'>
            <h2 className={socialHeading}>YouTube</h2>
            <p className='mx-10 my-4'>
              Since a while I occasionally upload YouTube Videos again. You can
              find them on{" "}
              <a
                className='link'
                href='https://youtube.com/@nvbrm'
                target='_blank'
              >
                @nvbrm
              </a>
            </p>

            <a href='https://youtube.com/@nvbrm' target='_blank'>
              <div className='flex mx-auto text-left justify-between card shadow-2xl p-4 flex-col md:flex-row my-4'>
                <div className='flex gap-5'>
                  <img src={logo} alt='YouTube Logo' />
                  <div className='my-auto'>
                    <h3 className='font-bold'>NV BRM</h3>
                    <p className='font-semibold text-gray-400'>@nvbrm</p>
                  </div>
                </div>
                <motion.button
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 500,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <p className='font-bold uppercase bg-red-600 my-4 p-4 rounded-full text-white'>
                    Subscribe
                  </p>
                </motion.button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
