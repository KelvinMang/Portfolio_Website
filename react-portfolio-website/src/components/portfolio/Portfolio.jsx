import React from 'react'
import './portfolio.css'
import HIBRO from '../../assets/HiBro_logo.png'
import ACHIEVERS from '../../assets/Achievers_logo.png'
import { ACHIEVERS_URL, HIBRO_URL } from '../../data/site'

const Portfolio = () => {
  return (
    <section id="ventures">
      <p className="section__eyebrow">Current work</p>
      <h2>Ventures</h2>
      <p className="section__lede">
        Two organisations I work in now. Each shows a different part of the
        work: operating a growing education business, and building AI products.
        More companies and projects can sit here later.
      </p>

      <div className="container ventures">
        <article className="venture">
          <div className="venture__logo venture__logo--achievers">
            <img src={ACHIEVERS} alt="The Achievers logo" />
          </div>
          <p className="venture__mark">Education · Operations</p>
          <h3>The Achievers</h3>
          <p className="venture__tag">Managing Director</p>
          <p>
            The Achievers is an international exam tutoring and admissions
            organisation in Hong Kong, with its own team, methodology and
            reputation.
          </p>
          <p>
            I currently serve as Managing Director, working across
            strategy, operations, technology development, organisational growth
            and education systems.
          </p>
          <p>
            Over the past few years the centre has helped <strong>1,500+ students</strong> with
            academic tutoring, and many have gone on to achieve top grades.
            I still teach personally as well.
          </p>
          <a href={ACHIEVERS_URL} className="btn" target="_blank" rel="noreferrer">
            Visit The Achievers
          </a>
        </article>

        <article className="venture">
          <div className="venture__logo venture__logo--hibro">
            <img src={HIBRO} alt="HiBro AI logo" />
          </div>
          <p className="venture__mark">AI · Technology</p>
          <h3>HiBro AI</h3>
          <p className="venture__tag">Co-Founder</p>
          <p>
            HiBro AI builds practical AI, automation and technology solutions
            designed to improve how businesses operate.
          </p>
          <p>
            As Co-Founder I work across product development, business strategy,
            AI implementation, automation architecture and technology solutions.
            The product is a virtual assistant for sales and customer service:
            outbound and follow-up, chatbots, a RAG knowledge base, and analytics
            on the conversation itself.
          </p>
          <p>
            It sits where the work already is — WhatsApp, Gmail, Google Calendar —
            rather than in another dashboard. Teams across Southeast Asia already
            use it: clinics, education consultancies, tutorial centres, pharmacies
            and other operators who live in chat.
          </p>
          <a href={HIBRO_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
            Visit HiBro AI
          </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
