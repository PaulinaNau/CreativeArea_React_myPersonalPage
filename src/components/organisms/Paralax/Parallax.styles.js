import styled from 'styled-components';
import img from 'assets/images/Parallax.webp';

export const ParallaxStyled = styled.div`
  width: 100%;
  height: 250px;
  margin: 100px 0;
  background-image: url(${img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 80%;
  display: flex;
  justify-content: left;
  align-items: center;
  &::after {
    font-family: 'Raleway', sans-serif;
    content: "Poznajmy się";
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
    font-size: 60px;
    text-shadow: -2px 2px 2px ${({ theme }) => theme.colors.white};
    padding: 0 0 0 50px; 
    @media screen and (max-width: 768px) {
      font-size: 40px;
      text-shadow: none;
      font-weight: 300;
    }
  }
`;
