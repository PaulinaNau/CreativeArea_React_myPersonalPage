import React from 'react';
import { ReactComponent as Hamburger } from 'assets/icons/hamburgerMenu.svg';
import { StyledHamburgerMenu, StyledLink, StyledHamburger } from './Nav.styles';
import NavLinks from './NavLinks';

const NavMobile = () => {
  return (
    <>
    <div className='d-flex'>
      
     <StyledHamburgerMenu>
        <NavLinks />
      </StyledHamburgerMenu>
      <StyledHamburger>
        <Hamburger alt="creative block menu"></Hamburger>
      </StyledHamburger>
      </div>
    </>
  );
};

export default NavMobile;
