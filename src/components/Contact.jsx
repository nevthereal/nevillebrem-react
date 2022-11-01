import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
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
    
    return (
    <div id='contact' className='px-4 py-16 text-white'>
         <div className='grid md:grid-cols-2'>
            <h1 className='text-4xl md:text-5xl mx-auto p-16 uppercase font-bold text-center my-auto font-[Montserrat]'><i className='fa-solid fa-share text-3xl md:text-4xl'></i> Contact</h1>
            <div>
                <div className='py-4'>
                    <h1 className='uppercase text-3xl font-black'>Email:</h1>
                    <p>Contact me on <a href="mailto:contact@nevillebrem.com" className='link'>contact@nevillebrem.com</a></p>
                </div>
                <div className='py-4'>
                    <h1 className='uppercase text-3xl font-black'>Twitter:</h1>
                    <p>Write me a DM at <a href="https://twitter.com/bremneville" className='link'>@BremNeville</a></p>
                </div>
                <div className='py-4'>
                    <h1 className='uppercase text-3xl font-black'>Github:</h1>
                    <p>Take a look at my Repositories: <a href="https://github.com/nevthereal" className='link'>@nevthereal</a></p>
                </div>
            </div>
        </div>
        <div id='form'>
            <div className='card p-2 text-black lg:w-1/2 lg:mx-auto lg:p-8'>
                <h1 className='text-3xl font-black uppercase lg:text-4xl font-[Montserrat]'><i class="fa-solid fa-hand rotate-[25deg] waving-hand"></i> Say Hello!</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='user_name' required className='border border-gray-400 rounded-lg p-1 mt-4 mb-2 w-11/12' placeholder='Your Name' />
                        <input type="text" name='user_email' required className='peer border border-gray-400 rounded-lg p-1 my-2 w-11/12' placeholder='Your Email' />
                        <textarea name="message" maxLength={750} className='border border-gray-400 rounded-lg p-1 my-2 w-11/12 h-32 resize-none' placeholder='Your Message (max 750)' />
                        <br />
                        <input type="submit" value="Send" className='rounded-lg bg-nevBlue px-1 py-2 font-bold lg:text-xl lg:px-2 lg:py-2 cursor-pointer duration-200 ease-in-out'/>
                    </form>
                    <p id='status-text' className='font-bold my-2'></p>
            </div>
        </div>
    </div>
  )
}

export default Contact