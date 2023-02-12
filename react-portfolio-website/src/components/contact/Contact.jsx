import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qkrc3v4', 'template_639n0lm', form.current, 'hdaQEy_LPj-n0feTB')

    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id = 'contact'> 
    <h5>Get in touch</h5>
    <h2> Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon' />
          <h4> Email </h4>
          <p> kelvinmang888@gmail.com </p>
          <a href='mailto: kelvinmang888@gmail.com' target="_blank"> Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineInstagram className='contact__option-icon'/>
          <h4> Instagram </h4>
          <h5> kelvinmang021 </h5>
          <a href='https://www.instagram.com/kelvinmang021/' target="_blank"> Follow me on Instagram </a>
        </article>
        <article className='contact__option'>
          <BsLinkedin className='contact__option-icon' />
          <h4> Linkedin </h4>
          <h5> 💬Kelvin Mang </h5>
          <a href='https://www.linkedin.com/in/kelvinmang' target="_blank"> Connect me on Linkedin </a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name='message' rows = "7" placeholder='Your Message' required> </textarea>
        <button type='submit' className='btn btn-primary'> Send Message </button>
      </form>
    </div>
    </section>
  )
}

export default Contact