import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div id='social' className='px-4 py-16 text-center'>
      <h1 className='font-[Montserrat] font-bold text-white pb-16'>
        <FontAwesomeIcon icon={faVideo} /> SOCIAL
      </h1>
      <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-none gap-16 md:mx-16'>
        <div className='card p-4'>
          <div className='flex justify-between'>
            <h2 className='font-[Montserrat] font-bold'>Instagram</h2>
            <FontAwesomeIcon className='text-4xl' icon={faInstagram} />
          </div>
          <p className='text-left mt-2'>
            I post photography and rowing stuff on my Instagram. Take a look at
            some pictures!
          </p>
        </div>
        <div className='card p-4'>
          <div className='flex justify-between'>
            <h2 className='font-[Montserrat] font-bold'>Twitter</h2>
            <FontAwesomeIcon className='text-4xl' icon={faXTwitter} />
          </div>
          <p className='text-left mt-2'>
            I try to be more active on Twitter, but follow me to keep up to date
            with some stuff in tech, development and filmography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
