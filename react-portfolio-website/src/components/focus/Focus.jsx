import React from 'react'
import './focus.css'

const areas = [
  {
    title: 'Artificial intelligence',
    text: 'Practical applications of AI inside products and businesses — not demos for their own sake.'
  },
  {
    title: 'Automation',
    text: 'Designing systems that reduce repetitive work and make follow-up, enquiry and workflow reliable.'
  },
  {
    title: 'Product & technology',
    text: 'Building software, internal tools and technology-enabled services that a team will actually use.'
  },
  {
    title: 'Business operations',
    text: 'Processes, workflows and organisational systems that help a company grow without losing quality.'
  },
  {
    title: 'Entrepreneurship',
    text: 'Building and operating businesses from an early idea into a structured organisation.'
  },
  {
    title: 'Education',
    text: 'Improving education businesses and learning experiences through systems, operations and technology.'
  }
]

const Focus = () => {
  return (
    <section id="focus">
      <p className="section__eyebrow">Focus</p>
      <h2>Areas of work</h2>
      <p className="section__lede">
        The subjects I return to across companies, products and conversations.
      </p>

      <div className="container focus__grid">
        {areas.map(({ title, text }) => (
          <article key={title} className="focus__card">
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Focus
