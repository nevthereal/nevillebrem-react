import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div id='about' className='bg-white px-4 py-16'>
      <div className='md:flex'>
        <div className='mx-auto'>
          <h1 className='mb-8 text-center uppercase font-bold font-[Montserrat]'>
            <FontAwesomeIcon icon={faInfoCircle} bounce /> About
          </h1>
          <p>
            I am a Web Developer, Video Editor and Motion designer based in
            Zurich, Switzerland. I am 16 years old and I am a student at the{" "}
            <a href='https://mng.ch' className='link'>
              MNG Rämibühl
            </a>
            .
          </p>
          <p className='mt-2'>
            I love digital content creation. I am also interested in the latest
            and greatest of Tech and overall in computer science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
