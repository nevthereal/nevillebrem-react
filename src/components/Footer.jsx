import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className='px-4 py-8 bg-white'>
      <p className='text-center font-bold'>
        Copyright{" "}
        <a href='https://github.com/nevthereal' className='link'>
          Neville Brem
        </a>
        . All Rights reserved
      </p>
    </div>
  );
};

export default Footer;
