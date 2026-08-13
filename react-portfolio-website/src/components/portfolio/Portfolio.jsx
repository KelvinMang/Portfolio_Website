import React from 'react'
import './portfolio.css'
import HIBRO from '../../assets/HiBro_logo.png'
import ACHIEVERS from '../../assets/Achievers_logo.png'
import { ACHIEVERS_URL, HIBRO_URL } from '../../data/site'

const Portfolio = () => {
  return (
    <section id="ventures">
      <p className="section__eyebrow">I build</p>
      <h2>Ventures</h2>
      <p className="section__lede">
        The Achievers and HiBro AI — two companies I built and still run.
      </p>

      <div className="container ventures">
        <article className="venture venture--flagship">
          <div className="venture__logo venture__logo--achievers">
            <img src={ACHIEVERS} alt="The Achievers logo" />
          </div>
          <div className="venture__body">
            <p className="venture__mark">Education</p>
            <h3>The Achievers</h3>
            <p className="venture__tag">
              Managing Director &amp; Partner · international exams and admissions, Hong Kong.
            </p>
            <p>
              I am Managing Director and Partner, responsible for growing the
              business. What I actually value is consultation: sitting with a
              family who knows support is needed, but does not yet know what
              should come first — IGCSE, A-Level, IBDP, exam boards, subject
              choice — before anyone piles on more tuition.
            </p>
            <p>
              I built a teaching and learning methodology around a simple
              observation: every student struggles for a different reason.
              Find the root cause. Build a clear academic plan. Deliver the
              approach that fits. Help them get the grades they need, and enjoy
              learning again.
            </p>
            <p>
              In the past few years I have tutored <strong>200+ students</strong> in
              IGCSE and A-Level Maths and Physics, and worked with <strong>300+ students</strong> on
              personal statements and interview preparation — including the UK G5,
              Cambridge, Imperial College London, and UCL.
            </p>
            <p>
              If you want tutoring or admissions, go through The Achievers.
            </p>
            <a href={ACHIEVERS_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
              Visit Achievers
            </a>
          </div>
        </article>

        <article className="venture">
          <div className="venture__logo venture__logo--hibro">
            <img src={HIBRO} alt="HiBro AI logo" />
          </div>
          <div className="venture__body">
            <p className="venture__mark">AI</p>
            <h3>HiBro AI</h3>
            <p className="venture__tag">
              Co-Founder · AI that takes the conversation load off a team.
            </p>
            <p>
              HiBro is a product I co-founded: a virtual assistant for sales and
              customer service. Outbound reach and follow-up. Automated chatbots.
              A RAG-powered knowledge base. Analytics on what is actually happening
              in the chat. It sits where the work already is — WhatsApp, Gmail,
              Google Calendar — not in another dashboard people forget to open.
            </p>
            <p>
              Hundreds of users across Southeast Asia already run on it — clinics,
              education consultancies, tutorial centres, pharmacies, and other
              operators who live in chat. Most teams are not short on effort. They
              are short on a system that can reply, follow up, and remember.
            </p>
            <a href={HIBRO_URL} className="btn" target="_blank" rel="noreferrer">
              Visit HiBro
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
