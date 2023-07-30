import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Mars_Rover.png'
import IMG2 from '../../assets/Eatchy.png'
import IMG3 from '../../assets/Music Synthesiser.png'
import IMG4 from '../../assets/PlantPal.png'
import IMG5 from '../../assets/Circuit_Simulator.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Unity Mars Rover | Year 2 EYP",
    link: "https://github.com/KelvinMang/Unity-Mars-Rover",
  },
  {
    id: 2,
    image: IMG2,
    title: "Eatchy | City I&T Grand Challenge",
    link: "https://youtu.be/8WJJUmceEbs",
  },
  {
    id: 3,
    image: IMG3,
    title: "Music Synthesiser | Embedded System",
    link: "https://github.com/KelvinMang/Synth_Starter"
  }, 
  {
    id: 4,
    image: IMG4,
    title: "PlantPal | Embedded System",
    link: 'https://github.com/KelvinMang/PlantPal',
  },
  {
    id: 5,
    image: IMG5,
    title: "Circuit Simulator | Year 1 EYP",
    link: "https://github.com/KelvinMang/Circuit-Simulator"
  }

]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5> My Recent Work </h5>
      <h2> Projects </h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,link}) => {
            return (
              <article key = {id} className='portfolio__items'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}/>
              </div>
                
              <h3> {title} </h3>
              <div className='portfolio__item-cta'>
              {/* Add your own github project link and live demo links here */}
              <a href={link} className='btn' target='_blank' > Click Here </a>
              </div>
    
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio