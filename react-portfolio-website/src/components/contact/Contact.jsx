import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { EMAIL, LINKEDIN, ACHIEVERS_URL, HIBRO_URL } from '../../data/site'

const areas = [
  {
    index: '01',
    title: 'Business & startups',
    text: 'How the company actually runs and grows — operations, people, and the messy decisions in between.'
  },
  {
    index: '02',
    title: 'AI & automation',
    text: 'Where automation saves time in enquiry, follow-up and workflow. I build this at HiBro. I can help you see where it fits.'
  },
  {
    index: '03',
    title: 'Education businesses',
    text: 'I run one. Operations, growth, and keeping quality consistent. Tutoring itself stays at The Achievers.'
  }
]

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const data = new FormData(form.current)
    const composed = [
      `Business: ${data.get('business') || ''}`,
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
    <section id="work">
      <p className="section__eyebrow">I advise</p>
      <h2>Work With Me</h2>
      <p className="section__lede">
        If you are looking for advice on a business, education company, or
        practical AI — feel free to reach out. I take on a limited number of
        conversations.
      </p>

      <div className="container work__areas">
        {areas.map(({ index, title, text }) => (
          <article key={title} className="work__area">
            <p className="work__index">{index}</p>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <p className="container work__note">
        For tutoring or admissions, go through
        {' '}
        <a href={ACHIEVERS_URL} target="_blank" rel="noreferrer">The Achievers</a>.
        For the AI product, visit
        {' '}
        <a href={HIBRO_URL} target="_blank" rel="noreferrer">HiBro AI</a>.
      </p>

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

        <form ref={form} onSubmit={sendEmail} aria-label="Enquiry">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" type="text" name="name" autoComplete="name" required />

          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" type="email" name="email" autoComplete="email" required />

          <label htmlFor="contact-business">Your business</label>
          <input id="contact-business" type="text" name="business" required />

          <label htmlFor="contact-challenge">What you need help with</label>
          <textarea id="contact-challenge" name="challenge" rows="4" required />

          <label htmlFor="contact-outcome">What good looks like</label>
          <textarea id="contact-outcome" name="outcome" rows="3" required />

          <input type="hidden" name="message" />

          <button type="submit" className="btn btn-primary">Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
