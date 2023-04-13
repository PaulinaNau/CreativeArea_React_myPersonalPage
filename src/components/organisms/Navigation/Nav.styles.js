import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: fixed;
  z-index: 100;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const StyledLogo = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 180px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

// Hamburger Menu

export const StyledHamburger = styled.div`
display: none;
width: 40px;

@media (max-width: 768px) {
  display: block;
}

`

export const StyledHamburgerMenu = styled.div`
display: none;
width: 200px;
position: absolute;
top: 100px;
right: 0px;

@media (max-width: 768px) {
  display: block;
}
`


// export const StyledHamburger = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
    
//     display: block;
//     width: 40px;
//     height: auto;

//     img {
//       width: 100%;
//       height: auto;
//     }
//   }
// `;

// export const HamburgerMenuStyled = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   padding: 50px;
//   width: 200px;
//   height: auto;
//   border: 1px solid grey;
//   background-color: #faf9f5;
// `;

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  `;

export const StyledLink = styled(NavLink)`
font-family: 'Raleway', sans-serif;
text-decoration: none;
font-size: ${({ theme }) => theme.fontSize.l}
color: ${({ theme }) => theme.colors.darkGrey};
font-weight: 400;
margin: 20px;
text-transform: uppercase;
transition: color 400ms ease-in-out;
transition: font-weight 600ms ease-in-out;
width: 100%;
text-align: center;
&.active {
  font-weight: 600;
  color: #c60089;
}
::after {
  display: block;
  content: '';
  width: 100%;
  border-bottom: solid 1px ${({ theme }) => theme.colors.darkGrey};  
  transform: scaleX(0);  
  transition: transform 300ms ease-in-out;
}
&:not(.active):hover:after { 
  transform: scaleX(1);
 }
 &:not(.active):visited {
  color: ${({ theme }) => theme.colors.darkGrey};
}
:hover {
  color: #c60089;
  text-decoration: none;
}
`;
