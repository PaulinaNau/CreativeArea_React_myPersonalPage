import React from 'react';
import { FooterStyled, FooterLink } from './Footer.styles';

const Footer = () => (
  <>
  <FooterStyled>
    <FooterLink to='/portfolio'>Portfolio</FooterLink>
    <FooterLink to='/uslugi'>Usługi</FooterLink>
    <FooterLink to='/kontakt'>Kontakt</FooterLink>
    </FooterStyled>
  </>
);

export default Footer;
