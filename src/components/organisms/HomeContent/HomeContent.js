import React from 'react';
import { Wrapper } from './HomeContent.styles';
import { WelcomeTitle } from 'assets/styles/fonts';
import HomeImg from 'components/atoms/HomeImg/HomeImg';
import { Button } from 'components/atoms/Button/Button';

const HomeContent = () => (
  <>
    <Wrapper>
      <div>
        <WelcomeTitle>Spójność wizualna <span isLight>Twojej marki</span></WelcomeTitle> 
        <Button>ZObacz</Button>
      </div>

      <HomeImg></HomeImg>
    </Wrapper>
  </>
);

export default HomeContent;
