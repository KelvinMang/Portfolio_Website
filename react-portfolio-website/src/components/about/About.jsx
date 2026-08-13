import React from 'react'
import './about.css'
import KELVIN from '../../assets/Kelvin_Mang_Professional.png'

const chapters = [
  {
    role: 'Educator',
    title: 'I was not always the academic kid',
    body: [
      'I teach Mathematics and Physics, mostly with international-school students on IGCSE and A-Level. What I care about is where someone actually gets stuck — and why. Every student struggles for a different reason.',
      'Secondary-school results were poor. I revised, then forgot. A-Levels were the turning point: different people fit different curricula, and how you break the work down matters as much as hours at the desk. St. Paul’s College. International A-Level 4A* in Physics, Chemistry, Maths and Further Maths — Maths at 100% UMS. Then Imperial College London, First Class MEng in Electrical and Electronic Engineering with Management, Hong Kong Scholar, Dean’s List, and the Head of Department Prize in the management stream.'
    ]
  },
  {
    role: 'Operator',
    title: 'Managing Director is the title. Consultation is the work I value.',
    body: [
      'At The Achievers I moved from teaching into growing the company: teams, systems, and how the centre actually runs. Many families know support is needed, but not what should come first — IGCSE, A-Level, IBDP, exam boards, how many subjects, which pathway. That conversation is still the part I sit with.'
    ]
  },
  {
    role: 'Entrepreneur',
    title: 'Then I started building the tools I wished I had',
    body: [
      'Follow-up that slips. Knowledge stuck in one person’s head. Teams working hard without a system. That is part of why I co-founded HiBro AI — a product I am building with people I trust, from problems I had already lived with. Achievers, HiBro, and the work in between were never a solo story.'
    ]
  }
]

const About = () => {
  return (
    <section id="about">
      <p className="section__eyebrow">The path</p>
      <h2>About</h2>

      <div className="container about__intro">
        <div className="about__me">
          <div className="about__me-image">
            <img src={KELVIN} alt="Kelvin Mang in professional attire" />
          </div>
        </div>
        <div className="about__lede">
          <p className="about__meta">Educator. Operator. Entrepreneur.</p>
          <p>
            I started by teaching. Then I ran and grew an education company.
            Then I built AI to take the repetitive work off a team.
          </p>
          <ul className="about__chips">
            <li>Imperial College London</li>
            <li>First Class MEng</li>
            <li>Maths &amp; Physics educator</li>
            <li>Hong Kong</li>
          </ul>
        </div>
      </div>

      <ol className="container about__timeline">
        {chapters.map(({ role, title, body }) => (
          <li key={role} className="about__chapter">
            <p className="about__chapter-role">{role}</p>
            <h3>{title}</h3>
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </li>
        ))}
      </ol>

      <blockquote className="container about__quote">
        Grades are a snapshot, not a ceiling. Everyone deserves a chance —
        including students who have been told they are not academic.
      </blockquote>
    </section>
  )
}

export default About
