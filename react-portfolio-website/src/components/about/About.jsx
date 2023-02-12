import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {VscRootFolder} from 'react-icons/vsc'
const About = () => {
  return (
    <section id = 'about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt = "About Image" />
          </div>  
          </div>
          
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FiAward className='about__icon'/>
                <h5> Experience </h5>
                <small> 3+ Years Coding </small>
              </article>

              <article className='about__card'>
                <FaUsers className='about__icon'/>
                <h5> Clients </h5>
                <small> 200+ Worldwide </small>
              </article>

              <article className='about__card'>
                <VscRootFolder className='about__icon'/>
                <h5> Project </h5>
                <small> 80+ Completed </small>
              </article>
            </div>

            <p>
            An Electrical and Electronic Engineering with Management student with experiences in power supply/ software/ business case studies.
            I participated in the Close the Deal International M&A Competition and was ranked the first runner up.
            I'm able to leverage my skills in power electronics to build a solar charging station.
            I am eager to learn and currently finding internship or placement opportunities in Fintech.
            </p> 

            <a href='#contact' className='btn btn-primary'> Let's Talk </a>

          </div>
      </div>
    </section>
  )
}

export default About

