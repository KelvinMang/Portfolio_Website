import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { EMAIL, LINKEDIN, ACHIEVERS_URL, HIBRO_URL } from '../../data/site'

const areas = [
  {
    title: 'AI strategy & implementation',
    text: 'Where automation actually helps, and how to put it into the workflow.'
  },
  {
    title: 'Business operations',
    text: 'Processes, internal systems and the unglamorous work of making a company run.'
  },
  {
    title: 'Technology & education systems',
    text: 'Software, operations and education technology — without turning every enquiry into a tutoring request.'
  }
]

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const data = new FormData(form.current)
    const composed = [
      `Organisation: ${data.get('business') || ''}`,
      `Challenge: ${data.get('challenge') || ''}`,
      `Desired outcome: ${data.get('outcome') || ''}`
    ].join('\n\n')

    const messageField = form.current.elements.namedItem('message')
    if (messageField) {
      messageField.value = composed
    }

    emailjs
      .sendForm('service_qkrc3v4', 'template_639n0lm', form.current, 'hdaQEy_LPj-n0feTB')
      .then(
        () => {
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact">
      <p className="section__eyebrow">Contact</p>
      <h2>Advisory &amp; collaboration</h2>
      <p className="section__lede">
        I occasionally work with founders and organisations on technology,
        AI implementation, automation, business systems and operations.
        For tutoring or admissions, go through
        {' '}
        <a href={ACHIEVERS_URL} target="_blank" rel="noreferrer">The Achievers</a>.
        For the product, visit
        {' '}
        <a href={HIBRO_URL} target="_blank" rel="noreferrer">HiBro AI</a>.
      </p>

      <div className="container work__areas">
        {areas.map(({ title, text }) => (
          <article key={title} className="work__area">
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <p className="contact__kicker">Get in touch</p>
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" aria-hidden="true" />
            <div>
              <h3>Email</h3>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" aria-hidden="true" />
            <div>
              <h3>LinkedIn</h3>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">Kelvin Mang</a>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} aria-label="Collaboration enquiry">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" type="text" name="name" autoComplete="name" required />

          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" type="email" name="email" autoComplete="email" required />

          <label htmlFor="contact-business">Organisation</label>
          <input id="contact-business" type="text" name="business" required />

          <label htmlFor="contact-challenge">What you are working on</label>
          <textarea id="contact-challenge" name="challenge" rows="4" required />

          <label htmlFor="contact-outcome">What would help</label>
          <textarea id="contact-outcome" name="outcome" rows="3" required />

          <input type="hidden" name="message" />

          <button type="submit" className="btn btn-primary">Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
