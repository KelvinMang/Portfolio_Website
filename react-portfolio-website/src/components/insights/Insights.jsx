import React from 'react'
import './insights.css'

const notes = [
  {
    pillar: 'AI',
    title: 'Apply AI to the workflow, not the slide',
    text: 'Use it where a team already loses time — enquiry, follow-up, knowledge, internal process. If it does not change the work, it is decoration.'
  },
  {
    pillar: 'Automation',
    title: 'Most teams are not short on effort',
    text: 'They are short on a system that can reply, follow up and remember. That is true in a clinic waiting on WhatsApp and in a company drowning in email.'
  },
  {
    pillar: 'Operations',
    title: 'Growing a company is a systems problem',
    text: 'Quality slips when knowledge sits in one person’s head. The work is to make the useful parts repeatable without making the organisation rigid.'
  },
  {
    pillar: 'Entrepreneurship',
    title: 'Build with people you trust',
    text: 'Companies and products are rarely a solo story. I like sitting down with people I trust, seeing a real mess, and shipping something cleaner.'
  },
  {
    pillar: 'Product',
    title: 'Internal tools count',
    text: 'The software that helps a team see the work, assign it and close it is often more valuable than another public feature. I treat that as product work.'
  },
  {
    pillar: 'Education technology',
    title: 'Education businesses have the same operating problems',
    text: 'Follow-up, scheduling, consistency, and how a team scales. Technology helps when it serves that, not when it replaces the conversation with a student.'
  }
]

const Insights = () => {
  return (
    <section id="insights">
      <p className="section__eyebrow">Thinking</p>
      <h2>Insights</h2>
      <p className="section__lede">
        Notes across AI, automation, operations, product and building companies.
        Not a blog with invented dates — a set of subjects I keep returning to.
      </p>

      <div className="container insights__grid">
        {notes.map(({ pillar, title, text }) => (
          <article key={title} className="insights__card">
            <p className="insights__mark">{pillar}</p>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Insights
