import React from 'react'
import './header.css'
import CTA from './CTA'
import KELVIN from '../../assets/Kelvin_Mang_Pro_2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__copy">
          <p className="header__eyebrow">Entrepreneur &amp; Educator</p>
          <h1>Kelvin Mang</h1>
          <p className="header__lead">
            Building education and AI ventures.
          </p>
          <p className="header__role">
            Managing Director &amp; Partner at The Achievers · Co-Founder at HiBro AI
          </p>
          <p className="header__architecture">I build / I think / I advise</p>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="header__portrait">
          <div className="header__portrait-frame">
            <img src={KELVIN} alt="Kelvin Mang, entrepreneur and educator" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
