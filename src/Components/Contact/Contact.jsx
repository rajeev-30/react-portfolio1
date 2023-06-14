import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
// import { useState } from 'react'
import { useRef } from 'react';
import { useState, useEffect } from "react";


const Contact = () => {
    // Email js 
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setIsSubmit(true);
      
        if (Object.keys(errors).length === 0) {
          emailjs.sendForm('service_rg4e8md', 'template_w9umuqm', form.current, 'J9GayjgbMhb6BXY_1')
            .then(
              (result) => {
                console.log(result.text);
                setDone(true);
                clearForm();
              },
              (error) => {
                console.log(error.text);
              }
            );
        }
      };
      
    //   Clear form once the email has been sent successfully
    const clearForm = () => {
        setFormValues({ user_name: '', user_email: '', message: '' });
        setFormErrors({});
        setIsSubmit(false);
      };


    //   validation
    const initialValues = { user_name: "", user_email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.user_name) {
            errors.username = "Username is required!";
        }
        if (!values.user_email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.user_email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.message) {
            errors.message = "message is required!";
        }
        return errors;
    };


    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left c-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
                </div>
            </div>

            {/* <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="text" name='user_email' className='user' placeholder='emial'/>
                <textarea name="message" className='user'placeholder='Message'/>
                <input type="submit" value='send' className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{background:'var(--purple'}}></div>
            </form>
        </div> */}

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        className="user"
                        type="text"
                        name="user_name"
                        placeholder="Username"
                        value={formValues.user_name}
                        onChange={handleChange}
                    />
                    <p>{formErrors.username}</p>
                    <input
                        className="user"
                        type="text"
                        name="user_email"
                        placeholder="Email"
                        value={formValues.user_email}
                        onChange={handleChange}
                    />
                    <p>{formErrors.email}</p>
                    <textarea
                        className="user"
                        type="text"
                        name="message"
                        placeholder="message"
                        value={formValues.message}
                        onChange={handleChange}
                    />
                    <p>{formErrors.message}</p>

                    <input type="submit" value='send' className='button' />

                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className="ui message success">Thanks for contacting me!</div>
                    ) : (
                        <pre></pre>
                    )}
                    
                    {/* <span>{done && "Thanks for contacting me!"}</span> */}
                    {/* <button className="fluid ui button blue">Submit</button> */}

                </form>
            </div>



        </div>
    )
}

export default Contact