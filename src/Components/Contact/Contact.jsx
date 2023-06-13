import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { useRef } from 'react';
// import  {Children } from 'framer-motion'

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rg4e8md', 'template_w9umuqm', form.current, 'J9GayjgbMhb6BXY_1')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left c-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="text" name='user_email' className='user' placeholder='emial'/>
                <textarea name="message" className='user'placeholder='Message'/>
                <input type="submit" value='send' className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{background:'var(--purple'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact