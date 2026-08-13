import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { LINKEDIN } from '../../data/site'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <BsLinkedin />
        <span>LinkedIn</span>
      </a>
    </div>
  )
}

export default HeaderSocials
