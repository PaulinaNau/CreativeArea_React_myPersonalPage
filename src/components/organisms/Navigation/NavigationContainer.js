import React from 'react';
import { NavWrapper } from './Nav.styles';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import LogoHome from './LogoHome';

const Navigation = () => {
  return (
    <>
      <NavWrapper>
        <LogoHome></LogoHome>
        <NavMobile></NavMobile>
        <NavDesktop></NavDesktop>
      </NavWrapper>
    </>
  );
};

export default Navigation;
