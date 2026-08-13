import React from 'react'
import './insights.css'

const pillars = [
  {
    pillar: 'Education',
    title: 'Every student struggles for a different reason',
    text: 'Find the root cause first. Then build the plan. More hours and more worksheets are not a method — they are what people do when they have not looked closely enough.'
  },
  {
    pillar: 'Entrepreneurship',
    title: 'I like building with people I trust',
    text: 'Achievers, HiBro, and the work in between were never a solo hero story. I like sitting down with people I trust, seeing a real problem, and shipping something — even when it is messy, especially when it is messy.'
  },
  {
    pillar: 'AI',
    title: 'AI should take the repetitive layer',
    text: 'Use it where it actually helps — enquiry, follow-up, WhatsApp, internal workflow — so people can do the human work. Practical automation, not a demo that looks good in a meeting.'
  },
  {
    pillar: 'Operations',
    title: 'Most teams are not short on effort',
    text: 'They are short on a system that can reply, follow up, and remember. That is true in a tutorial centre and in a clinic waiting on WhatsApp. The bottleneck is usually how the work is organised, not how hard people try.'
  }
]

const Insights = () => {
  return (
    <section id="insights">
      <p className="section__eyebrow">I think</p>
      <h2>Insights</h2>
      <p className="section__lede">
        A few things I keep coming back to — from teaching, running a company,
        and building products.
      </p>

      <div className="container insights__grid">
        {pillars.map(({ pillar, title, text }) => (
          <article key={pillar} className="insights__card">
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
