import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands';

const style = {
  card: `card p-4 my-4 md:my-0`,
  icon: `text-4xl hover:bg-gray-200 border-2 hover:border-gray-300 p-2 aspect-square rounded-full duration-200 border-gray-100 hover:animate-pulse`,
};

const Social = () => {
  return (
    <div id='social' className='px-4 py-16 text-center'>
      <h1 className='font-[Montserrat] font-bold text-white pb-16'>
        <FontAwesomeIcon icon={faVideo} /> SOCIAL
      </h1>
      <div className='md:grid md:grid-cols-2 md:gap-4 md:mx-20'>
        <div className={style.card}>
          <div className='flex justify-between'>
            <h2 className='font-[Montserrat] font-bold'>Instagram</h2>
            <a href='https://instagram.com/nevillebrem' target='_blank'>
              <FontAwesomeIcon className={style.icon} icon={faInstagram} />
            </a>
          </div>
          <p className='text-left mt-2'>
            I post photography and rowing stuff on my Instagram. Take a look at
            some pictures!
          </p>
        </div>
        <div className={style.card}>
          <div className='flex justify-between'>
            <h2 className='font-[Montserrat] font-bold'>Twitter</h2>
            <a href='https://twitter.com/BremNeville' target='_blank'>
              <FontAwesomeIcon className={style.icon} icon={faTwitter} />
            </a>
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
