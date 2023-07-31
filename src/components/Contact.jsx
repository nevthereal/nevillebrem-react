import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faShare } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const ContactHeader = `uppercase font-black`;
  const contactDivision = `p-6 card my-4 md:my-0`;

  return (
    <div id='contact' className='px-4 py-16 bg-white'>
      <div className=' pb-8'>
        <h1 className='mx-auto uppercase font-bold text-center my-auto font-[Montserrat] pb-16'>
          <FontAwesomeIcon icon={faShare} /> Contact
        </h1>

        <div className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:mx-20'>
          <div className={contactDivision}>
            <h2 className={ContactHeader}>Email:</h2>
            <p>
              Contact me on{" "}
              <a href='mailto:contact@nevillebrem.com' className='link'>
                contact@nevillebrem.com
              </a>
            </p>
          </div>
          <div className={contactDivision}>
            <h2 className={ContactHeader}>Twitter:</h2>
            <p>
              Write me a DM at{" "}
              <a href='https://twitter.com/bremneville' className='link'>
                @BremNeville
              </a>
            </p>
          </div>
          <div className={contactDivision}>
            <h2 className={ContactHeader}>Github:</h2>
            <p>
              Take a look at my Repositories:{" "}
              <a href='https://github.com/nevthereal' className='link'>
                @nevthereal
              </a>
            </p>
          </div>
          <div className={contactDivision}>
            <h2 className={ContactHeader}>Upwork:</h2>
            <p>
              Hire me on{" "}
              <a
                href='https://www.upwork.com/freelancers/~01a24589aa24a17b0e'
                className='link'
              >
                Upwork
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
