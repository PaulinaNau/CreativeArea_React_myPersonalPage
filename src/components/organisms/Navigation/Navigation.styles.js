import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
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
  `;

  export const StyledLogo = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
  `
  export const StyledHamburger = styled.div`

  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 40px;
    height: auto;
    
    img {
      width: 100%;
      height: auto;
    }
  }

  
  `
  export const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `


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
&.active {
  font-weight: 600;
  color: #c60089;
}
::after {
  display: block;
  content: '';
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
