import styled from 'styled-components';

export const WelcomeTitle = styled.h1`
  font-weight: 400;
  color: ${ props => props.isLight ? '#727272' : '#242020'};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: left;
  font-family: 'Raleway', sans-serif;
`;
export const WelcomeSubtitle = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lighGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: left;
  font-family: 'Raleway', sans-serif;
`;

export const Title = styled.p`
font-size: ${({ theme }) => theme.fontSize.xl};
color: ${({ theme }) => theme.colors.black};
font-weight: bold; 
textAlign: left;
`
export const Subtitle = styled.p`
font-size: ${({ theme }) => theme.fontSize.l};
color: ${({ theme }) => theme.colors.black};
font-weight: bold; 
textAlign: left;
`

export const MainText = styled.p`
font-size: ${({ theme }) => theme.fontSize.m};
color: ${({ theme }) => theme.colors.black};
font-weight: bold; 
textAlign: left;
`

