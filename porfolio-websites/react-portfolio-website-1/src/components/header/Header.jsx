import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/jonnysoth.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jonny Vorn Soth</h1>
        <h5 className="text-light">Fullstack Developer In Training</h5>
        <CTA />
        <HeaderSocials />
      </div>

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </header>
  )
}

export default Header