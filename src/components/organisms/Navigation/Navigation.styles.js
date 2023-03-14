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
text-decoration: none;
font-size: ${({ theme }) => theme.fontSize.l}
color: ${({ theme }) => theme.colors.black};
font-weight: 300;
margin: 20px;
text-transform: uppercase;
&.active {
  color: ${({ theme }) => theme.colors.rose};
  font-weight: 400;
  transition: color 400ms linear;
}
::after {
  display: block;
  content: '';
  border-bottom: solid 1px ${({ theme }) => theme.colors.black};  
  transform: scaleX(0);  
  transition: transform 300ms ease-in-out;
}
&:not(.active):hover:after { 
  transform: scaleX(1);
 }
:visited {
  color: ${({ theme }) => theme.colors.black};
}

:hover {
  color: ${({ theme }) => theme.colors.rose};
  text-decoration:none
}
`;
