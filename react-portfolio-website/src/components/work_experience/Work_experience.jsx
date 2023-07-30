import React from "react";
import './work_experience.css'
import Amazon from "../../assets/Amazon_logo.png"
import AskLora from "../../assets/AskLora_logo.png"
import McKinsey from "../../assets/McKinsey_logo.png"

import {Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Amazon,
    name: 'Amazon UK Services Limited',
    role: 'Operations Intern',
    date: '(03/04/2023 - 15/09/2023)',
    description: 'Proficiently utilized Python to clean and preprocess datasets while leveraging Matplotlib, NumPy, and Seaborn for insightful data visualizations, aiding decision-making. Led the development and implementation of automated dashboards for 3 Amazon projects using Excel Macros and VBA, projecting annual savings of over £70K and boosting operational efficiency.'
  },
  {
    avatar: AskLora,
    name: 'LORA Technologies, Limited',
    role: 'Technical Product Intern ',
    date: '(18/07/2022 - 16/09/2022)',
    description: 'Led successful social media campaigns, creating 20+ engaging content pieces for Instagram, Facebook, and Linkedin. Increased Instagram followers by 20% and improved engagement by 10%. Conducted global competitor analysis for 18 broker and wealth management companies, validating our product and business model through 20+ usability testing sessions. Assisted in user story creation, conducted 10+ user interviews, and contributed to feature backlogs and product documentation.'
  },
  {
    avatar: McKinsey,
    name: 'McKinsey & Company',
    role: 'Discover 2022 Spring Intern',
    date: '(7/4/2022 - 8/4/2022)',
    description: 'Acquired problem-solving and management skills essential in business consulting, mastering McKinsey\'s tools and methodologies for diverse challenges. Collaborated with a group of seven to analyze and solve a mock McKinsey business case study, delivering a comprehensive final presentation. Our recommendations focused on assisting a hypothetical university in improving its ranking and revenue.'

  }
]
const Work_experience = () => {
  return (
    <section id ='work_experience'> 
      <h5> My previous work experience</h5>
      <h2> Work Experience </h2>

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