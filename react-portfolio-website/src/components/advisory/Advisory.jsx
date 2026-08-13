import React from 'react'
import './advisory.css'
import { ACHIEVERS_URL } from '../../data/site'

const offers = [
  {
    index: '01',
    title: 'Startup & SME Advisory',
    intro: 'Focused problem-solving for founders and growing teams who need a clearer commercial and operating picture.',
    points: [
      'Business model and growth strategy',
      'Operations and workflows',
      'Pricing and profitability',
      'Team structure',
      'Launches and focused problem-solving'
    ]
  },
  {
    index: '02',
    title: 'AI & Automation Advisory',
    intro: 'Practical adoption for SMEs — finding where automation helps, and implementing it without theatre.',
    points: [
      'Automation opportunities',
      'AI implementation',
      'Internal workflows',
      'CRM, enquiry and customer-service systems',
      'Practical SME adoption'
    ]
  },
  {
    index: '03',
    title: 'Education Business Advisory',
    intro: 'Operating advice for tutorial centres and education companies, from the floor up to product and expansion.',
    points: [
      'Tutorial-centre operations',
      'Growth and pricing',
      'Tutor compensation',
      'Expansion',
      'Product design and AI automation for education companies'
    ]
  }
]

const Advisory = () => {
  return (
    <section id="advisory">
      <p className="section__eyebrow">How I work with you</p>
      <h2>Advisory</h2>
      <p className="section__lede">
        Selective, hands-on work with founders and growing businesses on
        operations, management systems, and practical AI — grounded in businesses
        I still operate.
      </p>

      <div className="container advisory__grid">
        {offers.map(({ index, title, intro, points }) => (
          <article key={title} className="advisory__card">
            <p className="advisory__index">{index}</p>
            <h3>{title}</h3>
            <p>{intro}</p>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#contact">Start a conversation</a>
          </article>
        ))}
      </div>

      <aside className="container advisory__secondary">
        <p className="advisory__secondary-mark">Secondary offer</p>
        <h3>Academic &amp; Education Consultation</h3>
        <p>
          For families and students who need a clear view of academic pathways,
          STEM and curriculum choices, and how to plan from a younger age. This
          is consultation on direction — not delivery of tutoring or admissions.
        </p>
        <p className="advisory__secondary-note">
          Tutoring and admissions delivery remains through
          {' '}
          <a href={ACHIEVERS_URL} target="_blank" rel="noreferrer">The Achievers</a>.
          This offer complements that work rather than competing with it.
        </p>
        <a href="#contact" className="btn">Ask about consultation</a>
      </aside>
    </section>
  )
}

export default Advisory
