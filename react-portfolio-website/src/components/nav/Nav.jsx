import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiMessage2Line} from 'react-icons/ri'
import {useState} from 'react'
import {HiOutlineFolder} from 'react-icons/hi'
import {MdOutlineDesignServices} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}> <AiOutlineHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} > <AiOutlineUser /> </a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''} > <AiOutlineBook /> </a>
      <a href='#work_experience' onClick={() => setActiveNav('#work_experience')} className={activeNav === '#work_experience' ? 'active': ''} > <MdOutlineDesignServices /> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''} > <HiOutlineFolder /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''} > <RiMessage2Line /> </a>
    </nav>
  )
}

export default Nav