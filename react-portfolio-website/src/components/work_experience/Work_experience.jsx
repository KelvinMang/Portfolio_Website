import React from 'react'
import './work_experience.css'

const data = [
  {
    mark: 'HB',
    name: 'HiBro AI',
    role: 'Co-Founder',
    date: 'Present',
    description:
      'Building HiBro — a virtual assistant for sales and customer service. Outbound and follow-up, chatbots, a RAG knowledge base, and analytics. Hundreds of users across Southeast Asia, from clinics to education and pharmacies.'
  },
  {
    mark: 'TA',
    name: 'The Achievers',
    role: 'Managing Director',
    date: 'Present',
    description:
      'Leading The Achievers and teaching through a methodology I developed: find why a student is stuck, then build the plan. 200+ students in IGCSE and A-Level Maths and Physics; 300+ on personal statements and interviews for UK G5 and other top universities.'
  },
  {
    mark: 'HK',
    name: 'Airport Authority Hong Kong',
    role: 'Graduate System Engineer',
    date: '2024 – 2025',
    description:
      'Engineering and Technical at Hong Kong International Airport, working on live operational systems.'
  },
  {
    mark: 'AZ',
    name: 'Amazon',
    role: 'Operations Intern',
    date: '2023',
    description:
      'Built automated dashboards and data workflows that improved operational decision-making.'
  }
]

const Work_experience = () => {
  return (
    <section id="work_experience">
      <h5>Where this comes from</h5>
      <h2>Experience</h2>

      <div className="container experience__list">
        {data.map(({ mark, name, role, date, description }) => (
          <article key={name} className="experience__item">
            <div className="experience__mark" aria-hidden="true">{mark}</div>
            <div className="experience__body">
              <div className="experience__top">
                <h3>{name}</h3>
                <span>{date}</span>
              </div>
              <h4>{role}</h4>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work_experience
