import styled from 'styled-components';

export const WelcomeTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: ${(props) => (props.isLight ? '#727272' : '#242020')};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: left;
  line-height: 55px;
  padding: 0;
  margin: 0;
`;
export const WelcomeSubtitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: left;
  line-height: 55px;
  padding: 0;
  margin: 0;
`;

export const Title = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  text-align: left;
`;
export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  textalign: left;
`;

export const MainText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
`;
