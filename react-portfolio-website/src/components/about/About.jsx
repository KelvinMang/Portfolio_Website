import React from 'react'
import './about.css'
import KELVIN from '../../assets/Kelvin-about.png'
import {FiAward} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {VscRootFolder} from 'react-icons/vsc'
import realme from '../../assets/real_me.jpeg'
const About = () => {
  return (
    <section id = 'about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={KELVIN} alt = "About Image" />
          </div>  
          </div>
          
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FiAward className='about__icon'/>
                <h5> Experience </h5>
                <small> 3rd Year EEE with Management at Imperial College </small>
              </article>

              <article className='about__card'>
                <FaUsers className='about__icon'/>
                <h5> Interests </h5>
                <small> Data Analytics and Investment </small>
              </article>

              <article className='about__card'>
                <VscRootFolder className='about__icon'/>
                <h5> Skills </h5>
                <small> 3 Years in Programming & Finance Competitions </small>
              </article>
            </div>

            <p>
            I am a diligent penultimate-year student at Imperial College London, studying Electrical and Electronic Engineering with Management. With a strong background in programming, data analysis, and financial modeling, I am passionate about learning and growth. Currently, I am actively exploring opportunities within the dynamic FinTech industry.
            </p> 

            <a href='#contact' className='btn btn-primary'> Let's Talk </a>

          </div>
      </div>
    </section>
  )
}

export default About

