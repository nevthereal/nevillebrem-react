import React from 'react'
import ig_profile_pic from '../assets/insta_post/profile_pic.jpeg'
import grossmunster from '../assets/insta_post/grossmunster.jpg'

import {AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'
import {RiSendPlane2Line} from 'react-icons/ri'

const Social = () => {
  return (
    <div id='social' className='pt-4 px-8 lg:py-16 text-center'>
        <h1 className='font-[Montserrat] font-bold text-white lg:pb-8'><i class="fa-solid fa-video text-3xl md:text-4xl"></i> SOCIAL</h1>
        <div className='md:flex flex-wrap md:flex-nowrap gap-4 place-content-center md:w-[60%] mx-auto'>
          <div className='px-4 py-2 my-4 card basis-1/2'>
            <h3 className="font-bold font-[Montserrat]">Instagram</h3>
            <p>I am actively posting photographs and edits on my <a className='link' href="https://instagram.com/nevillebrem" target='_blank' rel='noreferrer'>Instagram</a>.</p>

            <div id='post' className='text-left border-2 border-gray-300 rounded mt-4 md:w-72 mx-auto'>
              <div className='grid'>
                <div className='flex m-2'>
                  <a href="https://instagram.com/nevillebrem" target='_blank' rel='noreferrer'><img src={ig_profile_pic} alt="instagram pp" className='rounded-full h-[2.75rem]' /></a>
                  <p className='my-auto ml-2 font-bold'><a href="https://instagram.com/nevillebrem"  target='_blank' rel='noreferrer'>@nevillebrem</a></p>
                </div>
                <a href="https://www.instagram.com/p/CmcanrFMSsv" target='_blank' rel='noreferrer'><img className='rounded' src={grossmunster} alt="grossmeunster zurich" /></a>
              </div>
              <div className='flex gap-4 m-2'>
                  <a href="https://www.instagram.com/p/CmcanrFMSsv" target='_blank' rel='noreferrer'><AiOutlineHeart className='text-3xl'></AiOutlineHeart></a>
                  <a href="https://www.instagram.com/p/CmcanrFMSsv" target='_blank' rel='noreferrer'><AiOutlineComment className='text-3xl' /></a>
                  <a href="https://www.instagram.com/p/CmcanrFMSsv" target='_blank' rel='noreferrer'><RiSendPlane2Line className='text-2xl' /></a>
                </div>
            </div>
          </div>

          <div className='px-4 py-2 my-4 card basis-1/2'>
            <h3 className="font-bold font-[Montserrat]">YouTube</h3>
            <p>I'm planning to start with YouTube Videos again, so here is my <a className='link' href="https://youtube.com/@nevbrm">YouTube</a> Channel.</p>
            <iframe className='rounded-xl mx-auto my-16 border-2 border-gray-300 sm:w-[320px] sm:h-[180px] md:w-[640px]  md:h-[360px] w-64 h-36' src="https://www.youtube.com/embed/upFU6sJDQvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
    </div>
  )
}

export default Social