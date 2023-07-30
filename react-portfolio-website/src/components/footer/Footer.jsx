import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> Kelvin Mang </a>

      <ul className='permalinks'>
        <li><a href='#'> Home </a></li>
        <li><a href='#about'> About </a></li>
        <li><a href='#skills'> Skills </a></li>
        <li><a href='#work_experience'> Work Experience </a></li>
        <li><a href='#portfolio'> Project </a></li>
        <li><a href='#contact'> Contact </a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/KelvinMang021'><BsFacebook /></a>
        <a href='https://www.instagram.com/kelvinmang021'> <BsInstagram /></a>
        <a href='https://www.linkedin.com/in/kelvinmang'> <BsLinkedin /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Kelvin Mang. All rights deserved</small>
      </div>

    </footer>
  )
}

export default Footer