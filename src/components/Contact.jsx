import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faShare } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const style = {
    contactHeader: `uppercase font-black`,
    contactDivision: `p-6 card my-4 md:my-0`,
  };

  return (
    <div id='contact' className='px-4 py-16 bg-white'>
      <div className=' pb-8'>
        <h1 className='mx-auto uppercase font-bold text-center my-auto font-[Montserrat] pb-16'>
          <FontAwesomeIcon icon={faShare} /> Contact
        </h1>

        <div className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:mx-20'>
          <div className={style.contactDivision}>
            <h2 className={style.contactHeader}>Email:</h2>
            <p>
              Contact me on{" "}
              <a href='mailto:contact@nevillebrem.com' className='link'>
                contact@nevillebrem.com
              </a>
            </p>
          </div>
          <div className={style.contactDivision}>
            <h2 className={style.contactHeader}>Twitter:</h2>
            <p>
              Write me a DM at{" "}
              <a href='https://twitter.com/bremneville' className='link'>
                @BremNeville
              </a>
            </p>
          </div>
          <div className={style.contactDivision}>
            <h2 className={style.contactHeader}>Github:</h2>
            <p>
              Take a look at my Repositories:{" "}
              <a href='https://github.com/nevthereal' className='link'>
                @nevthereal
              </a>
            </p>
          </div>
          <div className={style.contactDivision}>
            <h2 className={style.contactHeader}>Fiverr:</h2>
            <p>
              Hire me on{" "}
              <a href='https://www.fiverr.com/nevthereal' className='link'>
                Fiverr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
