import React from 'react'
import {
    SiTwitter,
    SiGithub,
    SiFiverr,
    SiInstagram,
    SiYoutube
    } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='bg-white px-4 py-8'>
        <div className='flex justify-between md:justify-center md:gap-10'>
            <div className='flex gap-3 md:gap-6 my-auto mx-auto'>
                <a className='footer-btn' rel='noreferrer' href="https://twitter.com/bremneville" target='_blank'><SiTwitter /></a>
                <a className='footer-btn' rel='noreferrer' href="https://github.com/nevthereal" target='_blank'><SiGithub /></a>
                <a className='footer-btn' rel='noreferrer' href="https://fiverr.com/nevbruhtv" target='_blank'><SiFiverr /></a>
                <a className='footer-btn' rel='noreferrer' href="https://instagram.com/neville_artwork" target='_blank'><SiInstagram /></a>
                <a className='footer-btn' rel='noreferrer' href="https://www.youtube.com/channel/UC8ZQP0c8D5sHkfAPzL9jNBA" target='_blank'><SiYoutube /></a>
            </div>
        </div>
        <p className='text-center pt-8 font-bold'>Copyright <a href="https://twitter.com/bremneville">Neville Brem, Switzerland.</a> All Rights reserved</p>
    </div>
  )
}

export default Footer