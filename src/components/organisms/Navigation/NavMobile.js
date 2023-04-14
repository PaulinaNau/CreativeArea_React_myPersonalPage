// import React from 'react';
// import { ReactComponent as Hamburger } from 'assets/icons/hamburgerMenu.svg';
// import { StyledHamburgerMenu, StyledHamburger, StyledBar} from './Nav.styles';
import NavLinks from './NavLinks';
import './styles.css';
import { useState } from 'react';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpenedState = () => {
    let reverseOpened = isOpen;
    setIsOpen(!reverseOpened);
  };

  console.log(isOpen);

  return (
    <>
      <div>
        <div className={isOpen ? 'nav-wrapper nav-wrapper-open' : 'nav-wrapper'} onClick={() => setOpenedState()}>
          <div className="nav-bar"></div>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-items">
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
