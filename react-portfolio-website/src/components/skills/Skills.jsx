import React from 'react'
import './skills.css'
import {HiBadgeCheck} from 'react-icons/hi'
const Experience = () => {
  return (
    <section id = 'skills'> 
    <h5> What Skills I Have</h5>
    <h2> Skills </h2>

    <div className='container skills__container'>
      <div className='skills__software'>
        <h3> Software Development </h3>
        <div className='skills__content'>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Python </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Flutter </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> C++ </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> React </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Machine Learning </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
        </div>
      </div>
      {/* END OF FRONTEND */}

      <div className='skilskills'>
      <h3> Financial Competencies </h3>
        <div className='skills__content'>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Modeling </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Fin. Analysis </h5>
              <small className='text-light'> Intermediate</small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Budgeting </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Inv. Analysis </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
          <article className='skills__details'>
            <HiBadgeCheck className='skills__details-icon'/>
            <div>
              <h5> Data Analysis </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
        </div>

        
      </div>

    </div>
    

    </section>
  )
}

export default Experience