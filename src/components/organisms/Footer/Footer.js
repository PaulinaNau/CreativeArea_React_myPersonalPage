import React from 'react';
import { FooterStyled } from './Footer.styles';
import { MainText } from 'assets/styles/fonts';

const Footer = () => (
  <>
  <FooterStyled>
    <MainText className='p-3' isWhite>Portfolio</MainText>
    <MainText className='p-3' isWhite>Współpraca</MainText>
    <MainText className='p-3' isWhite>Kontakt</MainText>
    </FooterStyled>
  </>
);

export default Footer;
