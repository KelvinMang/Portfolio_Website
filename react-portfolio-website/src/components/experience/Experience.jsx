import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'
const Experience = () => {
  return (
    <section id = 'experience'> 
    <h5> What Skills I Have</h5>
    <h2> My Experience </h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3> Software Development </h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> Python </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> Flutter </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> C++ </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> React </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon_move'/>
            <div>
              <h5> Machine Learning </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
        </div>
      </div>
      {/* END OF FRONTEND */}

      <div className='experience__backend'>
      <h3> Financial Competencies </h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> Modeling </h5>
              <small className='text-light'> Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> Fin. Analysis </h5>
              <small className='text-light'> Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> Budgeting </h5>
              <small className='text-light'> Basic </small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> Inv. Analysis </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h5> Data Analysis </h5>
              <small className='text-light'> Intermediate </small>
            </div>
          </article>
        </div>

        
      </div>

    </div>
    

    </section>
  )
}

export default Experience