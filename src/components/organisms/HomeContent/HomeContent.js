import React from 'react';
import { Wrapper } from './HomeContent.styles';
import { WelcomeSubtitle, WelcomeTitle, MainText } from 'assets/styles/fonts';
import HomeImg from 'components/atoms/HomeImg/HomeImg';
import { Button } from 'components/atoms/Button/Button';

const HomeContent = () => (
  <>
    <Wrapper>
      <div>
        <WelcomeTitle>Spójność wizualna marki</WelcomeTitle> 
        <WelcomeSubtitle>to krok do sukcesu</WelcomeSubtitle>
        <MainText>Pokażę piękną stronę Twojego biznesu</MainText>
        <Button>Zobacz realizacje</Button>
      </div>

      <HomeImg></HomeImg>
    </Wrapper>
  </>
);

export default HomeContent;
