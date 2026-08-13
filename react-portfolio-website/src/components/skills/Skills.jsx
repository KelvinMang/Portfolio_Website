import React from 'react'
import './skills.css'
import { HiBadgeCheck } from 'react-icons/hi'

const groups = [
  {
    title: 'Technology & AI',
    items: [
      { name: 'AI automation', level: 'HiBro AI' },
      { name: 'Python', level: 'Experienced' },
      { name: 'Machine learning', level: 'Experienced' },
      { name: 'Product & systems', level: 'Builder' },
      { name: 'Data analysis', level: 'Experienced' },
      { name: 'React', level: 'Intermediate' }
    ]
  },
  {
    title: 'Education & Advisory',
    items: [
      { name: '1-on-1 advisory', level: 'Academic & career' },
      { name: 'Learning plans', level: 'Personalised' },
      { name: 'Career pathing', level: 'Students & grads' },
      { name: 'Startup ops', level: 'Education & tech' },
      { name: 'Teaching', level: 'Educator' },
      { name: 'Mentorship', level: 'High-trust' }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills">
      <h5>How I work</h5>
      <h2>Capabilities</h2>

      <div className="container skills__container">
        {groups.map(({ title, items }) => (
          <div key={title}>
            <h3>{title}</h3>
            <div className="skills__content">
              {items.map(({ name, level }) => (
                <article key={name} className="skills__details">
                  <HiBadgeCheck className="skills__details-icon" />
                  <div>
                    <h5>{name}</h5>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
