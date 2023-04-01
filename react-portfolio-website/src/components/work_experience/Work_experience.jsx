import React, { useRef, useState } from "react";
import './work_experience.css'
import Amazon from "../../assets/Amazon_logo.png"
import AskLora from "../../assets/AskLora_logo.png"

import {Pagination, Scrollbar, Navigation} from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Amazon,
    name: 'Amazon UK Services Limited',
    role: 'Operations Intern',
    date: '(03/04/2023 - 15/09/2023)',
    description: 'As an Operations Intern at Amazon UK, I\'ve developed expertise in data analysis, process mapping, and problem-solving by collaborating with managers, tech teams, and associates. My experience in addressing complex business challenges has led to optimized processes and improved efficiency within the company.'
  },
  {
    avatar: AskLora,
    name: 'LORA Technologies, Limited',
    role: 'Technical Product Intern ',
    date: '(18/07/2022 - 16/09/2022)',
    description: 'As a Technical Product Intern at Lora Technologies, I boosted Instagram followers by 20% and engagement by 10% through marketing campaigns. I also conducted competitor analysis and usability testing, and contributed to user stories and product documentation, enhancing product development efficiency.'
  },
]
const Work_experience = () => {
  return (
    <section id ='work_experience'> 
      <h5> My previous work experience</h5>
      <h2> Work experience </h2>

      <Swiper className='container work_experience__container'
        pagination={{clickable: true}}
        modules={[Pagination, Navigation]}
        spaceBetween = {40}
        slidesPerView = {1}
        >

        {
          data.map(({avatar, name, role , date , description}, index) => {
            return (
              <SwiperSlide key={index} className='work_experience'>
              <div className='company_logo'> 
                <img src = {avatar}></img>
              </div>
              <h5 className='company__name'> {name} </h5>
              <div className = 'job__details'>
              <h5 className="company__role"> {role}  </h5>
              <h6 className="employed__date"> {date}  </h6>
              </div>
              <small className='job__review'>
                {description}
              </small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>

        
        
        
        
    </section>
  )
}

export default Work_experience