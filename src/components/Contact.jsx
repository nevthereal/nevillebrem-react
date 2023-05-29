import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faShare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    // Email Contact Form
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m5dhn7u', 'template_0ea3ewq', form.current, '0tvqgP1sw-5fQmDto')
        .then((result) => {
            document.getElementById("status-text").innerText = "Email sent successfully"
            document.getElementById("status-text").classList.add("text-green-400")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            document.getElementById("status-text").innerText = "There was an error when sending the email"
            document.getElementById("status-text").classList.add("text-red-500")
        });
    };

    // Tailwind Classes
    const ContactHeader = `uppercase font-black`
    const contactDivision = `p-6 card my-4 md:my-0`

    return (
    <div id='contact' className='px-4 py-16 bg-white'>
         <div className=' pb-8'>
            <h1 className='mx-auto uppercase font-bold text-center my-auto font-[Montserrat] pb-16' ref={ref}>
                <FontAwesomeIcon icon={faShare}/> Contact
            </h1>
            
            <div className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:mx-20'>
                <div className={contactDivision}>
                    <h2 className={ContactHeader}>Email:</h2>
                    <p>Contact me on <a href="mailto:contact@nevillebrem.com" className='link'>contact@nevillebrem.com</a></p>
                </div>
                <div className={contactDivision}>
                    <h2 className={ContactHeader}>Twitter:</h2>
                    <p>Write me a DM at <a href="https://twitter.com/bremneville" className='link'>@BremNeville</a></p>
                </div>
                <div className={contactDivision}>
                    <h2 className={ContactHeader}>Github:</h2>
                    <p>Take a look at my Repositories: <a href="https://github.com/nevthereal" className='link'>@nevthereal</a></p>
                </div>
                <div className={contactDivision}>
                    <h2 className={ContactHeader}>Upwork:</h2>
                    <p>Hire me on <a href="https://www.upwork.com/freelancers/~01a24589aa24a17b0e" className='link'>Upwork</a></p>
                </div>
            </div>
        </div>
        <div id='form'>
            <div className='card p-2 text-black lg:w-1/2 lg:mx-auto lg:p-8'>
                <h2 className='font-black uppercase lg:text-4xl font-[Montserrat]'><FontAwesomeIcon icon={faHand} shake /> Say Hello!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='user_name' required className='border border-gray-400 rounded-3xl p-2 mt-4 mb-2 w-11/12' placeholder='Your Name' />
                        <input type="text" name='user_email' required className='peer border border-gray-400 rounded-3xl p-2 my-2 w-11/12' placeholder='Your Email' />
                        <textarea name="message" maxLength={750} className='border border-gray-400 rounded-3xl p-2 my-2 w-11/12 h-32 resize-none' placeholder='Your Message (max 750)' />
                        <br />
                        <input type="submit" value="Send" className='rounded-3xl font-bold bg-nevBlue shadow-nevBlue/30 shadow-lg lg:text-xl md:py-4 py-2 md:px-6 px-3 cursor-pointer duration-200 ease-in-out'/>
                    </form>
                    <p id='status-text' className='font-bold my-2'></p>
            </div>
        </div>
    </div>
  )
}

export default Contact