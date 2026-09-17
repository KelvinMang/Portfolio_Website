import React from 'react'
import './projects.css'
import { ACHIEVERS_URL, HIBRO_URL } from '../../data/site'

const projects = [
  {
    mark: 'HiBro AI',
    title: 'A virtual assistant for live conversations',
    text: 'AI for outbound, follow-up, chatbots, a knowledge base and chat analytics. Built for teams who already work in WhatsApp, Gmail and Calendar.',
    href: HIBRO_URL,
    label: 'Open HiBro'
  },
  {
    mark: 'The Achievers',
    title: 'Operating systems for an education organisation',
    text: 'Strategy, operations and education systems inside a growing centre — including a teaching methodology built around why each student is stuck.',
    href: ACHIEVERS_URL,
    label: 'Open The Achievers'
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__eyebrow">In progress</p>
      <h2>Things I am building</h2>
      <p className="section__lede">
        Work that is already public. This list is meant to grow — products,
        internal tools, experiments — without inventing a catalogue.
      </p>

      <div className="container projects__list">
        {projects.map(({ mark, title, text, href, label }) => (
          <article key={title} className="projects__item">
            <p className="projects__mark">{mark}</p>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={href} target="_blank" rel="noreferrer">{label}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
