import React from 'react';
import './header.css'
import CTA from '../../components/header/CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
          <h5>Hello I'am</h5>
          <h1>Timothy Coder</h1>
          <h5 className='text-light'>Fullstack Developer, Product Designer...</h5>
          <CTA />
          <HeaderSocials /> 

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
