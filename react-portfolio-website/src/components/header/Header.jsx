import React from 'react'
import './header.css'
import CTA from './CTA'
import KELVIN from '../../assets/Kelvin_Mang_Pro_2.png'
import HeaderSocials from './HeaderSocials'
import { ACHIEVERS_URL, HIBRO_URL } from '../../data/site'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__copy">
          <h1>Kelvin Mang</h1>
          <p className="header__identity">Entrepreneur, Technology Builder &amp; Operator</p>
          <p className="header__lead">
            I build and operate businesses across education, AI and technology,
            with a focus on scalable systems, practical products and better ways of working.
          </p>

          <ul className="header__roles">
            <li>
              <a href={ACHIEVERS_URL} target="_blank" rel="noreferrer">
                <span>The Achievers</span>
                Managing Director
              </a>
            </li>
            <li>
              <a href={HIBRO_URL} target="_blank" rel="noreferrer">
                <span>HiBro AI</span>
                Co-Founder
              </a>
            </li>
          </ul>

          <CTA />
          <HeaderSocials />
        </div>

        <div className="header__portrait">
          <div className="header__portrait-frame">
            <img src={KELVIN} alt="Kelvin Mang, entrepreneur, technology builder and operator" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
