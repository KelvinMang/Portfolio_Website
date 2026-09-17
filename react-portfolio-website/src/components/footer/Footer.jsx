import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { EMAIL, LINKEDIN } from '../../data/site'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Kelvin Mang</a>
      <p className="footer__tagline">
        Entrepreneur, technology builder and operator.
        Education, AI and technology — through The Achievers and HiBro AI.
      </p>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#ventures">Ventures</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#insights">Insights</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
        <a href={`mailto:${EMAIL}`} className="footer__email">{EMAIL}</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Kelvin Mang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
