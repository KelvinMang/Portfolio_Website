import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Mars_Rover.png'
import IMG2 from '../../assets/Eatchy.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

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