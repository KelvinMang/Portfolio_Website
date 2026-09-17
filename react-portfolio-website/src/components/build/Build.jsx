import React from 'react'
import './build.css'

const items = [
  {
    title: 'AI products',
    text: 'Practical AI-powered tools designed around real business problems — enquiry, follow-up, knowledge and customer conversation.'
  },
  {
    title: 'Automation systems',
    text: 'Systems that take the repetitive layer off a team so people can do the work that still needs a person.'
  },
  {
    title: 'Internal business tools',
    text: 'Software that improves operations, visibility and decision-making inside a company, not only on a public landing page.'
  },
  {
    title: 'Technology-enabled businesses',
    text: 'Using software as infrastructure for organisations that need to scale without adding chaos.'
  },
  {
    title: 'Operational systems',
    text: 'Processes, workflows and management infrastructure that make quality repeatable as a company grows.'
  }
]

const Build = () => {
  return (
    <section id="build">
      <p className="section__eyebrow">Practice</p>
      <h2>What I build</h2>
      <p className="section__lede">
        I implement systems. The interest in AI is not theoretical — it is
        applied to how a business actually runs.
      </p>

      <div className="container build__grid">
        {items.map(({ title, text }) => (
          <article key={title} className="build__card">
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Build
