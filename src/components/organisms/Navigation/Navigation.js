import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavWrapper,
  StyledLogo,
  StyledNavigation,
  StyledLink,
  StyledHamburger,
} from './Navigation.styles';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Hamburger } from 'assets/icons/hamburger-menu.svg';

const Navigation = () => {
  return (
    <>
      <NavWrapper>
        <div>
          <Link to="/">
            <StyledLogo>
              <Logo alt="creative block design studio"></Logo>
            </StyledLogo>
            </Link>
            <StyledHamburger>
              <Hamburger alt="creative block menu"></Hamburger>
            </StyledHamburger>
        
        </div>
        <StyledNavigation>
          <StyledLink to="/omnie">O mnie</StyledLink>
          <StyledLink to="/portfolio">Realizacje</StyledLink>
          <StyledLink to="/uslugi">Usługi</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
        </StyledNavigation>
      </NavWrapper>
    </>
  );
};

export default Navigation;
