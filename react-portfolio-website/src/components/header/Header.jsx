import React from 'react'
import './header.css'
import CTA from './CTA'
import real_me from '../../assets/real_me.jpeg'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello I'm
        </h5>
        <h1> Kelvin Mang </h1>
        <h5 className='text-light'> Penultimate year MEng EEE with Management student at Imperial College London</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
           <img src = {ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header