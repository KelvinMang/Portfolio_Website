import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <p className="section__eyebrow">About</p>
      <h2>How I work</h2>
      <p className="section__lede">
        Entrepreneur first, then technology builder, then operator.
        Education remains part of the work — it does not define the whole of it.
      </p>

      <div className="container about__prose">
        <p>
          I am an entrepreneur and technology builder working across education,
          AI and business operations. My work focuses on building organisations,
          designing operating systems, developing technology products, and applying
          AI to practical business problems.
        </p>
        <p>
          I currently serve as Managing Director at The Achievers
          and Co-Founder of HiBro AI. The Achievers is where I operate and grow
          an education organisation. HiBro is where I build AI, automation and
          software. Both are current. Neither is the whole story.
        </p>
        <p>
          My background combines engineering, technology, education and operations,
          which shapes how I approach companies and problems. I studied at
          Imperial College London, graduating with First Class Honours in
          Electrical and Electronic Engineering with Management, and was named
          to the Dean’s List.
        </p>
        <p>
          I still teach a little — Maths and Physics — because I care where
          people get stuck. I used to struggle at school myself. That is useful
          context. It is not the centre of the brand.
        </p>
      </div>
    </section>
  )
}

export default About
