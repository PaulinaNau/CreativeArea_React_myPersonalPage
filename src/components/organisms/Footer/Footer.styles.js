import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  margin: 20px;
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizeMobile.m};
    margin: 10px;
    }
:hover {
    color: ${({ theme }) => theme.colors.white};}
`;
