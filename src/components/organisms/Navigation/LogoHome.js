import React from 'react';
import { StyledLogo } from './Nav.styles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

const LogoHome = () => (
  <Link to="/">
    <StyledLogo>
      <Logo alt="creative block design studio"></Logo>
    </StyledLogo>
  </Link>
);

export default LogoHome;
