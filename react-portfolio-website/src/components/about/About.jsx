import React from 'react'
import './about.css'
import KELVIN from '../../assets/Kelvin_Mang_Professional.png'

const chapters = [
  {
    role: 'Educator',
    title: 'I still teach, because every student deserves a chance.',
    body: [
      'I still teach Maths and Physics, mostly to international-school students taking IGCSE and A-Level. I care about where a student gets stuck, and why. Every student struggles for a different reason. Over the past few years I have helped 200+ students with IGCSE and A-Level Physics and Maths, and 300+ with interview prep and university personal statements for UK G5 and Hong Kong universities.',
      'I used to struggle at school too. In secondary school my results were poor. I would revise, then forget almost everything. A-Levels changed that. I learnt that different people fit different exam systems — and that how you break the work down matters as much as how many hours you sit at the desk.',
      'I went to St. Paul’s College. I took International A-Levels and got 4A* in Physics, Chemistry, Maths and Further Maths. Maths was 100%. Then I went to Imperial College London and graduated with First Class Honours in Electrical and Electronic Engineering with Management. I was a Hong Kong Scholar, made the Dean’s List, and won the Head of Department Prize as the top student in the management stream.'
    ]
  },
  {
    role: 'Operator',
    title: 'Managing Director is the title. Consultation is the work I value.',
    body: [
      'At The Achievers I grow the company: the team, the systems, and how the centre runs. Many families know they need help, but not what should come first — IGCSE, A-Level, IB, exam boards, how many subjects, which pathway. That conversation is still the part I sit with.'
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
