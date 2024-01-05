import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faShare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const style = {
    contactHeader: `uppercase font-black`,
    contactDivision: `p-6 card my-4 md:my-0`,
  };

  return (
    <div id='contact' className='px-4 py-16'>
      <div className=' pb-8'>
        <h1 className='mx-auto uppercase font-bold text-center my-auto font-[Montserrat] pb-16 text-white'>
          <FontAwesomeIcon icon={faShare} /> Contact
        </h1>
        <div className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:w-[75%] w-[90%] mx-auto'>
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
        <Form />
      </div>
    </div>
  );
};

const Form = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(3, "That's really your name?"),
    email: z.string().email("Put in a real email..."),
    message: z.string().min(3, "Your message is too short..."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const inputs = {
      service_id: "service_m5dhn7u",
      template_id: "template_0ea3ewq",
      user_id: "0tvqgP1sw-5fQmDto",
      template_params: {
        user_name: data.name,
        user_email: data.email,
        message: data.message,
      },
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", inputs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        setSubmitMessage("Your Email was sent successfully");
        setLoading(false);
        reset();
      })
      .catch(function (error) {
        setSubmitMessage(error);
      });
  };

  return (
    <div className='flex mt-4'>
      <div className='mx-auto card p-4 md:w-[75%] w-[90%]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='font-black group'>
            <FontAwesomeIcon
              icon={faHand}
              className='rotate-12 group-hover:rotate-[60deg] ease-in-out duration-200'
            />{" "}
            Get in touch!
          </h2>
          <p className='mt-4 text-gray-600 font-bold text-lg'>Your Name</p>
          <input
            {...register("name")}
            type='name'
            className='text-xl w-full p-2 rounded-xl'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          <p className='mt-2 text-gray-600 font-bold text-lg'>Your Email</p>
          <input
            {...register("email")}
            type='email'
            className='text-xl w-full p-2 rounded-xl'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
          <p className='mt-2 text-gray-600 font-bold text-lg'>Message</p>
          <textarea
            {...register("message")}
            rows='10'
            className='w-full p-2 rounded-xl resize-none'
          ></textarea>
          {errors.message && (
            <p className='text-red-500'>{errors.message.message}</p>
          )}
          <motion.button
            type='submit'
            className={
              "font-serif font-black p-2 rounded-xl text-xl mt-2 bg-nevBlue disabled:bg-gray-300 disabled:text-gray-700"
            }
          >
            {!loading ? <p>Send!</p> : <p>Loading...</p>}
          </motion.button>
          {submitMessage && <p className='mt-2 font-bold'>{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
